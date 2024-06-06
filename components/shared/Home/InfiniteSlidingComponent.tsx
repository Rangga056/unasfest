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
      className="flex h-20 w-full -rotate-2 items-center overflow-x-hidden bg-page-black md:h-24"
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
            className="h-full flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex h-full flex-col items-center justify-center">
              <div className="flex h-full items-center gap-4 font-bungee">
                <Image
                  src={item.icon}
                  alt="icons"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <span className="whitespace-nowrap font-bungee text-4xl font-medium text-page-white">
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
