"use client";

import { motion } from "framer-motion";

const InfiniteSlidingComponent = () => {
  //NOTE: pass in props
  // Define the array of slides with numbers
  const slides = [
    { number: 1, text: "hello" },
    { number: 2, text: "hello" },
    { number: 3, text: "hello" },
    { number: 4, text: "hello" },
    { number: 5, text: "hello" },
  ];

  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full h-20 py-12 bg-white flex items-center overflow-hidden mt-20 -rotate-3">
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <div className="flex items-center gap-4">
                <span>{slide.number}</span>
                <span>{slide.text}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default InfiniteSlidingComponent;
