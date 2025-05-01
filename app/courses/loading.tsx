import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section Skeleton */}
      <section className="pb-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
        </div>
      </section>

      {/* Courses Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-5 w-5 rounded-full" />
                </div>

                {/* Search Skeleton */}
                <div className="mb-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>

                {/* Category Filter Skeleton */}
                <div className="mb-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>

                {/* Level Filter Skeleton */}
                <div className="mb-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <div className="space-y-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter Skeleton */}
                <div className="mb-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Grid Skeleton */}
            <div className="lg:col-span-3">
              {/* Sorting and View Options Skeleton */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex items-center">
                  <Skeleton className="h-4 w-16 mr-2" />
                  <Skeleton className="h-10 w-[180px]" />
                </div>

                <Skeleton className="h-10 w-[200px]" />
              </div>

              {/* Courses Grid View Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <Skeleton className="aspect-video w-full" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2 mb-4" />
                      <div className="flex items-center mb-2">
                        <Skeleton className="h-4 w-16 mr-4" />
                        <Skeleton className="h-4 w-16 mr-4" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-6 w-20 mb-4" />
                      <div className="flex space-x-2">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Skeleton */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-10 w-24" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-10" />
                  ))}
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
