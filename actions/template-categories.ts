"use server"

import { getServerSession } from "next-auth"
import { db } from "@/prisma/db"
import { revalidatePath } from "next/cache"
import { slugify } from "@/lib/utils"
import { authOptions } from "@/config/auth"
import { cache } from "react"

export async function createCategory({
  name,
  image,
}: {
  name: string
  image: string | null
}) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return { error: "Unauthorized" }
    }

    const slug = slugify(name)

    const existingCategory = await db.category.findUnique({
      where: { slug },
    })

    if (existingCategory) {
      return { error: "A category with this name already exists" }
    }

    const category = await db.category.create({
      data: {
        name,
        slug,
        image,
      },
    })

    revalidatePath("/")
    revalidatePath("/dashboard/category-templates")

    return { category }
  } catch (error) {
    console.error("Error creating category:", error)
    return { error: "Something went wrong. Please try again." }
  }
}

export async function updateCategory({
  id,
  name,
  image,
}: {
  id: string
  name: string
  image: string | null
}) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
      return { error: "Unauthorized" }
    }

    // Get the current category
    const currentCategory = await db.category.findUnique({
      where: { id },
    })

    if (!currentCategory) {
      return { error: "Category not found" }
    }

    // Only generate a new slug if the name has changed
    let slug = currentCategory.slug
    if (name !== currentCategory.name) {
      slug = slugify(name)

      // Check if the new slug already exists (excluding the current category)
      const existingCategory = await db.category.findFirst({
        where: {
          slug,
          id: { not: id },
        },
      })

      if (existingCategory) {
        return { error: "A category with this name already exists" }
      }
    }

    const category = await db.category.update({
      where: { id },
      data: {
        name,
        slug,
        image,
      },
    })

    revalidatePath("/categories")

    return { category }
  } catch (error) {
    console.error("Error updating category:", error)
    return { error: "Something went wrong. Please try again." }
  }
}

export async function deleteCategory(id: string) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
      return { error: "Unauthorized" }
    }

    // Check if category exists
    const category = await db.category.findUnique({
      where: { id },
      include: {
        templates: true,
      },
    })

    if (!category) {
      return { error: "Category not found" }
    }

    // Check if category has templates
    if (category.templates.length > 0) {
      return {
        error: "Cannot delete category with templates. Please remove or reassign templates first.",
      }
    }

    await db.category.delete({
      where: { id },
    })

    revalidatePath("/categories")

    return { success: true }
  } catch (error) {
    console.error("Error deleting category:", error)
    return { error: "Something went wrong. Please try again." }
  }
}
export async function categories() {
  try {
  
    const categories = await db.category.findMany({
        orderBy: {
          createdAt: "desc",
        },
      })

    return categories
  } catch (error) {
    console.error("Error deleting category:", error)
    return []
  }
}

export const getCategories = cache(async () => {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return { categories }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return { error: "Failed to fetch categories" }
  }
})

export const getFeaturedCategories = cache(async () => {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "asc",
      },
    })

    return { categories }
  } catch (error) {
    console.error("Error fetching featured categories:", error)
    return { error: "Failed to fetch featured categories" }
  }
})

