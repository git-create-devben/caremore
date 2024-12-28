"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { StarRating } from "~/components/star-rating";
import { QuantitySelector } from "~/components/quantity-selector";
import type { Product } from "~/types/product";
import { Product1 } from "~/lib/img";
import { useRouter } from "next/navigation";
import { ProductCarousel } from "~/components/ProductCarousel";
import { ReviewsSection } from "~/components/review-section";
export default function ProductDetail(
{
  //   params: Promise<{ slug: string }>;
}) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter()
  const product: Product = {
    id: "1",
    name: "Facewash",
    subtitle: "Lavender, Rosemary",
    price: 29,
    description:
      "Formulated with an exclusive blend of rich vitamins and extracts this luxurious mask moisturizes the skin while helping to diminish the appearance of fine lines and wrinkles. Helps rehydrate the skin and reveal its natural radiance. May also be used as a day or night cream in cold or dry climates.",
    rating: 5,
    idealFor: [
      "Multiple signs of aging",
      "Visible age prevention",
      "Loss of firmness, tone, lines, wrinkles, uneven skintone",
      "Dullness, dehydration—includes Hyaluronic Acid",
    ],
    formulaFacts: [
      "Oil-free",
      "Recyclable glass bottle and carton",
      "Dermatologist-tested",
      "Ophthalmologist-tested",
      "Non-comedogenic; won't clog pores",
      "Free of synthetic fragrance",
      "Free of parabens, phthalates, sulfites, sulfates and mineral oil",
      "Face serum with exclusive Night Peptide and Hyaluronic Acid",
    ],
    image: Product1,
    skinType: "For All Skin Types",
  };
  //   const slug = (await params).slug;
  return (
    <>
    <div className="min-h-screen sm:p-6 p-4">
      <div className="mx-auto max-w-6xl">
        <Button
          variant="outline"
          className="mb-4 sm:mb-6 gap-2 rounded-full text-sm sm:text-base cursor-pointer"
          onClick={() => router.push('/products')}
        >
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          Go Back
        </Button>

        <div className="grid gap-6 sm:gap-8 rounded-lg sm:p-6 lg:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg bg-rose-100 p-4 sm:p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="space-y-4 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <StarRating rating={product.rating} />
              <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

              <div className="flex justify-between items-center rounded-full bg-rose-50   text-xs sm:text-sm">
                <p className="text-base sm:text-lg text-gray-600">
                  {product.subtitle}
                </p>
                <Button> {product.skinType}</Button>
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-bold">${product.price}</p>

            <p className="text-sm sm:text-base text-gray-600">
              {product.description}
            </p>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-sm sm:text-base font-semibold">Ideal For:</h2>
              <ul className="list-inside list-disc space-y-1.5 sm:space-y-2">
                {product.idealFor.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-base text-gray-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-medium">QTY</span>
                  <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => setQuantity((q) => q + 1)}
                    onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer bg-[#983A42] text-white px-8 py-3 rounded-md hover:bg-rose-800 text-sm sm:text-base sm:py-6"
                onClick={() => router.push("/profile") }
              >
                Add To Cart
              </Button>
              <Button
                variant="outline"
                className="w-full sm:flex-1 border-rose-200 text-rose-700 hover:bg-rose-50 text-sm sm:text-base py-5 sm:py-6 cursor-pointer"
                onClick={() => {
                  router.push("/order-summary")                
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-sm sm:text-base font-semibold">
              FORMULA FACTS
            </h2>
            <ul className="list-inside list-disc space-y-1.5 sm:space-y-2">
              {product.formulaFacts.map((fact, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-600">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ProductCarousel title="Discover More"/>
    <ReviewsSection />
    </>
  );
}
