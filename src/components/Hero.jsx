import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";
import { styles } from "../styles";
import Shuffle from "./ui/Shuffle";
import { Count } from "./ui/AnimatedNumbers";

// What I build, cycled one at a time instead of crammed into one sentence.
const CRAFTS = [
  "AI agents",
  "websites",
  "apps",
  "workflows",
  "microservices",
  "data pipelines",
  "MCP servers",
  "computer vision",
];
const CRAFT_INTERVAL_MS = 800;
// Match the hero text instead of Shuffle's default pixel font.
const SHUFFLE_STYLE = {
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  textTransform: "none",
  fontWeight: 700,
};

// Age from date of birth (22 Dec 2002), so the intro stays current.
const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const Hero = () => {
  const age = calculateAge("2002-12-22");
  const [craft, setCraft] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCraft((i) => (i + 1) % CRAFTS.length), CRAFT_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // The intro drifts up, shrinks and fades as the story begins.
  const y = useTransform(scrollY, [0, 600], [0, -160]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <>
      <div
        id="home"
        data-chapter="home"
        className="relative w-full h-screen mx-auto"
      >
        <motion.div
          style={reduce ? undefined : { y, scale, opacity }}
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
              I am a <Count to={age} /> year young professional / developer at Oracle.
            </p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop{" "}
              <Shuffle
                key={craft}
                text={CRAFTS[craft]}
                tag="span"
                textAlign="left"
                color="#915EFF"
                style={SHUFFLE_STYLE}
                effect="slide"
                shuffleDirection="right"
                duration={0.28}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.015}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                hoverRadius={0}
                motionBlur={false}
                respectReducedMotion={true}
                maxDelay={0}
                scrambleCharset=""
                loop={false}
                loopDelay={0}
              />
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[13px] sm:text-[15px] text-secondary backdrop-blur-sm">
              <HugeiconsIcon icon={Location01Icon} size={15} strokeWidth={2} />
              Jaipur / Hyderabad
            </p>
          </div>
        </motion.div>
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
