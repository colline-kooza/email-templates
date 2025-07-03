import { Suspense } from "react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { Loader2 } from "lucide-react"
import { authOptions } from "@/config/auth"
import { CategoriesClient } from "@/components/template-categories/CategoriesClient"
import { categories } from "@/actions/template-categories"

export default async function CategoriesPage() {
  const session = await getServerSession(authOptions)
  const categoriesData = await categories()||[]

  if (!session ) {
    redirect("/login")
  }



  return (
    <div className="container mx-auto py-10">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[50vh]">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
      >
        <CategoriesClient initialCategories={categoriesData} />
      </Suspense>
    </div>
  )
}
