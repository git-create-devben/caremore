import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { ReviewCard } from "./review-card"
import type { Review } from "~/types/review"

const sampleReviews: Review[] = [
  {
    id: "1",
    rating: 4,
    productName: "Logipsum Moisturizer",
    date: "June 12, 2024",
    location: "Toronto, CA",
    content: "I have been using this product for many, many years. I'm a senior and have been using since my early 30's My skin always feels so soft and smooth. People ask me all the time what I use in my skin care routine. I always suggest Estee Lauder products. They are the best on the market in my opinion. In all the years I have used their products, I have never been disappointment once. Thank you Estee Lauder for always creating the best products for my skin."
  },
  {
    id: "2",
    rating: 3,
    productName: "HAVE USED FOR YEARS",
    date: "May 17, 2024",
    location: "Toronto, CA",
    content: "Wondering if the formula for Advanced Night Repair has changed... I have used this product for at least 10 years, with positive result. Have not changed my daily routine, using all Estee, but last bottle of Advanced has caused redness and itching."
  },
  {
    id: "3",
    rating: 1,
    productName: "MY EXPERIENCE",
    date: "May 25, 2023",
    location: "Toronto, CA",
    content: "I purchased the advanced night repair skincare serum hoping to address forehead wrinkles, but instead, it wreaked havoc on my skin. Prior to using this product, my skin was clear and acne-free. However, after just a short time of using it, my face erupted in painful acne. Not only did it fail to reduce wrinkles, but it also caused a significant deterioration in my skin's condition. I'm utterly disappointed and frustrated with this product. It's infuriating to spend money on a supposed skincare solution, only to end up with worse skin than before. I want a refund or any other form of compensation."
  }
]

export function ReviewsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
      <div className="rounded-lg  p-4 sm:p-6">
        <h2 className="mb-6 text-center text-2xl sm:text-3xl font-bold">Reviews</h2>
        
        <div className="space-y-6">
          {sampleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Write a Review</h3>
          <Textarea
            className="min-h-[150px] resize-none rounded-lg border-rose-100"
            placeholder="Share your experience with this product..."
          />
          <div className="flex justify-end">
            <Button
              className="bg-rose-700 hover:bg-rose-800 px-8"
              onClick={() => {
                // Handle submit review
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

