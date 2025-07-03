"use client"

import { useState, Suspense } from "react"
import { ArrowRight } from "lucide-react"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import type { Category } from "@prisma/client"

interface DiscoverSectionProps {
  categories: Category[]
}

// Create a loading component for the category filters
function CategoryFiltersLoading() {
  return (
    <div className="w-full max-w-7xl">
      <ScrollArea className="w-full whitespace-nowrap mb-8">
        <div className="flex space-x-2 p-1 pb-3">
          <div className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="h-8 w-18 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse flex-shrink-0"></div>
          <div className="h-8 w-14 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse flex-shrink-0"></div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

// Separate component that uses useSearchParams
function CategoryFilters({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("category")

  const handleCategoryClick = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (slug === null) {
      params.delete("category")
    } else {
      params.set("category", slug)
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="w-full max-w-7xl">
      <ScrollArea className="w-full whitespace-nowrap mb-8">
        <div className="flex space-x-2 p-1 pb-3">
          <Button
            key="all"
            variant={categoryId === null ? "default" : "secondary"}
            className="rounded-full flex-shrink-0 font-medium"
            size="sm"
            onClick={() => handleCategoryClick(null)}
          >
            All
          </Button>

          {categories.map((category) => (
            <Button
              key={category.id}
              variant={categoryId === category.slug ? "default" : "secondary"}
              className="rounded-full flex-shrink-0 text-sm"
              size="sm"
              onClick={() => handleCategoryClick(category.slug)}
            >
              {category.name}
            </Button>
          ))}

          <Button variant="ghost" size="icon" className="flex-shrink-0 rounded-full">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

export default function DiscoverSection({ categories }: DiscoverSectionProps) {
  const [activeTab, setActiveTab] = useState("Templates")

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-2 bg-white dark:bg-black">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">Discover</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Explore our collection of email components and templates to create beautiful, responsive emails.
        </p>
      </div>

      <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex">
          <button
            className={`py-2 mr-8 font-medium ${activeTab === "Templates" ? "border-b-2 border-black dark:border-white text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            onClick={() => setActiveTab("Templates")}
          >
            Templates
          </button>
          <button
            className={`py-2 font-medium ${activeTab === "Components" ? "border-b-2 border-black dark:border-white text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            onClick={() => setActiveTab("Components")}
          >
            Components
          </button>
        </div>
      </div>

      <Suspense fallback={<CategoryFiltersLoading />}>
        <CategoryFilters categories={categories} />
      </Suspense>
    </div>
  )
}