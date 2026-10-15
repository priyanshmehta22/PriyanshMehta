import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import AnimatedNumbers from "./ui/AnimatedNumbers";

const ACCENT = "#915EFF";

const enter = (reduce, x) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, x, y: 30 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { type: "spring", stiffness: 70, damping: 18 },
      };

const ProjectTile = ({ project, index, reduce }) => (
  <motion.div
    {...(reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { delay: 0.08 * index, duration: 0.4 },
        })}
    className="rounded-xl border border-white/10 bg-white/[0.04] p-3 hover:border-[#915EFF]/60 hover:bg-white/[0.07] transition-colors"
  >
    <p className="text-white font-semibold text-[14px]">{project.name}</p>
    <p className="mt-1 text-secondary text-[12px] leading-[18px]">{project.text}</p>
  </motion.div>
);

// A role on the timeline: logo node on the line, card on alternating sides (desktop).
const Entry = ({ experience, index }) => {
  const reduce = useReducedMotion();
  const left = index % 2 === 0;
  const { current } = experience;

  return (
    <li className="scroll-fade relative grid md:grid-cols-2 md:gap-16 pl-14 md:pl-0">
      <div
        className={`absolute top-6 left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-[#151030] ${
          current ? "border-[#915EFF] shadow-[0_0_24px_#915EFF]" : "border-white/20"
        }`}
      >
        {current && !reduce && (
          <span className="absolute inset-0 rounded-full border-2 border-[#915EFF] animate-ping opacity-60" />
        )}
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="h-7 w-7 rounded-full object-contain"
        />
      </div>

      <motion.article
        {...enter(reduce, left ? -60 : 60)}
        className={`relative rounded-2xl border p-5 sm:p-6 backdrop-blur-sm ${
          left ? "md:col-start-1" : "md:col-start-2"
        } ${
          current
            ? "border-[#915EFF]/60 bg-[#1d1836]/90 shadow-[0_0_60px_-20px_#915EFF]"
            : "border-white/10 bg-[#1d1836]/80"
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/5 px-3 py-1 text-[12px] font-medium text-[#cbb7ff]">
            <AnimatedNumbers text={experience.date} />
          </span>
          {current && (
            <span className="rounded-full bg-[#915EFF] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
              Now
            </span>
          )}
        </div>

        <h3 className="mt-3 text-white text-[19px] sm:text-[22px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p className="mt-1 text-secondary text-[14px] font-semibold">{experience.company_name}</p>
        {experience.note && <p className="mt-2 text-[13px] text-[#cbb7ff]">{experience.note}</p>}

        {experience.points?.length > 0 && (
          <ul className="mt-3 list-disc ml-5 space-y-1.5">
            {experience.points.map((point, i) => (
              <li key={i} className="text-white-100 text-[13px] leading-[20px] tracking-wide">
                {point}
              </li>
            ))}
          </ul>
        )}

        {experience.projects?.length > 0 && (
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {experience.projects.map((project, i) => (
              <ProjectTile key={project.name} project={project} index={i} reduce={reduce} />
            ))}
          </div>
        )}
      </motion.article>
    </li>
  );
};

const Experience = () => {
  const listRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <motion.div variants={textVariant()} className="scroll-fade">
        <p className={`${styles.sectionSubText} text-center`}>My journey, oldest first</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
      </motion.div>

      <div ref={listRef} className="relative mt-16 sm:mt-20">
        <span className="absolute top-0 bottom-0 left-[21px] md:left-1/2 w-px md:-translate-x-1/2 bg-white/10" />
        <motion.span
          style={reduce ? undefined : { scaleY: draw }}
          className="absolute top-0 bottom-0 left-[21px] md:left-1/2 w-[2px] md:-translate-x-1/2 origin-top bg-gradient-to-b from-[#4f7cff] via-[#915EFF] to-[#f272c8]"
        />

        <ol className="relative space-y-10 sm:space-y-14">
          {experiences.map((experience, index) => (
            <Entry key={`${experience.title}-${index}`} experience={experience} index={index} />
          ))}
        </ol>
      </div>

      {/* Below the timeline container, so the vertical line ends at the last role. */}
      <p className="scroll-fade mt-10 text-center text-[13px] uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
        And the story continues…
      </p>
    </>
  );
};

export default SectionWrapper(Experience, "work");
