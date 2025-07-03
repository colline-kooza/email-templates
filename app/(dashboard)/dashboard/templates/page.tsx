import { Suspense } from "react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { db } from "@/prisma/db"
import { Loader2 } from "lucide-react"
import { authOptions } from "@/config/auth"
import { TemplatesClient } from "@/components/templates/TemplatesClient"

export default async function TemplatesPage() {
  const session = await getServerSession(authOptions)

  if (!session ) {
    redirect("/login")
  }

  const templates = await db.template.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  })

  return (
    <div className="container mx-auto py-10">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[50vh]">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
      >
        <TemplatesClient initialTemplates={templates} categories={categories} />
      </Suspense>
    </div>
  )
}
