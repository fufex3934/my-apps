export function BlogSkeleton() {
  return (
    <div className="max-w-3xl mx-auto animate-pulse space-y-8">
      {/* Featured Image Skeleton */}
      <div className="h-64 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
      
      {/* Title Skeleton */}
      <div className="space-y-2">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
      </div>
      
      {/* Meta Info Skeleton */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-4/6"></div>
          </div>
        ))}
      </div>
      
      {/* Tags Skeleton */}
      <div className="flex flex-wrap gap-2 pt-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
        ))}
      </div>
    </div>
  );
}

// For blog list view
export function BlogListSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="animate-pulse border-b pb-8">
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-4/6 mb-4"></div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
          </div>
        </div>
      ))}
    </div>
  );
}