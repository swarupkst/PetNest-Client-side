"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroPet from "../../../../public/asset/hero-pet.png";

export default function AnimatedHeroImage() {
  return (
    <div className="flex justify-center items-center">
      
      <motion.div
        animate={{
          y: [0, -20, 0],   // up & down floating
          scale: [1, 1.03, 1] // slight breathing effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full"></div>

        {/* Image */}
        <Image
          src={HeroPet}
          alt="Happy pets"
          width={420}
          height={420}
          className="relative rounded-2xl"
        />
      </motion.div>

    </div>
  );
}