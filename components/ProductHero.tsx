"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeroImg from "~/public/image/image0.png";
import { motion } from "framer-motion";

export default function ProductHero() {
  const router = useRouter()
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-12 md:px-16 bg-[#F0E1DC]"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 md:order-1 px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            ALL YOU NEED IN ONE PACK
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-rose-700 text-3xl font-bold mb-2"
          >
            $300
          </motion.div>
          <p className="text-gray-700 mb-4">
            Moisturizer, Sunscreen, Face toner, Cleansing balm, and Face wash
            now comes in a single pack.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/products")} 
            className="bg-[#983A42] text-white px-8 py-3 rounded-md hover:bg-rose-800 transition-colors w-full md:w-auto cursor-pointer"
          >
            SHOP NOW
          </motion.button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                >
                  <Star
                    className="w-5 h-5 fill-amber-600 stroke-amber-600"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-gray-700 italic">
              &quot;I bought this pack and it made my purchasing of skincare products
              make super easy. Each of the product were amazing and can be used
              for every skin types. I just love it&quot;
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="bg-rose md:h-[400px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={HeroImg}
                alt="Skincare Product Pack"
                width={1000}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
