"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { Category } from "@prisma/client"

interface CategoryCarouselProps {
  categories: Category[]
}

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  return (
  <Carousel className="w-full max-w-7xl mx-auto relative z-10 lg:mt-8 pointer-events-none opacity-60">
  <CarouselContent className="-ml-2 md:-ml-4">
    {categories.map((category, index) => (
      <CarouselItem
        key={category.id}
        className="pl-2 md:pl-4 lg:basis-1/4 md:basis-1/2 basis-full cursor-not-allowed"
      >
        <div>
          <Card className="overflow-hidden border-0 rounded-2xl shadow-lg dark:bg-black bg-white">
            <CardContent className="p-0 relative group">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={category.image || `/placeholder-category-${(index % 5) + 1}.webp`}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold">{category.name}</h3>
                  {index === 0 && (
                    <span className="px-1 py-0.5 font-semibold bg-blue-500 rounded-full text-xs">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-90">
                  {index % 2 === 0
                    ? "Create stunning designs with ease"
                    : "Professional templates for your projects"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="lg:-left-6 left-4 opacity-50 cursor-not-allowed" />
  <CarouselNext className="lg:-right-6 right-4 opacity-50 cursor-not-allowed" />
</Carousel>

  )
}
