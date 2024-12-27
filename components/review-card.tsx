import { Review } from "~/types/review"
import { StarRating } from "./star-rating"

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="space-y-2 border-b border-rose-100 pb-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <StarRating rating={review.rating} />
          <h3 className="font-medium text-sm sm:text-base">{review.productName}</h3>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">{review.date}</p>
          <p className="text-sm text-gray-600">{review.location}</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600">{review.content}</p>
    </div>
  )
}
