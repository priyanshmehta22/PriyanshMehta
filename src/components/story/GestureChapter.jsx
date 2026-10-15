import { motion, useReducedMotion, useTransform } from "framer-motion";
import { gestureos } from "../../assets";
import { gestureStory } from "../../constants";
import { Chapter, ChapterLabel, CountUp, Reveal } from "./primitives";

const FIRST_STAGE = 0.14;
const STAGE_GAP = 0.12;
const SPAN = 0.06;
const STATS_AT = 0.76;

const stageAt = (index) => FIRST_STAGE + index * STAGE_GAP;

// A pipeline node that powers on when the scroll reaches it.
const Stage = ({ progress, index, stage }) => {
  const reduce = useReducedMotion();
  const at = stageAt(index);
  const opacity = useTransform(progress, [at, at + SPAN], [0.25, 1]);
  const boxShadow = useTransform(
    progress,
    [at, at + SPAN],
    ["0 0 0px rgba(145,94,255,0)", "0 0 32px rgba(145,94,255,0.55)"]
  );
  const borderColor = useTransform(
    progress,
    [at, at + SPAN],
    ["rgba(255,255,255,0.1)", "rgba(145,94,255,0.8)"]
  );

  return (
    <motion.div
      style={reduce ? undefined : { opacity, boxShadow, borderColor }}
      className="flex-1 min-w-0 rounded-xl border border-[#915EFF]/80 bg-tertiary/80 backdrop-blur-sm px-4 py-2.5 lg:py-5 flex lg:block items-baseline justify-between gap-3"
    >
      <p className="hidden lg:block text-[11px] uppercase tracking-wider text-[#915EFF] font-semibold">
        Stage {index + 1}
      </p>
      <h3 className="text-white font-bold text-[14px] lg:text-[17px] lg:mt-1">{stage.title}</h3>
      <p className="text-secondary text-[12px] lg:text-[13px] lg:mt-1 text-right lg:text-left">
        {stage.detail}
      </p>
    </motion.div>
  );
};

// The link between two stages fills in as the signal passes through it.
const Connector = ({ progress, index }) => {
  const reduce = useReducedMotion();
  const from = stageAt(index) + SPAN * 0.5;
  const fill = useTransform(progress, [from, stageAt(index + 1)], [0, 1]);

  return (
    <div className="relative self-center flex-none w-px h-3 lg:w-8 lg:h-px bg-white/10">
      <motion.span
        style={reduce ? undefined : { opacity: fill }}
        className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#4f7cff] to-[#915EFF]"
      />
    </div>
  );
};

const GestureScene = ({ progress }) => {
  const { stages } = gestureStory;
  const reduce = useReducedMotion();
  const handScale = useTransform(progress, [0, 1], [1.15, 1]);
  const handOpacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 0.22, 0.22, 0.1]);

  return (
    <div className="relative">
      <motion.img
        src={gestureos}
        alt=""
        aria-hidden="true"
        style={reduce ? { opacity: 0.15 } : { scale: handScale, opacity: handOpacity }}
        className="pointer-events-none absolute -right-10 -top-16 w-[70%] max-w-[720px] rounded-3xl hidden md:block [mask-image:radial-gradient(closest-side,black,transparent)]"
      />

      <Reveal progress={progress} at={0} span={0.06} className="relative">
        <ChapterLabel index={2}>What I build on the side</ChapterLabel>
        <h2 className="mt-3 text-white font-black leading-tight text-[30px] sm:text-[40px] lg:text-[48px]">GestureOS</h2>
        <p className="mt-2 text-secondary text-[14px] sm:text-[17px] max-w-2xl leading-[22px] sm:leading-[28px]">
          {gestureStory.tagline}
        </p>
        <a
          href={gestureStory.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-[14px] font-medium text-[#cbb7ff] hover:text-white transition-colors"
        >
          gestureos.in ↗
        </a>
      </Reveal>

      <div className="relative mt-6 sm:mt-10 flex flex-col lg:flex-row">
        {stages.map((stage, index) => (
          <div key={stage.title} className="contents">
            <Stage progress={progress} index={index} stage={stage} />
            {index < stages.length - 1 && <Connector progress={progress} index={index} />}
          </div>
        ))}
      </div>

      <Reveal
        progress={progress}
        at={STATS_AT}
        span={0.06}
        className="relative mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
      >
        <div>
          <p className="text-white font-black text-[26px] sm:text-[40px] leading-none">
            <CountUp progress={progress} range={[STATS_AT, STATS_AT + 0.16]} from={67} to={11} suffix="ms" />
          </p>
          <p className="mt-1 text-secondary text-[12px] sm:text-[14px]">inference, down from 67ms</p>
        </div>
        <div>
          <p className="text-white font-black text-[26px] sm:text-[40px] leading-none">
            <CountUp progress={progress} range={[STATS_AT, STATS_AT + 0.16]} to={60} suffix=" FPS" />
          </p>
          <p className="mt-1 text-secondary text-[12px] sm:text-[14px]">sustained, under 16ms latency</p>
        </div>
        <div>
          <p className="text-white font-black text-[26px] sm:text-[40px] leading-none">0</p>
          <p className="mt-1 text-secondary text-[12px] sm:text-[14px]">dropped frames</p>
        </div>
        <div>
          <p className="text-white font-black text-[26px] sm:text-[40px] leading-none">
            <CountUp progress={progress} range={[STATS_AT, STATS_AT + 0.16]} to={20} suffix="+" />
          </p>
          <p className="mt-1 text-secondary text-[12px] sm:text-[14px]">gestures classified</p>
        </div>
      </Reveal>
    </div>
  );
};

const GestureChapter = () => (
  <Chapter id="gestureos" height="340vh">
    {(progress) => <GestureScene progress={progress} />}
  </Chapter>
);

export default GestureChapter;
