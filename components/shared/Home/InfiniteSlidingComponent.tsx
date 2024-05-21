"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Prop = {
  icon: string;
  text: string;
};

type PropType = {
  props: Prop;
};

const InfiniteSlidingComponent: React.FC<PropType> = ({ props }) => {
  //NOTE: pass in props
  // Define the array of slides with numbers

  const changePropsToArray = (object: Prop) => {
    let array = [];

    for (let i = 0; i < 3; i++) {
      array.push({ ...object });
    }

    return array;
  };
  let slides = changePropsToArray(props);

  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div
      style={{ willChange: "transform" }}
      className="w-full h-20 md:h-24 bg-page-black flex items-center -rotate-2 overflow-x-hidden"
    >
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex h-full"
        style={{ transform: "translateZ(0)" }}
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 4,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-4 font-bungee h-full">
                <Image
                  src={item.icon}
                  alt="icons"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <span className="text-page-white font-bungee text-4xl font-medium whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default InfiniteSlidingComponent;
