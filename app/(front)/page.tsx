import { Suspense } from "react"
import { Search, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import SearchInterface from "@/components/SearchInterface"
import DiscoverSection from "@/components/DiscoverSection"
import TemplateCatalog from "@/components/TemplateCatalog"
import { CategoryCarouselSkeleton } from "@/components/CategoryCarouselSkeleton"
import DiscoverSectionSkeleton from "@/components/DiscoverSectionSkeleton"
import { getFeaturedCategories } from "@/actions/template-categories"
import { CategoryCarousel } from "@/components/HomeCarousel"
import TrustedBrands from "@/components/TrustedBrands"
import { SparklesCore } from "@/components/ui/sparkles"
import { AuroraText } from "@/components/magicui/aurora-text"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative lg:h-[70vh] md:h-[40vh] h-[60vh] lg:mt[0%] md:mt-[7%] mt-[4%]">
         {/* Background gradient effect */}
        <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,#e60a64,transparent_70%)] before:opacity-30 dark:before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.9] after:w-[1000%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-white dark:after:bg-zinc-900" />
        <div className="lg:h-[50%] h-[100%] md:h-[100%] font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center lg:justify-center md:h-[25%] h-[38%] lg:h-[35%] lg:pb-7 md:pb-0">
            <h2 className="text-black dark:text-[#ffffff] text-[35px] md:text-[50px] lg:text-[47px] font lg:tracking-wider text-center px-3 leading-tight md:leading-none">
            Smarter, 
            <AuroraText>Faster workflow</AuroraText>
            </h2>
            <p className="lg:text-xl font-normal lg:mt-4 mt-2 text-md text-center">
            Complete toolkit with premium assets and intelligent creation features for professionals
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 mt-5">
            {/* Tabs Section */}
            <div className="flex items-center bg-[#4d4d4d] rounded-full p-[1px]">
              <button
                className={cn(
                  "lg:px-6 lg:py-2 px-5 py-1 rounded-full text-black font-medium transition-colors",
                  "bg-[#ffffff] hover:bg-neutral-200 focus:outline-none flex items-center gap-2 justify-center font-semibold",
                )}
              >
                <Search size={18} /> Search
              </button>
              <button
                className={cn(
                  "px-7 py-2 rounded-full font-medium transition-colors",
                  "text-[#d8d8d8] hover:text-white focus:outline-none flex items-center justify-center gap-2 font-semibold text-base",
                )}
              >
                <Sparkles size={18} />
                Create
              </button>
            </div>
          </div>
          <SearchInterface />
        </div>

        {/* <div className="w-full h-6 md:h-32 bg-gradient-to-r blur-2xl absolute lg:bottom-[25%] bottom-[12%] md:bottom-4"></div> */}
         <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={40}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />

        <Suspense fallback={<CategoryCarouselSkeleton />}>
          <CategoriesCarouselWrapper />
        </Suspense>
      </div>

      {/* <HomeBrandSection /> */}
       <TrustedBrands />

      <Suspense fallback={<DiscoverSectionSkeleton />}>
        <DiscoverSectionWrapper />
      </Suspense>

      <TemplateCatalogWrapper />
      
      {/* Add your footer component here */}
      {/* <Footer /> */}
    </div>
  )
}

async function CategoriesCarouselWrapper() {
  const { categories = [] } = await getFeaturedCategories()
  return <CategoryCarousel categories={categories} />
}

async function DiscoverSectionWrapper() {
  const { categories = [] } = await getFeaturedCategories()
  return <DiscoverSection  categories={categories}/>
}

async function TemplateCatalogWrapper() {
  return <TemplateCatalog  />
}