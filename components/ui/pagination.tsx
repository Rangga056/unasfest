import React, { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

const CustomPagination = ({ activeIndex, totalSlides, onSlideChange }: any) => {
  const [numOfSlides, setNumOfSlides] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setNumOfSlides(2); // Tablets: 3 slides
      } else if (screenWidth >= 768) {
        setNumOfSlides(4); // Laptops: 2 slides
      } else {
        setNumOfSlides(5); // Phones: 5 slides
      }
    };

    // Listen to window resize events
    window.addEventListener("resize", handleResize);
    // Initial check on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex items-center justify-start mt-4 space-x-4`}>
      {[...Array(numOfSlides)].map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 cursor-pointer ${
            index === activeIndex ? "bg-black w-20" : "bg-gray-300"
          }`}
          onClick={() => onSlideChange(index)}
        />
      ))}
      <MoveRight size={36} />
    </div>
  );
};

export default CustomPagination;
