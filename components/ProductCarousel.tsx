"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

// import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
// import HeroImg from "~/public/image/image0.png";
import {
  Product1,
  Product2,
  Product3,
  Product4,
 
} from "~/lib/img";

export function ProductCarousel({title}:{title:string}) {
  const router = useRouter()
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
    {
      img: Product4,
      title: "Sunscreen",
      subTitle: "Lavender, Rosemary",
      prize: 59,
    },
  ];
  return (
    <Carousel className="  w-full p-2 relative m-auto  bg-[#E5ADAF]">
       <h3 className="font-semibold text-center text-2xl uppercase">{title}</h3>
      <CarouselContent className=" p-10 perspective-distant" >       
        {Product.map((p, index) => (
          <CarouselItem key={index} onClick={() => router.push("/products/overview/1")} className=" cursor-pointer md:basis-1/4 lg:basis-1/3 transform-3d rotate-x-21 rotate-z- shadow-xl transition-all duration-500 hover:-translate-y-8  hover:shadow-2xl">
            <div className="p-1">
              <Image
                src={p.img}
                width={1000}
                height={1000}
                priority
                alt="img"
              />
              <div className="flex flex-col mt-2">
               <h4 className="font-sans font-semibold">{p.title}</h4>
               <p className="italic font-serif">{p.subTitle}</p>
               <span className="font-extrabold">${p.prize}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-5 left-8" />
      <CarouselNext className="absolute top-5 right-8" />
    </Carousel>
  );
}
