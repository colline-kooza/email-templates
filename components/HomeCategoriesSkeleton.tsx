export function HomeCategoriesSkeleton() {
    return (
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-44 w-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
              <div className="p-4">
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mt-2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }