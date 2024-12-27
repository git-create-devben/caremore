'use client'

import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Product1 } from "~/lib/img"
import { useRouter } from "next/navigation"

export default function CheckoutForm() {
  const router = useRouter()
  return (
    <div className="min-h-screen p-6 space-y-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Billing Information */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Billing Information</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input 
                type="text" 
                placeholder="First name"
                className="bg-pink-50/50 border-pink-100"
              />
            </div>
            <div className="space-y-2">
              <Input 
                type="text" 
                placeholder="Last name"
                className="bg-pink-50/50 border-pink-100"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="Address"
              className="bg-pink-50/50 border-pink-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger className="bg-pink-50/50 border-pink-100">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="bg-pink-50/50 border-pink-100">
                <SelectValue placeholder="Region/State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="tx">Texas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger className="bg-pink-50/50 border-pink-100">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York City</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="ch">Chicago</SelectItem>
              </SelectContent>
            </Select>

            <Input 
              type="text" 
              placeholder="Zip Code"
              className="bg-pink-50/50 border-pink-100"
            />
          </div>

          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Email"
              className="bg-pink-50/50 border-pink-100"
            />
          </div>

          <div className="space-y-2">
            <Input 
              type="tel" 
              placeholder="Phone Number"
              className="bg-pink-50/50 border-pink-100"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="different-address" />
            <label
              htmlFor="different-address"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ship into different address
            </label>
          </div>

       
        </div>

        {/* Order Summary */}
        <div className="bg-[#F0E1DC] rounded-lg p-6 h-fit">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
          
          {/* Product List */}
          <div className="space-y-4 mb-6">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="relative w-16 h-16 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={Product1}
                    alt="Product image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Facewash</h3>
                  <p className="text-sm text-gray-600">Lavender, Rosemary</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">3 x</span>
                  <span className="ml-1 font-medium">$29</span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Details */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub-total</span>
              <span className="font-medium">$320</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium">$24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">$91.99</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className="font-medium">Total</span>
              <span className="font-medium">$387.99 USD</span>
            </div>
          </div>

          <Button 
            className="w-full mt-6 bg-rose-700 hover:bg-rose-800 cursor-pointer text-white"
            onClick={() => router.push('/ordersuccessfull')}
          >
            PLACE ORDER
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
         {/* Payment Options */}
         <div className="space-y-6 pt-6 bg-[#F0E1DC] p-4 rounded-md w-full max-w-4xl block m-auto ">
            <h2 className="text-lg font-medium text-gray-900">Payment Option</h2>
            <RadioGroup defaultValue="card" className="grid grid-cols-4 gap-4">
              <div className="relative">
                <RadioGroupItem
                  value="cash"
                  id="cash"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="cash"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-pink-100 bg-pink-50/50 p-4 hover:bg-pink-100 [&:has([data-state=checked])]:border-pink-800 [&:has([data-state=checked])]:bg-pink-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                  Cash on Delivery
                </Label>
              </div>

              <div className="relative">
                <RadioGroupItem
                  value="venmo"
                  id="venmo"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="venmo"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-pink-100 bg-pink-50/50 p-4 hover:bg-pink-100 [&:has([data-state=checked])]:border-pink-800 [&:has([data-state=checked])]:bg-pink-100"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Venmo"
                    width={24}
                    height={24}
                    className="mb-3"
                  />
                  Venmo
                </Label>
              </div>

              <div className="relative">
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-pink-100 bg-pink-50/50 p-4 hover:bg-pink-100 [&:has([data-state=checked])]:border-pink-800 [&:has([data-state=checked])]:bg-pink-100"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="PayPal"
                    width={24}
                    height={24}
                    className="mb-3"
                  />
                  PayPal
                </Label>
              </div>

              <div className="relative">
                <RadioGroupItem
                  value="card"
                  id="card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-pink-100 bg-pink-50/50 p-4 hover:bg-pink-100 [&:has([data-state=checked])]:border-pink-800 [&:has([data-state=checked])]:bg-pink-100"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Credit Card"
                    width={24}
                    height={24}
                    className="mb-3"
                  />
                  Debit/Credit Card
                </Label>
              </div>
            </RadioGroup>

            <div className="space-y-4">
              <Input 
                type="text" 
                placeholder="Name on Card"
                className="bg-pink-50/50 border-pink-100"
              />
              <Input 
                type="text" 
                placeholder="Card Number"
                className="bg-pink-50/50 border-pink-100"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="MM/YY"
                  className="bg-pink-50/50 border-pink-100"
                />
                <Input 
                  type="text" 
                  placeholder="CVC"
                  className="bg-pink-50/50 border-pink-100"
                />
              </div>
            </div>
          </div>
    </div>
  )
}

