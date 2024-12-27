"use client";

// import { Button } from "@/components/ui/button";
import Image from "next/image";
import RoutineImg from "~/public/image/image1.png";
import { Button } from "./ui/button";
import { ChevronsLeftRightIcon } from "lucide-react";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
} from "~/lib/img";
import { useState } from "react";
const skinTypes = [
  ["Normal", "Dry", "Oily"],
  ["Combination", "Sensitive"],
];

const ViewMore = ({
  setViewMore,
}: {
  setViewMore: (value: boolean) => void;
}) => {
  const Product = [
    {
      img: Product1,
      title: "Sunscreen",
      subTitle: "Lavender, Rosemary",
      prize: 59,
    },
    {
      img: Product2,
      title: "Sunscreen",
      subTitle: "Lavender, Rosemary",
      prize: 59,
    },
    {
      img: Product3,
      title: "Sunscreen",
      subTitle: "Lavender, Rosemary",
      prize: 59,
    },
    // {
    //   img: Product4,
    //   title: "Sunscreen",
    //   subTitle: "Lavender, Rosemary",
    //   prize: 59,
    // },
  ];

  return (
    <>
      <div
        className="flex flex-col gap-4 md:p-10 rounded-md"
      >
        {/* Background Layer */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-md "
          style={{
            backgroundImage: `url(${RoutineImg})`,
            backgroundColor: "rgba(242, 210, 210, 0.2)", // Adjust color and opacity
            backgroundBlendMode: "overlay", // Ensures the color overlays the image
          }}
        /> */}
        <div className="relative z-10 p-4">

       
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-black">A CLEAN ROUTINE</h2>
          <Button
            className="flex gap-2 items-center text-black"
            onClick={() => setViewMore(true)}
          >
            <ChevronsLeftRightIcon />
            Go Back
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {Product.map((data, i) => (
            <div className="" key={i}>
              <Image
                src={data.img}
                width={1000}
                height={1000}
                priority
                alt="product image"
              />
              <div className="flex flex-col mt-2">
                <h4 className="font-sans font-semibold">{data.title}</h4>
                <p className="italic font-serif">{data.subTitle}</p>
                <span className="font-extrabold">${data.prize}</span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default function DesignRoutine() {
  const [viewMore, setViewMore] = useState<boolean>(true);

  // const toggleViewMore = (view: boolean) => !view;
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:px-16">
      {viewMore ? (
        <div className="bg-rose-200 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image Section - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block relative h-[600px]">
              <Image
                src={RoutineImg}
                alt="Skincare Routine"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
              {/* Mobile Image */}
              <div className="md:hidden w-full aspect-square relative mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={RoutineImg}
                  alt="Skincare Routine"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                DESIGN YOUR ROUTINE
              </h2>

              <p className="text-gray-700 mb-8 max-w-md">
                Take care of your skin according to your skin type. Let us help
                you to find out the basic skin care routine that matches your
                skin.
              </p>

              <div className="space-y-4 w-full max-w-md">
                {skinTypes.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-4">
                    {row.map((type) => (
                      <button
                        key={type}
                        //   variant="secondary"
                        onClick={() => setViewMore(false)}
                        className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md transition-colors"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ViewMore setViewMore={setViewMore} />
      )}
    </section>
  );
}
