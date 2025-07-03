"use client"

import { useState } from "react"
import type { Category } from "@prisma/client"
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
import { deleteCategory } from "@/actions/template-categories"
import { toast } from "sonner"

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (categoryId: string) => void
  category: Category
}

export function DeleteModal({ isOpen, onClose, onSuccess, category }: DeleteModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    try {
      setIsLoading(true)

      const result = await deleteCategory(category.id)

      if (result.error) {
        toast.success(result.error)
        return
      }

      toast.success( "Category deleted successfully")

      onSuccess(category.id)
    } catch (error) {
      console.error(error)
      toast.error("Error deleting category:")
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
            This will permanently delete the category &quot;{category.name}&quot;. This action cannot be undone.
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
