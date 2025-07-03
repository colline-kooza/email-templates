"use client"

import { useState, useEffect } from "react"
import type { Template, Category } from "@prisma/client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, FileUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { createTemplate, updateTemplate } from "@/actions/templates"
import { toast } from "sonner"
import FormSelectInput from "../FormSelectInput"
import ImageUploader from "../ImageUploader"

interface TemplateWithCategory extends Template {
  category: Category | null
}
const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    price: z.string().optional(),
    isFree: z.boolean(), 
    filePath: z.string().min(1, "File path is required"),
  })
type FormValues = z.infer<typeof formSchema>

interface TemplateModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (template: TemplateWithCategory) => void
  mode: "create" | "update"
  template?: TemplateWithCategory
  categories: Category[]
}

export function TemplateModal({ isOpen, onClose, onSuccess, mode, template, categories }: TemplateModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [imageUrls, setImageUrls] = useState<string[]>(template?.image ? [template.image] : [])

  const categoryOptions = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }))

  const initialCategoryId = template?.categoryId || null
  const initialCategory = categoryOptions.find((item) => item.value === initialCategoryId) || null
  const [selectedCategory, setSelectedCategory] = useState<any>(initialCategory)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title: template?.title || "",
        description: template?.description || "",
        price: template?.price || "",
        isFree: template?.isFree ?? false, 
        filePath: template?.filePath || "",
      },
  })

  const watchIsFree = form.watch("isFree")

  useEffect(() => {
    if (template && mode === "update") {
      form.reset({
        title: template.title,
        description: template.description,
        price: template.price || "",
        isFree: template.isFree,
        filePath: template.filePath,
      })
      setImageUrls(template.image ? [template.image] : [])
      setSelectedCategory(initialCategory)
    }
}, [template, form, mode, categories]) 

const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true)
  
      const imageUrl = imageUrls.length > 0 ? imageUrls[0] : null
  
      if (!imageUrl) {
        toast.error("Please upload an image for the template")
        setIsLoading(false)
        return
      }
  
      if (mode === "create") {
        const result = await createTemplate({
          title: values.title,
          description: values.description,
          price: values.isFree ? null : (values.price || null), 
          isFree: values.isFree,
          image: imageUrl,
          filePath: values.filePath,
          categoryId: selectedCategory?.value || null,
        })
  
        if (result.error) {
          toast.error(result.error)
          return
        }
  
        toast.success("Template created successfully")
  
        onSuccess(result.template as TemplateWithCategory)
      } else if (mode === "update" && template) {
        const result = await updateTemplate({
          id: template.id,
          title: values.title,
          description: values.description,
          price: values.isFree ? null : (values.price || null),
          isFree: values.isFree,
          image: imageUrl,
          filePath: values.filePath,
          categoryId: selectedCategory?.value || null,
        })
  
        if (result.error) {
          toast.error(result.error)
          return
        }
  
        toast.success("Template updated successfully")
  
        onSuccess(result.template as TemplateWithCategory)
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
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {mode === "create" ? "Create Template" : "Update Template"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <FormField
                  control={form.control as any}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Template title"
                          {...field}
                          className="border-[#ffbd7a]/20 focus-visible:ring-[#ffbd7a]/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control as any}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Template description"
                          {...field}
                          className="min-h-[120px] border-[#ffbd7a]/20 focus-visible:ring-[#ffbd7a]/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control as any}
                    name="isFree"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm border-[#ffbd7a]/20">
                        <div className="space-y-0.5">
                          <FormLabel>Free Template</FormLabel>
                          <FormDescription>Make this template available for free</FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-[#ffbd7a]"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {!watchIsFree && (
                    <FormField
                      control={form.control as any}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="29.99"
                              {...field}
                              className="border-[#ffbd7a]/20 focus-visible:ring-[#ffbd7a]/30"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                <FormField
                  control={form.control as any}
                  name="filePath"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>File Path</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <Input
                            placeholder="/templates/example.zip"
                            {...field}
                            className="rounded-r-none border-[#ffbd7a]/20 focus-visible:ring-[#ffbd7a]/30"
                          />
                          <Button
                            type="button"
                            className="rounded-l-none bg-[#ffbd7a] hover:bg-[#ffbd7a]/90 text-black"
                          >
                            <FileUp className="h-4 w-4 mr-2" />
                            Browse
                          </Button>
                        </div>
                      </FormControl>
                      <FormDescription>Path to the template file in your storage</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <FormLabel>Category</FormLabel>
                  <FormSelectInput
                    options={categoryOptions}
                    option={selectedCategory}
                    label="Category"
                    setOption={setSelectedCategory}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <ImageUploader
                  label="Template Image"
                  imageUrls={imageUrls}
                  setImageUrls={setImageUrls}
                  endpoint="templateImage"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isLoading}
                className="border-[#ffbd7a]/20 hover:bg-[#ffbd7a]/10 hover:text-foreground"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading} className="bg-[#ffbd7a] hover:bg-[#ffbd7a]/90 text-black">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {mode === "create" ? "Creating..." : "Updating..."}
                  </>
                ) : (
                  <>{mode === "create" ? "Create Template" : "Update Template"}</>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
