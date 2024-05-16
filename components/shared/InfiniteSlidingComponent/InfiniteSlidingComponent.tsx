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

    for (let i = 0; i < 5; i++) {
      array.push({ ...object });
    }

    return array;
  };

  let slides = changePropsToArray(props);

  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-[110%] h-20 py-12 bg-white flex items-center overflow-hidden mt-20 -rotate-3">
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 8,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((item) => (
          <div
            key={item.text}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <div className="flex items-center gap-4 font-bungee">
                <Image src={item.icon} alt="icons" width={42} height={42} />
                <span className="font-bungee">{item.text}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default InfiniteSlidingComponent;
