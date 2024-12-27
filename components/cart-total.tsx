"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface CartTotalsProps {
  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
  total: number;
}

export function CartTotals({
  subtotal,
  shipping,
  discount,
  tax,
  total,
}: CartTotalsProps) {
  const router = useRouter()
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-4 bg-[#F0E1DC] p-6 col-span-2">
        <h3 className="text-lg font-medium">Card Totals</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Sub-total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)} USD</span>
          </div>
        </div>
      </div>
      <div className="space-y-4 w-full">
        <div className="flex flex-col gap-2 bg-[#F0E1DC] p-4 rounded-md">
          <h3 className="text-lg font-medium mb-4">Coupon Code</h3>
          <div className="flex gap-2">
            <Input
              placeholder="Coupon Code"
              className="flex-1 p-2 border-none"
            />
            <Button
              variant="secondary"
              className="bg-rose-100 hover:bg-rose-200 text-rose-600 w-32"
            >
              APPLY COUPON
            </Button>
          </div>
        </div>
        <Button className="my-4  w-full bg-[#983A42] hover:bg-rose-800 cursor-pointer text-white" onClick={() => router.push("/checkout")}>
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  );
}
