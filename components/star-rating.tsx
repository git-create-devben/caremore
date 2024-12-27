import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  max?: number
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5 sm:gap-1">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 sm:h-5 sm:w-5 ${
            i < rating ? "fill-rose-700 text-rose-700" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

