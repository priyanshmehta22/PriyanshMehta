import { motion } from "framer-motion";
import { styles } from "../styles";
import { disciplines } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Count } from "./ui/AnimatedNumbers";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
import AtAGlance from "./AtAGlance";

// One discipline per card. Earlier cards shrink, dim and tilt back as later ones stack on top.
const DisciplineCard = ({ index, discipline }) => {
  const { kicker, title, text, proof, chips, accent } = discipline;

  return (
    <ScrollStackItem
      itemClassName="!h-auto min-h-[360px] sm:min-h-[340px] !p-6 sm:!p-10 overflow-hidden"
      style={{
        background: `radial-gradient(120% 140% at 100% 0%, ${accent}33, transparent 55%), #151030`,
        color: "#f3f3f3",
        border: `1px solid ${accent}40`,
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -bottom-10 sm:-bottom-16 font-black leading-none text-[140px] sm:text-[220px] select-none"
        style={{ color: "transparent", WebkitTextStroke: `1px ${accent}55` }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-10 items-start">
        <div>
          <p className="text-[12px] sm:text-[13px] uppercase tracking-[0.2em] font-semibold" style={{ color: accent }}>
            {String(index + 1).padStart(2, "0")} · {kicker}
          </p>
          <h3 className="mt-2 text-white font-black text-[26px] sm:text-[36px] leading-tight">{title}</h3>
          <p className="mt-3 text-secondary text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">{text}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white-100"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="md:pt-8">
          <p className="font-black leading-none text-[40px] sm:text-[60px]" style={{ color: accent }}>
            <Count to={proof.value} suffix={proof.suffix} />
          </p>
          <p className="mt-2 text-secondary text-[13px] sm:text-[15px] max-w-[260px]">{proof.label}</p>
        </div>
      </div>
    </ScrollStackItem>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="scroll-fade">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="scroll-fade mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m Priyansh, an Application Software Developer 2 on Oracle&apos;s
        platform engineering team. I work on AI-integrated systems, computer
        vision, distributed systems and agentic workflows, and on keeping
        large-scale network infrastructure reliable. Day to day that means
        Linux/C++ datapath fixes on the Acme Packet SBC, multi-agent systems
        wired together through MCP servers, and full-stack analysis tools like
        BugInsight. Outside work I build GestureOS, a real-time hand-tracking
        platform that runs entirely on-device.
        <br />
        <br />
        That&apos;s <Count to={2} suffix="+" /> years of enterprise
        engineering, built on many more years of writing code just for the love
        of it: from tinkering in computer science classes back in school in
        Jaipur, to freelance sites for real clients, to late-night side
        projects that turned into full products.
      </motion.p>

      <div className="scroll-fade mt-10">
        <AtAGlance />
      </div>

      <p className={`${styles.sectionSubText} scroll-fade mt-16`}>What I build</p>
      <div className="mt-4 -mx-4 sm:mx-0">
        <ScrollStack
          useWindowScroll
          smoothScroll={false}
          itemDistance={100}
          itemStackDistance={24}
          stackPosition="16%"
          itemScale={0.04}
          baseScale={0.85}
          dimAmount={0.3}
          blurAmount={0.6}
          tiltAmount={4}
          rotationAmount={0}
          holdDistance={160}
        >
          {disciplines.map((discipline, index) => (
            <DisciplineCard key={discipline.title} index={index} discipline={discipline} />
          ))}
        </ScrollStack>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
