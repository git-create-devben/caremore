"use client";

import Image from "next/image";

const features = ["CRUELTY-FREE", "VEGAN", "FRAGRANCE-FREE"];
import RightFace from "~/public/image/image2.png";
import RightFace1 from "~/public/image/image3.png";

export default function WeCare() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:px-16">
      <div className=" grid md:grid-cols-3 gap-8 items-center">
        {/* Left Section */}
        <div className="col-span-2 flex gap-10 items-center">
          <div className="md:col-span-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={RightFace1}
                alt="Skincare Close-up"
                className="object-cover"
                priority
              />
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center mt-2">
                WE CARE
                <br />
                ABOUT SKIN
              </h2>
            </div>
          </div>

          {/* Middle Section */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                WE CARE
                <br />
                ABOUT SKIN
              </h2>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={RightFace}
                alt="Beautiful Skin"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="space-y-8 col-span-2 md:col-auto ml-8">
          <div className="relative">
            <div className="absolute -left-28 top-1/2 -translate-y-1/2 -rotate-90 text-rose-300 tracking-widest text-2xl hidden md:block">
            <span className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-rose-300 tracking-widest text-2xl hidden md:block">
                |
                <br/>
                |
              </span>
              SINCE 2021
              <span className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-rose-300 tracking-widest text-2xl hidden md:block">
                |
                <br/>
                |
              </span>
            </div>
            <div className="space-y-6 ">
              <p className="text-gray-700">
                Our style and functionality makes us one of the most unique
                brands.
              </p>
              <p className="text-gray-700">
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Eliam
                eu turpis molestie, dictum est a, mattis tellus.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-center">Features Of Our Products:</h3>
            <div className="space-y-2 text-center">
              {features.map((feature) => (
                <div key={feature} className="text-gray-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
