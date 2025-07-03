"use client"


import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import type { Category } from "@prisma/client"

interface DiscoverSectionProps {
  categories: Category[]
}

export default function DiscoverSection({ categories }: DiscoverSectionProps) {
  const [activeTab, setActiveTab] = useState("Templates")
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
    </div>
  )
}
