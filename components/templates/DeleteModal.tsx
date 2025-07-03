"use client"

import { useState } from "react"
import type { Template } from "@prisma/client"
import { Loader2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { deleteTemplate } from "@/actions/templates"
import { toast } from "sonner"

interface TemplateWithCategory extends Template {
  category: {
    id: string;
    name: string;
  } | null
}

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (templateId: string) => void
  template: TemplateWithCategory
}

export function DeleteModal({ isOpen, onClose, onSuccess, template }: DeleteModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    try {
      setIsLoading(true)

      const result = await deleteTemplate(template.id)

      if (result.error) {
        toast.error(result.error)
        return
      }

      toast.success("Template deleted successfully")

      onSuccess(template.id)
    } catch (error) {
      console.error(error)
      toast.error("Error deleting template")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the template &quot;{template.title}&quot;. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}