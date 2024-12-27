"use client"
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Product1, Product7 } from "~/lib/img";

interface OrderDetailsProps {
  orderId: string;
  orderDate: string;
  estimatedDelivery: string;
  products: Array<{
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: StaticImageData;
  }>;
  payment: {
    method: string;
    last4: string;
  };
  summary: {
    discount: number;
    discountPercentage: number;
    delivery: number;
    tax: number;
    total: number;
  };
  shipping: {
    address: string;
    city: string;
    country: string;
    phone: string;
  };
}

export default function OrderDetails({
  orderId = "3354654654526",
  orderDate = "Feb 16, 2022",
  estimatedDelivery = "May 16, 2022",
  products = [
    {
      name: "Facewash",
      description: "Lavender, Rosemary",
      quantity: 3,
      price: 29,
      image: Product7,
    },
  ],
  payment = {
    method: "Visa",
    last4: "**56",
  },
  summary = {
    discount: 5554,
    discountPercentage: 20,
    delivery: 0,
    tax: 221.88,
    total: 0,
  },
  shipping = {
    address: "847 Jewess Bridge Apt. 174",
    city: "London",
    country: "UK",
    phone: "474-769-3919",
  },
}: OrderDetailsProps) {
    const router = useRouter()
  return (
    <div className="min-h-screen bg-[#FBF0EA] p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Order Header */}
        <div className="space-y-2 ">
          <h1 className="text-lg font-semibold text-gray-900">
            Order ID: {orderId}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600">
            <span>Order date: {orderDate}</span>
            <div className="flex items-center gap-2 text-green-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Estimated delivery: {estimatedDelivery}</span>
            </div>
          </div>
        </div>

        {/* Products */}
        {products.map((product, index) => (
          <Card key={index} className="p-6 bg-[#F0E1DC] border-none">
            <div className="flex md:flex-row flex-col items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg "
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                <div className="text-gray-900">
                  {product.quantity} × ${product.price}
                </div>
              </div>
              <Button
              onClick={() => router.push("/currentorders/orders/1")}
                variant="outline"
                className="text-red-600 hover:text-red-700 ml-9 md:ml-0 cursor-pointer"
              >
                TRACK ORDER
              </Button>
            </div>
          </Card>
        ))}

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24 gap-6">
          {/* Payment */}
          <div className="space-y-4 order-1 md:order-none">
            <h2 className="font-medium text-gray-900">Payment</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {payment.method} {payment.last4}
              </span>
              <Image
                src="/visa.svg"
                alt="Visa"
                width={32}
                height={20}
                className="h-5 w-auto"
              />
            </div>

            {/* Need Help Section */}
            <div className="space-y-4">
              <h2 className="font-medium text-gray-900">Need Help</h2>
              <div className="space-y-2">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Order Issues
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Delivery Info
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3"
                    />
                  </svg>
                  Returns
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4 ">
            <h2 className="font-medium text-gray-900">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="text-gray-900">${summary.discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Discount ({summary.discountPercentage}%)
                </span>
                <span className="text-gray-900">
                  -$
                  {(
                    (summary.discount * summary.discountPercentage) /
                    100
                  ).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="text-gray-900">
                  ${summary.delivery.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">+${summary.tax}</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">
                  ${summary.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h2 className="font-medium text-gray-900">Shipping Address</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>{shipping.address}</p>
              <p>
                {shipping.city}, {shipping.country}
              </p>
              <p>{shipping.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
