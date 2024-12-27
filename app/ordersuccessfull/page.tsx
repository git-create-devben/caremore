"use client"
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from "~/components/ui/button"

export default function OrderSuccess() {
    const router = useRouter()
  return (
    <div className="min-h-screen bg-pink-50/50 flex items-center justify-center">
      <div className="text-center space-y-6 p-6 max-w-md">
        <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium text-gray-900">
            Your order is successfully place
          </h1>
          <p className="text-gray-600">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
          </p>
        </div>
        <Button 
          className="bg-rose-700 hover:bg-rose-800 text-white cursor-pointer"
          onClick={() => router.push("/currentorders")}
        >
          VIEW ORDER
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

