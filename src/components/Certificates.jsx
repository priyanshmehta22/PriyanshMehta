import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { RGBAFormat } from "three";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === certificates.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <center> */}
        <h2 className={`${styles.sectionHeadText}`}>My Certificates</h2>
        {/* </center> */}
      </motion.div>
      <div className="w-[1200px] h-[1000px] w-full m-auto py-16 px-4 relative group backdrop-brightness-80">
        <div
          id="overlay"
          style={{
            backgroundImage: `url(${certificates[currentIndex].image})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-40 bg-black backdrop-brightness-50"
        ></div>
        {/* Left Arrow */}
        <div className=" group-hover:block absolute top-[50%] -translate-x-20 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/50 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={35} />
        </div>
        {/* Right Arrow */}
        <div className=" group-hover:block absolute top-[50%] translate-x-[80px] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/50 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={35} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {certificates.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
