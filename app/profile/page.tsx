"use client";

import { useState } from "react";
import { OrderHistory } from "~/components/order-history";
import { UserProfile } from "~/components/user-profile";
import { Button } from "~/components/ui/button";
import { SavedItems } from "~/components/saved-items";
import { Product1 } from "~/lib/img";

// Reusing the mock user from previous example
const MOCK_USER = {
  name: "John Doe Name",
  email: "johndoename@gmail.com",
  phone: "+91**********",
  address: {
    street: "847 Jewess Bridge Apt.",
    city: "174 London, UK",
    postalCode: "474-769-3519",
  },
};

const MOCK_ORDERS = Array(3)
  .fill({
    id: "3354654654526",
    orderDate: "Feb 15, 2022",
    deliveryDate: "May 16, 2022",
    product: {
      name: "Facewash",
      variant: "Lavender, Rosemary",
      imageUrl: Product1,
    },
    summary: {
      price: 55.54,
      discount: {
        percentage: 20,
        amount: 11.09,
      },
      delivery: 0,
      tax: 2.21,
      total: 0.0,
    },
    shipping: {
      street: "847 Jewess Bridge Apt.",
      city: "174 London, UK",
      postalCode: "474-769-3519",
    },
  })
  .map((order, index) => ({
    ...order,
    id: `${order.id}-${index + 1}`,
  }));
  const MOCK_PRODUCTS = Array(6).fill({
    id: "1",
    name: "Facewash",
    variant: "Lavender, Rosemary",
    price: 29,
    description: "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Et Donem ipsum Dolor Sit Amet, Consectetur Adipisc",
    imageUrl: Product1
  }).map((product, index) => ({
    ...product,
    id: String(index + 1)
  }))

type View = "cart" | "history";

export default function Page() {
  const [currentView, setCurrentView] = useState<View>("cart");

  return (
    <div className="min-h-screen bg-rose-50 ">
      <div className="max-w-7xl mx-auto space-y-8">
        <UserProfile
          profile={MOCK_USER}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />

        {currentView === "history" ? (
          <OrderHistory
            orders={MOCK_ORDERS}
            onBack={() => setCurrentView("cart")}
          />
        ) : (
         <SavedItems products={MOCK_PRODUCTS}/>
        )}
      </div>
    </div>
  );
}
