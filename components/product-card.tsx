"use client"
import { Product1 } from "~/lib/img"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import type { Product } from "~/types/product"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const navigate = useRouter()
  return (
    <Card className="overflow-hidden border-none cursor-pointer" onClick={() => navigate.push("/products/overview/1")}>
      <CardContent className="p-0">
        <div className="aspect-square relative ">
          <Image
            src={Product1.src}
            alt={product.name}
            width={100}
            height={100}
            priority
            className="object-contain w-full h-full"
          />
        </div>
        <div className="p-4 text-black">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium ">{product.name}</h3>
            <span className="font-semibold ">${product.price}</span>
          </div>
          <p className="text-sm  mb-2">{product.variant}</p>
          <p className="text-xs ">{product.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-[#983A42] hover:bg-rose-800 text-white cursor-pointer">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}

