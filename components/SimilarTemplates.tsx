"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Template {
  id: string
  name: string
  price: string
  image: string
  brand?: string
  category?: string
}

interface SimilarTemplatesProps {
  templates: Template[]
  currentTemplateId?: string
  title?: string
}

export default function SimilarTemplates({
  templates,
  currentTemplateId,
  title = "Explore similar templates",
}: SimilarTemplatesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Filter out current template if it exists in the list
  const filteredTemplates = currentTemplateId
    ? templates.filter((template) => template.id !== currentTemplateId)
    : templates

  // Only show up to 12 templates to allow for better pagination
  const displayTemplates = filteredTemplates.slice(0, 12)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const itemsPerPage = isLargeScreen ? 4 : 1
  const maxIndex = Math.max(0, displayTemplates.length - itemsPerPage)

  const handlePrevious = () => {
    if (isLargeScreen) {
      // For large screens, scroll by container width
      const container = scrollContainerRef.current
      if (container) {
        container.scrollBy({
          left: -container.clientWidth,
          behavior: "smooth",
        })
      }
    } else {
      // For small screens, use index-based navigation
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
    }
  }

  const handleNext = () => {
    if (isLargeScreen) {
      // For large screens, scroll by container width
      const container = scrollContainerRef.current
      if (container) {
        container.scrollBy({
          left: container.clientWidth,
          behavior: "smooth",
        })
      }
    } else {
      // For small screens, use index-based navigation
      setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
    }
  }

  const canGoPrevious = isLargeScreen 
    ? true // Always allow scrolling on large screens
    : currentIndex > 0

  const canGoNext = isLargeScreen 
    ? true // Always allow scrolling on large screens
    : currentIndex < maxIndex

  if (displayTemplates.length === 0) return null

  return (
    <div className="py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={!canGoNext}
              className="transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Templates container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className={`
              flex transition-transform duration-300 ease-in-out
              ${isLargeScreen 
                ? 'overflow-x-auto gap-6 pb-4 scrollbar-hide' 
                : ''
              }
            `}
            style={{
              transform: isLargeScreen 
                ? 'none' 
                : `translateX(-${currentIndex * 100}%)`,
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {displayTemplates.map((template, index) => (
              <div 
                key={template.id || index} 
                className={`
                  flex-shrink-0 transition-all duration-300
                  ${isLargeScreen 
                    ? 'w-[calc(25%-18px)] min-w-[250px]' 
                    : 'w-full px-2'
                  }
                `}
              >
                <Link href={`/template/${template.id}`} className="block group">
                  <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800/10 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="aspect-[4/6] overflow-hidden">
                      <img
                        src={template.image || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 object-top"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {template.name}
                          </h3>
                          {template.brand && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1">
                              {template.brand}
                            </p>
                          )}
                        </div>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400 flex-shrink-0">
                          {template.price && template.price !== "0"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile pagination dots */}
        {!isLargeScreen && displayTemplates.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: displayTemplates.length }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to template ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Template counter */}
        <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          {isLargeScreen 
            ? `Showing ${Math.min(4, displayTemplates.length)} of ${displayTemplates.length} templates`
            : `${currentIndex + 1} of ${displayTemplates.length}`
          }
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}