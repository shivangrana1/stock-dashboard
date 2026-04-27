function SkeletonCard() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 animate-pulse">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="h-5 w-16 bg-gray-700 rounded mb-2"></div>
          <div className="h-3 w-24 bg-gray-800 rounded"></div>
        </div>
        <div className="h-6 w-14 bg-gray-700 rounded-full"></div>
      </div>
      <div className="flex items-end justify-between mt-4">
        <div className="h-7 w-20 bg-gray-700 rounded"></div>
        <div className="h-4 w-10 bg-gray-800 rounded"></div>
      </div>
    </div>
  )
}

export default SkeletonCard