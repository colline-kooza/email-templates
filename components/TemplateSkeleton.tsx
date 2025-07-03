export function TemplateSkeleton() {
    return (
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
        <div className="mt-2 flex justify-between">
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        </div>
      </div>
    )
  }
  