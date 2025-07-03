"use client"

import { useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  slug: string
}

interface TemplateFiltersProps {
  categories: Category[]
  className?: string
  onClose?: () => void
  isDrawer?: boolean
}

export function TemplateFilters({ categories, className, onClose, isDrawer = false }: TemplateFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    pricing: true,
    sortBy: true,
  })

  // Get current filter values from URL
  const selectedCategory = searchParams.get("category")
  const selectedPricing = searchParams.get("pricing")
  const selectedSort = searchParams.get("sort") || "newest"

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== "all") {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    // Reset to first page when filters change
    params.delete("page")
    const queryString = params.toString()
    const url = queryString ? `${pathname}?${queryString}` : pathname
    router.push(url, { scroll: false })
  }

  const clearAllFilters = () => {
    router.push(pathname, { scroll: false })
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const activeFiltersCount = [selectedCategory, selectedPricing].filter(Boolean).length

  return (
    <div
      className={cn(
        "dark:bg-transparent border-r border-gray-200 dark:border-gray-800 bg-blur-2xl bg-transparent backdrop-blur-md",
        isDrawer ? "h-full overflow-y-auto" : "h-fit",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <h3 className="font-semibold text-lg">Filters</h3>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Clear all
            </Button>
          )}
          {isDrawer && onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Categories Filter */}
        <div>
          <button
            onClick={() => toggleSection("categories")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Categories</h4>
            {expandedSections.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.categories && (
            <div className="mt-3 space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-all"
                  checked={!selectedCategory}
                  onCheckedChange={() => updateFilters("category", null)}
                />
                <Label htmlFor="category-all" className="text-sm font-medium">
                  All Categories
                </Label>
              </div>
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.slug}`}
                    checked={selectedCategory === category.slug}
                    onCheckedChange={() =>
                      updateFilters("category", selectedCategory === category.slug ? null : category.slug)
                    }
                  />
                  <Label htmlFor={`category-${category.slug}`} className="text-sm text-gray-600 dark:text-gray-300">
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Pricing Filter */}
        <div>
          <button
            onClick={() => toggleSection("pricing")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Pricing</h4>
            {expandedSections.pricing ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.pricing && (
            <RadioGroup
              value={selectedPricing || "all"}
              onValueChange={(value) => updateFilters("pricing", value)}
              className="mt-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="pricing-all" />
                <Label htmlFor="pricing-all" className="text-sm font-medium">
                  All Templates
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="pricing-free" />
                <Label htmlFor="pricing-free" className="text-sm text-gray-600 dark:text-gray-300">
                  Free Templates
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="pricing-paid" />
                <Label htmlFor="pricing-paid" className="text-sm text-gray-600 dark:text-gray-300">
                  Premium Templates
                </Label>
              </div>
            </RadioGroup>
          )}
        </div>

        <Separator />

        {/* Sort By Filter */}
        <div>
          <button
            onClick={() => toggleSection("sortBy")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Sort By</h4>
            {expandedSections.sortBy ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.sortBy && (
            <RadioGroup value={selectedSort} onValueChange={(value) => updateFilters("sort", value)} className="mt-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="newest" id="sort-newest" />
                <Label htmlFor="sort-newest" className="text-sm text-gray-600 dark:text-gray-300">
                  Newest First
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="oldest" id="sort-oldest" />
                <Label htmlFor="sort-oldest" className="text-sm text-gray-600 dark:text-gray-300">
                  Oldest First
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-low" id="sort-price-low" />
                <Label htmlFor="sort-price-low" className="text-sm text-gray-600 dark:text-gray-300">
                  Price: Low to High
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-high" id="sort-price-high" />
                <Label htmlFor="sort-price-high" className="text-sm text-gray-600 dark:text-gray-300">
                  Price: High to Low
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="title" id="sort-title" />
                <Label htmlFor="sort-title" className="text-sm text-gray-600 dark:text-gray-300">
                  Alphabetical
                </Label>
              </div>
            </RadioGroup>
          )}
        </div>
      </div>
    </div>
  )
}
