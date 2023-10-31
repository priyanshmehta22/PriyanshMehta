import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

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
    <div>
      <motion.div variants={textVariant()}>
        {/* <center> */}
        <h2 className={`${styles.sectionHeadText} certi_top`}>
          My Certificates
        </h2>
        {/* </center> */}
      </motion.div>
      <div className="w-full m-0 py-8 px-4 relative group">
        <div
          id="overlay"
          style={{
            backgroundImage: `url(${certificates[currentIndex].image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            marginLeft: "5%",
            backgroundRepeat: "no-repeat",
            width: "90%",
            paddingTop: "60%", // This maintains the aspect ratio
            borderRadius: "0.5rem", // Rounded corners for the image container
          }}
          className="w-full h-full duration-1000"
        ></div>

        {/* Left Arrow */}
        <div className=" group-hover:block absolute top-[50%]  translate-y-[-50%] left-1 text-m rounded-full p-2 bg-white/50 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        {/* Right Arrow */}
        <div className=" group-hover:block absolute top-[50%]  translate-y-[-50%] right-1 text-m rounded-full p-2 bg-white/50 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
        <div className="flex top-4 justify-center pt-2 object-contain">
          {certificates.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer object-contain"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
