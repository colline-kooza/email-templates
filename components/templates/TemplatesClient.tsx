"use client"

import { useState } from "react"
import type { Template, Category } from "@prisma/client"
import { useRouter } from "next/navigation"
import { PlusCircle, Pencil, Trash2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import { formatDate } from "@/lib/utils"
import { TemplateModal } from "./TemplateModal"
import { DeleteModal } from "./DeleteModal"


interface TemplateWithCategory extends Template {
  category: Category | null
}

interface TemplatesClientProps {
  initialTemplates: TemplateWithCategory[]
  categories: Category[]
}

export function TemplatesClient({ initialTemplates, categories }: TemplatesClientProps) {
  const router = useRouter()
  const [templates, setTemplates] = useState<TemplateWithCategory[]>(initialTemplates)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateWithCategory | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemplates = templates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category?.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleEdit = (template: TemplateWithCategory) => {
    setSelectedTemplate(template)
    setIsUpdateModalOpen(true)
  }

  const handleDelete = (template: TemplateWithCategory) => {
    setSelectedTemplate(template)
    setIsDeleteModalOpen(true)
  }

  const handleTemplateCreated = (newTemplate: TemplateWithCategory) => {
    setTemplates((prev) => [newTemplate, ...prev])
    setIsCreateModalOpen(false)
  }

  const handleTemplateUpdated = (updatedTemplate: TemplateWithCategory) => {
    setTemplates((prev) => prev.map((template) => (template.id === updatedTemplate.id ? updatedTemplate : template)))
    setIsUpdateModalOpen(false)
    setSelectedTemplate(null)
  }

  const handleTemplateDeleted = (deletedTemplateId: string) => {
    setTemplates((prev) => prev.filter((template) => template.id !== deletedTemplateId))
    setIsDeleteModalOpen(false)
    setSelectedTemplate(null)
  }

  return (
    <>
      <Card className="shadow-md border-t-4 border-t-[#ffbd7a] dark:border-t-[#ffbd7a]/80">
        <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-[#ffbd7a]/10 to-transparent dark:from-[#ffbd7a]/5">
          <div>
            <CardTitle className="text-2xl font-bold">Templates ({initialTemplates.length})</CardTitle>
            <CardDescription>Manage your design templates</CardDescription>
          </div>
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 bg-[#ffbd7a] hover:bg-[#ffbd7a]/90 text-black"
          >
            <PlusCircle className="h-4 w-4" />
            Add Template
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <div className="relative flex-1 mt-3">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                className="pl-8 border-[#ffbd7a]/20 focus-visible:ring-[#ffbd7a]/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTemplates.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No templates found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTemplates.map((template) => (
                    <TableRow key={template.id} className="group">
                      <TableCell>
                        <div className="relative h-12 w-16 overflow-hidden rounded-md">
                          <Image
                            src={template.image || "/placeholder.svg"}
                            alt={template.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium max-w-[200px] truncate" title={template.title}>
                        {template.title}
                      </TableCell>
                      <TableCell>
                        {template.category ? (
                          <Badge variant="outline" className="bg-[#ffbd7a]/10 text-foreground border-[#ffbd7a]/20">
                            {template.category.name}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground text-sm">No category</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {template.isFree ? (
                          <span className="text-green-500 font-medium">Free</span>
                        ) : (
                          <span>${template.price}</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={template.isFree ? "outline" : "default"}
                          className={
                            template.isFree
                              ? "bg-green-500/10 text-green-500 border-green-500/20"
                              : "bg-[#ffbd7a] text-black"
                          }
                        >
                          {template.isFree ? "Free" : "Premium"}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(template.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleEdit(template)}
                            className="border-[#ffbd7a]/20 hover:border-[#ffbd7a]/50 hover:bg-[#ffbd7a]/10"
                          >
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="destructive" size="icon" onClick={() => handleDelete(template)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <TemplateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={handleTemplateCreated}
        mode="create"
        categories={categories}
      />


{selectedTemplate && (
  <>
    <TemplateModal
      isOpen={isUpdateModalOpen}
      onClose={() => {
        setIsUpdateModalOpen(false)
        setSelectedTemplate(null)
      }}
      onSuccess={handleTemplateUpdated}
      mode="update"
      template={selectedTemplate}
      categories={categories}
    />

    <DeleteModal
      isOpen={isDeleteModalOpen}
      onClose={() => {
        setIsDeleteModalOpen(false)
        setSelectedTemplate(null)
      }}
      onSuccess={handleTemplateDeleted}
      template={selectedTemplate}
    />
  </>
)}
    </>
  )
}
