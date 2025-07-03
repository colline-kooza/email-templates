import { notFound } from "next/navigation"
import ComponentPreview from "@/components/ComponentPreview"
import SimilarTemplates from "@/components/SimilarTemplates"
import fs from "fs"
import path from "path"
import { Suspense } from "react"
import { getTemplateBySlug, getTemplates } from "@/actions/templates"

// Generate static tags for templates
const generateTags = (categoryName: string | null) => {
  const baseTags = ["UI Component", "Template"]
  
  if (categoryName) {
    return [...baseTags, categoryName]
  }
  
  return baseTags
}

// Main content loading fallback
function MainContentLoadingFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="animate-pulse">
        {/* Header section */}
        <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-md w-3/4 mb-6"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-md w-1/2 mb-8"></div>

        {/* Tags */}
        <div className="flex gap-2 mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 dark:bg-gray-800 rounded-full w-24"></div>
          ))}
        </div>

        {/* Preview section */}
        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg mb-8"></div>

        {/* Source code section */}
        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8"></div>
      </div>
    </div>
  )
}

// Loading fallback for similar templates
function SimilarTemplatesLoadingFallback() {
  return (
    <div className="py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Loading similar templates...</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
              <div className="p-3">
                <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Component to load main template content
async function MainTemplateContent({ slug }: { slug: string }) {
  const template = await getTemplateBySlug(slug)
  const componentName = template?.filePath
  
  if (!template) {
    notFound()
  }
  
  const filePath = path.join(process.cwd(), "components", "emails", `${componentName}.tsx`)
  
  let sourceCode = ""
  try {
    sourceCode = fs.readFileSync(filePath, "utf8")
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    notFound()
  }
  
  const metadata = {
    title: template?.title,
    description: template?.description,
    tags: generateTags(template?.category?.name || null),
    createdAt: template?.createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }
  
  return (
    <ComponentPreview
      componentName={componentName}
      title={metadata.title}
      description={metadata.description}
      tags={metadata.tags}
      createdDate={metadata.createdAt}
      sourceCode={sourceCode}
      isEmailTemplate={true}
    />
  )
}

// Component to load similar templates
async function SimilarTemplatesSection({ currentSlug }: { currentSlug: string }) {
  const { templates } = await getTemplates({ limit: 8 })
  
  // Convert database templates to the format expected by SimilarTemplates
  const formattedTemplates = templates.map((template) => ({
    id: template.slug, // Use slug as ID for routing
    name: template.title,
    price: template.isFree ? "Free" : template.price || "$0",
    image: template.image,
    category: template.category?.name,
  }))
  
  return (
    <SimilarTemplates
      templates={formattedTemplates}
      currentTemplateId={currentSlug}
      title="Explore similar templates"
    />
  )
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  return (
    <div>
      <Suspense fallback={<MainContentLoadingFallback />}>
        <MainTemplateContent slug={slug} />
      </Suspense>
      
      <Suspense fallback={<SimilarTemplatesLoadingFallback />}>
        <SimilarTemplatesSection currentSlug={slug} />
      </Suspense>
    </div>
  )
}