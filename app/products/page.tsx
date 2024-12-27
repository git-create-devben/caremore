import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import { ProductExample } from "~/lib/ProductExample";
import SearchImg from "~/public/image/assets/searchImg.png";
import RoutineImg from "~/public/image/image1.png";
import { ProductTypes } from "~/types/product";
export default function Products() {
  return (
    <main className="min-h-screen ">
      <div className="SearchBack flex justify-center items-center">
        <div className="w-full max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full py-3 pl-4 pr-12 text-gray-700 bg-white/25 backdrop-blur-sm rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-pink-500 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-10">
        {ProductExample.map((data: ProductTypes, i) => (
          <Link className="flex flex-col h-full" key={i} href="/products/overview/1">
            <img
              src={data.img.src}
              width={1000}
              height={1000}
              loading="eager"
              alt="product image"
              className="w-full object-cover aspect-square rounded-lg"
            />
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col mt-2">
                <h4 className="font-sans font-semibold text-sm sm:text-base">{data.title}</h4>
                <p className="italic font-serif text-xs sm:text-sm">{data.subTitle}</p>
              </div>

              <span className="font-extrabold text-sm sm:text-base">${data.prize}</span>
            </div>
            <p className="text-xs mb-2 line-clamp-2">{data.desc}</p>
            <Button className="w-full bg-amber-900 text-white mt-auto text-xs sm:text-sm">Add to Cart</Button>
          </Link>
        ))}
      </div>
    </main>
  );
}
