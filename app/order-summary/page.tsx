import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { CartItem } from "~/components/cart-item"
import { CartTotals } from "~/components/cart-total"
import { Product1 } from "~/lib/img"

const DEMO_ITEMS = [
  {
    id: "1",
    name: "Facewash",
    description: "Lavender, Rosemary",
    price: 70,
    quantity: 1,
    image: Product1,
  },
  {
    id: "2",
    name: "Moisturizer",
    description: "Lavender, Rosemary",
    price: 250,
    quantity: 3,
    image: Product1,
  },
]

export default function ShoppingCart() {
  const subtotal = DEMO_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = 0
  const discount = 24
  const tax = 61.99
  const total = subtotal - discount + shipping + tax

  return (
    <div className="min-h-screen md:p-12 p-2">
      <div className="container max-w-6xl py-8">
        <div className="mb-8 md:flex items-center justify-between hidden">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 ">
          <div className="rounded-lg bg-[#F0E1DC] pb-2 shadow-sm">
            <div className="mb-4 grid md:grid-cols-5 grid-cols-4 bg-white p-2 px-10 text-sm font-medium text-muted-foreground">
              <div className="col-span-2">PRODUCTS</div>
              <div className="text-centr hidden md:block">PRICE</div>
              <div className="text-rght">QUANTITY</div>
              <div className="text-rght">SUB-TOTAL</div>
            </div>
            <div className="divide-y w-full p-5">
              {DEMO_ITEMS.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="mt-6 flex justify-between mx-5">
              <Button variant="outline" asChild>
                <Link href="/shop">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  RETURN TO SHOP
                </Link>
              </Button>
              <Button variant="outline">
                UPDATE CART
              </Button>
            </div>
          </div>

          <div className="rounded-lg shadow-sm">
            <CartTotals
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              tax={tax}
              total={total}
            />
           
          </div>
        </div>
      </div>
    </div>
  )
}

