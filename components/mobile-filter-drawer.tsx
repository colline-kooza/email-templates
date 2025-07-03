"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TemplateFilters } from "./TemplateFilters"

interface Category {
  id: string
  name: string
  slug: string
}

interface MobileFilterDrawerProps {
  categories: Category[]
}

export function MobileFilterDrawer({ categories }: MobileFilterDrawerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <TemplateFilters categories={categories} onClose={() => setOpen(false)} isDrawer={true} />
      </SheetContent>
    </Sheet>
  )
}
