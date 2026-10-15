import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { storyChapters } from "../../constants";

// Tracks which `[data-chapter]` element is crossing the middle of the viewport.
export const useActiveChapter = () => {
  const [active, setActive] = useState(storyChapters[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.chapter);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    document.querySelectorAll("[data-chapter]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return active;
};

const StoryProgress = () => {
  const active = useActiveChapter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 h-[3px] origin-left z-30 bg-gradient-to-r from-[#4f7cff] via-[#915EFF] to-[#f272c8]"
      />
      <nav
        aria-label="Story chapters"
        className="fixed right-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-3"
      >
        {storyChapters.map((chapter) => {
          const on = chapter.id === active;
          return (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              aria-current={on ? "step" : undefined}
              className="group flex items-center gap-3 py-0.5"
            >
              <span
                className={`text-[11px] uppercase tracking-wider transition-all duration-300 ${
                  on
                    ? "opacity-100 text-white translate-x-0"
                    : "opacity-0 translate-x-2 text-secondary group-hover:opacity-80 group-hover:translate-x-0"
                }`}
              >
                {chapter.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  on
                    ? "w-2.5 h-2.5 bg-[#915EFF] shadow-[0_0_12px_#915EFF]"
                    : "w-1.5 h-1.5 bg-white/40 group-hover:bg-white/80"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default StoryProgress;
