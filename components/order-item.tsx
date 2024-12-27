import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import type { OrderItem } from "~/types/order"
import { CreditCard } from 'lucide-react'

interface OrderItemProps {
  order: OrderItem
}

export function OrderItem({ order }: OrderItemProps) {
  return (
    <Card className=" mb-6 border-none drop-shadow-none  rounded-none">
      <CardContent className="p-6 text-black">
        <div className="mb-4">
          <div className="text-sm">
            <span className="font-medium">Order ID: </span>
            {order.id}
          </div>
          <div className="text-sm ">
            <span>Order date: {order.orderDate}</span>
            <span className="mx-4">|</span>
            <span>Delivered on {order.deliveryDate}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F0E1DC] p-4 rounded-lg">
          <div className="w-32">
            <div className="aspect-square relative bg-white  rounded-md">
              <Image
                src={order.product.imageUrl.src}
                alt={order.product.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-2">
              <div className="font-medium ">{order.product.name}</div>
              <div className="text-sm ">{order.product.variant}</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium ">Order Summary</h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-between ">
                <span>Price</span>
                <span>${order.summary.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between ">
                <span>Discount ({order.summary.discount.percentage}%)</span>
                <span>-${order.summary.discount.amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between ">
                <span>Delivery</span>
                <span>${order.summary.delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between ">
                <span>Tax</span>
                <span>+${order.summary.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium  pt-2 border-t border-rose-200">
                <span>Total</span>
                <span>${order.summary.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium  mb-2">Shipping Address</h3>
              <div className="text-sm ">
                <p>{order.shipping.street}</p>
                <p>{order.shipping.city}</p>
                <p>{order.shipping.postalCode}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium  mb-2">Payment</h3>
              <div className="flex items-center ">
                <CreditCard className="h-4 w-4 mr-2" />
                <span className="text-sm">Visa **** </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

