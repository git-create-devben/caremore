import { Button } from "./ui/button"
import { ChevronLeft } from 'lucide-react'
import { ProductCard } from "./product-card"
import type { Product } from "~/types/product"

interface SavedItemsProps {
  products: Product[]
}

export function SavedItems({ products }: SavedItemsProps) {
  return (
    <div>
      <div className="flex justify-between items-center  md:px-12 px-6">
        <h2 className="text-xl font-semibold text-rose-700">SAVED ITEMS</h2>
        <Button variant="ghost" className="text-rose-700 hover:text-rose-800">
          <ChevronLeft className="h-4 w-4 " />
          Go Back
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-12 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

