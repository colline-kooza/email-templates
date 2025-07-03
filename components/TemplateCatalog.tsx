"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { getTemplates } from "@/actions/templates"
import { getFeaturedCategories } from "@/actions/template-categories"
import { TemplateSkeleton } from "./TemplateSkeleton"
import { MobileFilterDrawer } from "./mobile-filter-drawer"
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { TemplateFilters } from "./TemplateFilters"

interface Template {
  id: string
  title: string
  image: string
  isFree: boolean
  slug: string
  price: string | null
  categorySlug: string | null
  category: { name: string } | null
}

interface TemplatePage {
  templates: Template[]
  nextCursor: string | undefined
}

export default function TemplateCatalog() {
  const searchParams = useSearchParams()
  const categorySlug = searchParams.get("category")
  const pricing = searchParams.get("pricing")
  const sort = searchParams.get("sort") || "newest"

  const { ref, inView } = useInView()

  // Fetch categories for filters
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: getFeaturedCategories,
  })

  const categories = categoriesData?.categories || []

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery<TemplatePage>({
    queryKey: ["templates", categorySlug, pricing, sort],
    queryFn: async ({ pageParam = undefined }) => {
      const result = await getTemplates({
        cursor: pageParam as string | undefined,
        categorySlug: categorySlug || undefined,
        pricing: pricing || undefined,
        sort,
        isInitialLoad: !pageParam,
      })
      return result
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage])

  const templates = data?.pages.flatMap((page) => page.templates) || []
  const isLoading = status === "pending"

  // Get display title based on filters
  const getDisplayTitle = () => {
    const categoryName = templates[0]?.category?.name
    const parts = []

    if (categoryName) {
      parts.push(categoryName)
    }

    if (pricing === "free") {
      parts.push("Free")
    } else if (pricing === "paid") {
      parts.push("Premium")
    }

    parts.push("Templates")
    return parts.join(" ")
  }

  return (
    <div className="md:py-8 py-2 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div 
              className=""
            >
              <TemplateFilters categories={categories} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header with Mobile Filter Button */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                {isLoading ? "Loading Templates..." : getDisplayTitle()}
              </h2>
              <MobileFilterDrawer categories={categories} />
            </div>

            {/* Results Count */}
            {!isLoading && templates.length > 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Showing {templates.length} template{templates.length !== 1 ? "s" : ""}
              </p>
            )}

            {/* Templates Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <TemplateSkeleton key={index} />
                ))}
              </div>
            ) : templates.length === 0 ? (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No templates found</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Try adjusting your filters or search criteria to find what you're looking for.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Link href={`/template/${template.slug}`} key={template.id} className="group block">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 aspect-[4/6] mb-3">
                      <Image
                        src={template.image || "/placeholder.jpg"}
                        alt={template.title}
                        width={500}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 object-top"
                      />
                      {template.isFree && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">Free</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {template.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {template.category?.name || "Uncategorized"}
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {template.isFree ? "Free" : template.price || "Free"}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Load More Trigger */}
            {(hasNextPage || isFetchingNextPage) && (
              <div ref={ref} className="flex justify-center mt-8">
                {isFetchingNextPage && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}