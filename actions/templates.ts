"use server";

import { getServerSession } from "next-auth";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";
import { authOptions } from "@/config/auth";

interface GetTemplatesResult {
  templates: TemplateResult[];
  nextCursor: string | undefined;
}

export interface TemplateResult {
  id: string;
  title: string;
  image: string;
  isFree: boolean;
  slug: string;
  price: string | null;
  categorySlug: string | null;
  category: {
    name: string;
  } | null;
}

interface GetTemplatesResult {
  templates: TemplateResult[];
  nextCursor: string | undefined;
}

// Create a new template
export async function createTemplate({
  title,
  description,
  price,
  isFree,
  image,
  filePath,
  categoryId,
}: {
  title: string;
  description: string;
  price: string | null;
  isFree: boolean;
  image: string;
  filePath: string;
  categoryId: string | null;
}) {
  try {
    const session = await getServerSession(authOptions);

    // Generate slug from title
    const slug = slugify(title);

    // Check if slug already exists
    const existingTemplate = await db.template.findUnique({
      where: { slug },
    });

    if (existingTemplate) {
      return { error: "A template with this title already exists" };
    }

    // Validate category if provided
    if (categoryId) {
      const category = await db.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        return { error: "Selected category does not exist" };
      }
    }

    const template = await db.template.create({
      data: {
        title,
        slug,
        description,
        price,
        isFree,
        image,
        filePath,
        categoryId,
      },
      include: {
        category: true,
      },
    });

    revalidatePath("/");
    revalidatePath("/dashboard/templates");

    return { template };
  } catch (error) {
    console.error("Error creating template:", error);
    return { error: "Something went wrong. Please try again." };
  }
}

export async function updateTemplate({
  id,
  title,
  description,
  price,
  isFree,
  image,
  filePath,
  categoryId,
}: {
  id: string;
  title: string;
  description: string;
  price: string | null;
  isFree: boolean;
  image: string;
  filePath: string;
  categoryId: string | null;
}) {
  try {
    const session = await getServerSession(authOptions);

    // Get the current template
    const currentTemplate = await db.template.findUnique({
      where: { id },
    });

    if (!currentTemplate) {
      return { error: "Template not found" };
    }

    // Only generate a new slug if the title has changed
    let slug = currentTemplate.slug;
    if (title !== currentTemplate.title) {
      slug = slugify(title);

      // Check if the new slug already exists (excluding the current template)
      const existingTemplate = await db.template.findFirst({
        where: {
          slug,
          id: { not: id },
        },
      });

      if (existingTemplate) {
        return { error: "A template with this title already exists" };
      }
    }

    // Validate category if provided
    if (categoryId) {
      const category = await db.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        return { error: "Selected category does not exist" };
      }
    }

    const template = await db.template.update({
      where: { id },
      data: {
        title,
        slug,
        description,
        price,
        isFree,
        image,
        filePath,
        categoryId,
      },
      include: {
        category: true,
      },
    });

    revalidatePath("/templates");

    return { template };
  } catch (error) {
    console.error("Error updating template:", error);
    return { error: "Something went wrong. Please try again." };
  }
}

// Delete a template
export async function deleteTemplate(id: string) {
  try {
    const session = await getServerSession(authOptions);

    // Check if template exists
    const template = await db.template.findUnique({
      where: { id },
    });

    if (!template) {
      return { error: "Template not found" };
    }

    await db.template.delete({
      where: { id },
    });

    revalidatePath("/templates");

    return { success: true };
  } catch (error) {
    console.error("Error deleting template:", error);
    return { error: "Something went wrong. Please try again." };
  }
}

export async function getTemplates({
  cursor,
  categorySlug,
  pricing,
  sort = "newest",
  isInitialLoad = false,
}: {
  limit?: number;
  cursor?: string;
  categorySlug?: string | null;
  pricing?: string | null;
  sort?: string;
  isInitialLoad?: boolean;
}): Promise<GetTemplatesResult> {
  try {
    // If it's initial load, we fetch 12 items, otherwise fetch 4 items
    const itemsToFetch = isInitialLoad ? 12 : 4;

    // Build where clause
    const whereClause: any = {};

    if (categorySlug) {
      whereClause.category = { slug: categorySlug };
    }

    if (pricing === "free") {
      whereClause.isFree = true;
    } else if (pricing === "paid") {
      whereClause.isFree = false;
    }

    // Build orderBy clause
    let orderBy: any = { createdAt: "desc" }; // default

    switch (sort) {
      case "oldest":
        orderBy = { createdAt: "asc" };
        break;
      case "price-low":
        orderBy = [
          { isFree: "desc" }, // Free templates first
          { price: "asc" },
        ];
        break;
      case "price-high":
        orderBy = [
          { isFree: "asc" }, // Paid templates first
          { price: "desc" },
        ];
        break;
      case "title":
        orderBy = { title: "asc" };
        break;
      case "newest":
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

    const templates = await db.template.findMany({
      take: itemsToFetch + 1, // take an extra item to determine if there are more items
      ...(cursor
        ? {
            cursor: {
              id: cursor,
            },
            skip: 1,
          }
        : {}),
      where: whereClause,
      orderBy,
      select: {
        id: true,
        title: true,
        image: true,
        isFree: true,
        price: true,
        categoryId: true,
        slug: true,
        createdAt: true,
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
    });

    let nextCursor: string | undefined = undefined;
    let displayTemplates = templates;

    if (templates.length > itemsToFetch) {
      nextCursor = templates[templates.length - 1].id;
      displayTemplates = templates.slice(0, itemsToFetch);
    }

    // Map templates to include categorySlug
    const mappedTemplates: TemplateResult[] = displayTemplates.map(
      (template: {
        id: string;
        title: string;
        image: string;
        isFree: boolean;
        price: string | null;
        categoryId: string | null;
        slug: string;
        createdAt: Date;
        category: {
          name: string;
          slug: string;
        } | null;
      }) => ({
        ...template,
        categorySlug: template.category?.slug || null,
      })
    );

    return {
      templates: mappedTemplates,
      nextCursor,
    };
  } catch (error) {
    console.error("Error fetching templates:", error);
    return { templates: [], nextCursor: undefined };
  }
}

export async function getTemplateBySlug(slug: string) {
  try {
    const template = await db.template.findUnique({
      where: { slug },
      include: {
        category: true,
      },
    });
    console.log(template);
    if (!template) return null;

    return template;
  } catch (error) {
    console.error("Error fetching template:", error);
    return null;
  }
}
