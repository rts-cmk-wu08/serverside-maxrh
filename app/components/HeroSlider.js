"use client"

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const HeroSlider = ({ offers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? offers.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === offers.length - 1 ? 0 : prevSlide + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-inner relative">
      <AnimatePresence>
        {offers.map((offer, index) => (
          <motion.li
            key={offer.id}
            className={`absolute w-screen flex justify-center items-center h-[600px]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {index === currentSlide && (
              <>
                <Image
                  src={`https://picsum.photos/1600/600?random-${offer.id}`}
                  alt={offer.headline}
                  className={`absolute inset-0 object-cover object-center w-full h-full`}
                  width={1600}
                  height={600}
                  loading={"lazy"}
                />
                <div className="z-[1] grid grid-cols-2 gap-4 p-24">
                  <div></div>
                  <div className="pr-24">
                    <h1 className="text-4xl font-bold mb-4">{offer.headline}</h1>
                    <p className="mb-6">{offer.text}</p>
                    <button className="bg-black text-white py-2 px-10">Shop now</button>
                  </div>
                </div>
              </>
            )}
          </motion.li>
        ))}
      </AnimatePresence>
      <div className="z-[1] absolute left-20 top-1/2 transform -translate-y-1/2">
        <button onClick={handlePrevious} className="focus:outline-none">
          <IoChevronBack className="h-12 w-12 text-black" />
        </button>
      </div>
      <div className="z-[1] absolute right-20 top-1/2 transform -translate-y-1/2">
        <button onClick={handleNext} className="focus:outline-none">
          <IoChevronForward className="h-12 w-12 text-black" />
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        
      </div>
    </div>
  );
};

export default HeroSlider;
