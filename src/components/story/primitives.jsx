import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { styles } from "../../styles";
import SectionGlow from "../ui/SectionGlow";

// A tall section whose content stays pinned to the viewport while you scroll
// through it. Children receive the chapter's smoothed scroll progress (0–1).
export const Chapter = ({ id, height = "320vh", children }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section
      ref={ref}
      id={id}
      data-chapter={id}
      className="relative"
      style={{ height: reduce ? "auto" : height }}
    >
      <div
        className={`${
          reduce ? "" : "sticky top-0 h-svh overflow-hidden"
        } flex items-center`}
      >
        <div className={`${styles.paddingX} pt-24 pb-6 max-w-7xl mx-auto w-full`}>
          <SectionGlow padding="p-5 sm:p-8">{children(progress)}</SectionGlow>
        </div>
      </div>
    </section>
  );
};

// Fades and lifts its children in as `progress` passes `at`.
export const Reveal = ({ progress, at, span = 0.08, y = 40, className = "", children }) => {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, [at, at + span], [0, 1]);
  const translateY = useTransform(progress, [at, at + span], [y, 0]);
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div style={{ opacity, y: translateY }} className={className}>
      {children}
    </motion.div>
  );
};

const format = (value) => Math.round(value).toLocaleString("en-US");

// A number that counts from `from` to `to` as `progress` moves through `range`.
export const CountUp = ({ progress, range, from = 0, to, suffix = "" }) => {
  const reduce = useReducedMotion();
  const value = useTransform(progress, range, [from, to]);
  const [text, setText] = useState(format(reduce ? to : from));

  useEffect(() => {
    if (reduce) return undefined;
    setText(format(value.get()));
    return value.on("change", (v) => setText(format(v)));
  }, [reduce, value]);

  return (
    <span className="tabular-nums">
      {reduce ? format(to) : text}
      {suffix}
    </span>
  );
};

export const ChapterLabel = ({ index, children }) => (
  <p className={`${styles.sectionSubText} flex items-center gap-3`}>
    <span className="text-[#915EFF] font-semibold">
      {String(index).padStart(2, "0")}
    </span>
    <span className="h-px w-8 bg-secondary/50" />
    {children}
  </p>
);
