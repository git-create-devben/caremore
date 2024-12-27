import { Button } from "./ui/button"
import { ChevronLeft } from 'lucide-react'
import { OrderItem } from "./order-item"
import type { OrderItem as OrderItemType } from "~/types/order"

interface OrderHistoryProps {
  orders: OrderItemType[]
  onBack: () => void
}

export function OrderHistory({ orders, onBack }: OrderHistoryProps) {
  return (
    <div className="space-y-6 md:px-12 p-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold ">ORDER HISTORY</h2>
        <Button 
          variant="ghost" 
          className="text-rose-700 hover:text-rose-800"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Go Back
        </Button>
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

