import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"

export function CategoryCarouselSkeleton() {
  return (
    <Carousel className="w-full max-w-7xl mx-auto relative z-10 lg:mt-8">
      <CarouselContent className="-ml-2 md:-ml-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 lg:basis-1/4 md:basis-1/2 basis-full">
            <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
              <CardContent className="p-0 relative">
                <Skeleton className="h-[200px] w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
