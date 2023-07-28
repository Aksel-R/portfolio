"use client"
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import Image from "next/image";
interface CardsProps {
  index: number;
  name: string;
  icon: string;
}

const Cards: React.FC<CardsProps> = ({ index, name, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px]  '>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  );
}

export default Cards;
