"use client"
import Image from "next/image"
import { Button } from "~/components/ui/button"
import { Package, Box, Truck, Home, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function OrderTracking() {
    const router = useRouter()
  return (
    <div className="min-h-screen bg-[#FBF0EA] md:p-6 p-2">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b">
        <div className="space-y-1">
          <h1 className="text-sm font-medium">Order ID: 3354654654526</h1>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Order date: Feb 16, 2022</span>
            <div className="flex items-center gap-1 text-green-600">
              <span>Estimated delivery: May 16, 2022</span>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2 cursor-pointer" onClick={() => router.push("/currentorders")}>
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </Button>
      </header>

      {/* Map Section */}
      <div className="relative h-[300px] bg-gray-100">
        <Image
          src="/placeholder.svg"
          alt="Delivery route map"
          fill
          className="object-cover"
        />
      </div>

      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-[#FFF8F5E5] rounded-lg shadow-lg p-6">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-500 to-green-300" />
            </div>

            {/* Steps */}
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <Box className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">Order Placed</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <Package className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">Packaging</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Truck className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">On The Road</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <Home className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Activity */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-medium mb-6">Order Activity</h2>
        <div className="space-y-6">
          {/* Timeline items */}
          <div className="relative pl-8 border-l-2 border-green-500">
            <div className="absolute -left-[9px] top-0">
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Your order has been delivered. Thank you for shopping at CareMore!</p>
              <p className="text-xs text-gray-500">23 Jan, 2021 at 7:32 PM</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-0">
              <div className="w-4 h-4 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Our delivery man (John Wick) has picked up your order for delivery.</p>
              <p className="text-xs text-gray-500">23 Jan, 2021 at 2:00 PM</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-0">
              <div className="w-4 h-4 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Your order has reached at last mile hub.</p>
              <p className="text-xs text-gray-500">22 Jan, 2021 at 8:55 AM</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-0">
              <div className="w-4 h-4 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Your order on the way to last mile hub.</p>
              <p className="text-xs text-gray-500">21 Jan, 2021 at 5:34 AM</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-0">
              <div className="w-4 h-4 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Your order is successfully verified.</p>
              <p className="text-xs text-gray-500">20 Jan, 2021 at 7:32 PM</p>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0">
              <div className="w-4 h-4 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Your order has been confirmed.</p>
              <p className="text-xs text-gray-500">19 Jan, 2021 at 2:01 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

