"use client";

import { motion } from "framer-motion";

const AutoScrollComponent = () => {
  //NOTE: pass in props
  const demoVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        staggerChildren: 0.5,
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-[110vw] overflow-hidden bg-white py-8 mt-[60px] -rotate-3">
      <motion.div
        className="w-screen flex items-center gap-[300px] whitespace-nowrap"
        variants={demoVariants}
        animate="animate"
      >
        <motion.div variants={demoVariants} className="h-20 w-20 bg-lime-500">
          {/* Add Icon and Text from the component Props */}
        </motion.div>
        <motion.div variants={demoVariants} className="h-20 w-20 bg-orange-500">
          {/* Add Icon and Text from the component Props */}
        </motion.div>
        <motion.div variants={demoVariants} className="h-20 w-20 bg-purple-500">
          {/* Add Icon and Text from the component Props */}
        </motion.div>
        <motion.div variants={demoVariants} className="h-20 w-20 bg-red-500">
          {/* Add Icon and Text from the component Props */}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default AutoScrollComponent;
