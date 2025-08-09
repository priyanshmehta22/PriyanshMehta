import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  const heroRef = useRef(null);

  // Function to calculate age based on date of birth
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  // Calculate age based on DOB: 22/12/2002
  const age = calculateAge("2002-12-22");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-fixed`}
      >
        <div
          className={`line absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="heading">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#915EFF]">Priyansh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a {age} year young student/ Web Developer.
              <br className="sm:block hidden" />I develop websites and user
              interfaces.
            </p>
          </div>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
