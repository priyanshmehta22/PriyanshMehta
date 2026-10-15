import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import FlexCarousel from "./ui/FlexCarousel";

// Scroll distance (in viewport heights) spent on each project while the section is pinned.
const VH_PER_PROJECT = 70;
// Fraction of the pinned scroll spent resting on the first and on the last project.
const HOLD = 0.06;

const carouselItems = projects.map((project) => ({
  src: project.image,
  alt: project.name,
  title: project.name,
  subtitle: project.subtitle ?? project.tags.map((tag) => tag.name).join(" · "),
}));

const ProjectDetails = ({ project }) => (
  <motion.div
    key={project.name}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-tertiary/80 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border border-white/5"
  >
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{project.name}</h3>
      {project.source_code_link && (
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] font-medium text-white bg-[#915EFF] hover:bg-[#7a45f0] transition-colors px-4 py-1.5 rounded-full"
        >
          View project ↗
        </a>
      )}
    </div>
    <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-[21px] sm:leading-[23px] line-clamp-3">
      {project.description}
    </p>
    <div className="mt-2 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <p key={`${project.name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </motion.div>
);

const Works = () => {
  const trackRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [shown, setShown] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  // Page scroll scrubs the carousel continuously (every wheel notch moves it), with a
  // short hold on the first and last project. After the last one the section unpins.
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const t = Math.min(1, Math.max(0, (value - HOLD) / (1 - 2 * HOLD)));
    setPosition(t * (projects.length - 1));
  });

  return (
    <div ref={trackRef} className="relative" style={{ height: `${projects.length * VH_PER_PROJECT + 100}vh` }}>
      <div className="sticky top-0 h-svh flex flex-col pt-20 pb-4 sm:pb-6">
        <div className="flex items-end justify-between gap-4">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My work · scroll to turn</p>
            <h2 className={`${styles.sectionHeadText} leading-tight`}>Projects</h2>
          </motion.div>
          <p className="pb-2 text-secondary text-[13px] sm:text-[15px] tabular-nums">
            <span className="text-white font-semibold">{String(shown + 1).padStart(2, "0")}</span>
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <div className="relative mt-2 flex-1 min-h-[220px] w-full text-white">
          <FlexCarousel
            items={carouselItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.5}
            gap={12}
            squeeze={0.2}
            focusOnClick
            captions
            fit="natural"
            radius={0}
            lensWidth={0.74}
            lensHeight={1.18}
            tilt={62}
            roundness={1}
            bend={0.34}
            reach={0.38}
            curl="twist"
            dispersion={0.45}
            liquid={0}
            followCursor={false}
            autoplay={false}
            interval={4}
            captureWheel={false}
            position={position}
            sideOpacity={0.25}
            onChange={(index) => setShown(index)}
          />
          {/* Soft blur over the sides so only the centre project reads clearly. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] backdrop-blur-[6px] [mask-image:linear-gradient(to_right,black_40%,transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[30%] backdrop-blur-[6px] [mask-image:linear-gradient(to_left,black_40%,transparent)]" />
        </div>

        <div className="mt-3">
          <ProjectDetails project={projects[shown]} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
