"use client";

import Image from "next/image";
import RoutineImg from "~/public/image/image1.png";
import { Button } from "./ui/button";
import { ChevronsLeftRightIcon } from "lucide-react";
import {
  Product1,
  Product2,
  Product3,
} from "~/lib/img";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-4 md:p-10 rounded-md">
        <div className="relative z-10 p-4">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-black"
            >
              A CLEAN ROUTINE
            </motion.h2>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                className="flex gap-2 items-center text-black"
                onClick={() => setViewMore(true)}
              >
                <ChevronsLeftRightIcon />
                Go Back
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {Product.map((data, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.4 }}
                whileHover={{ scale: 1.05 }}
                className=""
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function DesignRoutine() {
  const [viewMore, setViewMore] = useState<boolean>(true);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:px-16">
      <AnimatePresence mode="wait">
        {viewMore ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-rose-200 rounded-3xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="hidden md:block relative h-[600px]">
                <Image
                  src={RoutineImg}
                  alt="Skincare Routine"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
                <div className="md:hidden w-full aspect-square relative mb-8 rounded-2xl overflow-hidden">
                  <Image
                    src={RoutineImg}
                    alt="Skincare Routine"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold mb-6"
                >
                  DESIGN YOUR ROUTINE
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-700 mb-8 max-w-md"
                >
                  Take care of your skin according to your skin type. Let us help
                  you to find out the basic skin care routine that matches your
                  skin.
                </motion.p>

                <div className="space-y-4 w-full max-w-md">
                  {skinTypes.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-4">
                      {row.map((type, index) => (
                        <motion.button
                          key={type}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + (rowIndex * 3 + index) * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setViewMore(false)}
                          className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md transition-colors"
                        >
                          {type}
                        </motion.button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <ViewMore setViewMore={setViewMore} />
        )}
      </AnimatePresence>
    </section>
  );
}
