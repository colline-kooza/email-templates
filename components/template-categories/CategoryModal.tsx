"use client"

import { useState, useEffect } from "react"
import type { Category } from "@prisma/client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createCategory, updateCategory } from "@/actions/template-categories"
import ImageUploader from "../ImageUploader"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
})

type FormValues = z.infer<typeof formSchema>

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (category: Category) => void
  mode: "create" | "update"
  category?: Category
}

export function CategoryModal({ isOpen, onClose, onSuccess, mode, category }: CategoryModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [imageUrls, setImageUrls] = useState<string[]>(category?.image ? [category.image] : [])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: category?.name || "",
    },
  })

  useEffect(() => {
    if (category && mode === "update") {
      form.reset({
        name: category.name,
      })
      setImageUrls(category.image ? [category.image] : [])
    }
  }, [category, form, mode])

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true)

      const imageUrl = imageUrls.length > 0 ? imageUrls[0] : null

      if (mode === "create") {
        const result = await createCategory({
          name: values.name,
          image: imageUrl,
        })

        if (result.error) {
          toast.error(result.error)
          return
        }

        toast.success("Category created successfully")

        onSuccess(result.category as any)
      } else if (mode === "update" && category) {
        const result = await updateCategory({
          id: category.id,
          name: values.name,
          image: imageUrl,
        })

        if (result.error) {
          toast.error( result.error)
          return
        }

        toast.success("Category updated successfully")

        onSuccess(result.category as any)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === "create" ? "Create Category" : "Update Category"}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Category name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <ImageUploader
                label="Category Image"
                imageUrls={imageUrls}
                setImageUrls={setImageUrls}
                endpoint="categoryImage"
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {mode === "create" ? "Creating..." : "Updating..."}
                  </>
                ) : (
                  <>{mode === "create" ? "Create" : "Update"}</>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
