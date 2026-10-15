import { motion, useReducedMotion, useTransform } from "framer-motion";
import { Oracle } from "../../assets";
import { oracleStory } from "../../constants";
import { Chapter, ChapterLabel, CountUp, Reveal } from "./primitives";
import AnimatedNumbers from "../ui/AnimatedNumbers";

const FIRST_BEAT = 0.16;
const BEAT_GAP = 0.17;
const SPAN = 0.07;

const beatAt = (index) => FIRST_BEAT + index * BEAT_GAP;

// Each beat lights up when reached, then dims once the next one takes over.
const Beat = ({ progress, index, last, beat }) => {
  const reduce = useReducedMotion();
  const at = beatAt(index);
  const next = beatAt(index + 1);
  const opacity = useTransform(
    progress,
    last ? [at, at + SPAN] : [at, at + SPAN, next, next + SPAN],
    last ? [0, 1] : [0, 1, 1, 0.45]
  );
  const x = useTransform(progress, [at, at + SPAN], [-24, 0]);
  const dot = useTransform(progress, [at, at + SPAN], [0, 1]);

  return (
    <motion.li style={reduce ? undefined : { opacity, x }} className="relative pl-8">
      <motion.span
        style={reduce ? undefined : { scale: dot }}
        className="absolute left-[-5px] top-[7px] h-[11px] w-[11px] rounded-full bg-[#915EFF] shadow-[0_0_14px_#915EFF]"
      />
      <h3 className="text-white font-bold text-[17px] sm:text-[20px]">{beat.title}</h3>
      <p className="mt-1 text-secondary text-[13px] sm:text-[15px] leading-[20px] sm:leading-[24px] max-w-xl">
        {beat.text}
      </p>
    </motion.li>
  );
};

const StatTile = ({ progress, index, stat }) => {
  const at = beatAt(index);
  return (
    <Reveal
      progress={progress}
      at={at}
      span={SPAN}
      y={24}
      className="rounded-2xl border border-white/10 bg-tertiary/70 backdrop-blur-sm p-4 sm:p-6"
    >
      <p className="text-white font-black text-[26px] sm:text-[44px] leading-none">
        {stat.text ?? (
          <CountUp progress={progress} range={[at, at + BEAT_GAP * 0.8]} to={stat.value} suffix={stat.suffix} />
        )}
      </p>
      <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">{stat.label}</p>
    </Reveal>
  );
};

const OracleChapter = () => {
  const reduce = useReducedMotion();

  return (
    <Chapter id="oracle" height="360vh">
      {(progress) => <OracleScene progress={progress} reduce={reduce} />}
    </Chapter>
  );
};

const OracleScene = ({ progress, reduce }) => {
  const { beats } = oracleStory;
  const lastAt = beatAt(beats.length - 1);
  const line = useTransform(progress, [FIRST_BEAT, lastAt + SPAN], [0, 1]);

  return (
    <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-14 items-center">
      <div>
        <Reveal progress={progress} at={0} span={0.06}>
          <ChapterLabel index={1}>Where I work</ChapterLabel>
          <div className="mt-3 flex items-center gap-4">
            <img src={Oracle} alt="Oracle" className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg" />
            <span className="rounded-full border border-[#915EFF]/60 px-3 py-1 text-[11px] sm:text-[12px] uppercase tracking-wider text-[#cbb7ff]">
              Promoted
            </span>
          </div>
          <h2 className="mt-3 text-white font-black leading-tight text-[26px] sm:text-[36px] lg:text-[44px]">{oracleStory.role}</h2>
          <p className="mt-2 text-secondary text-[13px] sm:text-[16px]"><AnimatedNumbers text={oracleStory.meta} /></p>
        </Reveal>

        <div className="relative mt-6 sm:mt-10">
          <span className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
          <motion.span
            style={reduce ? undefined : { scaleY: line }}
            className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[#4f7cff] via-[#915EFF] to-[#f272c8]"
          />
          <ul className="space-y-4 sm:space-y-6">
            {beats.map((beat, index) => (
              <Beat
                key={beat.title}
                progress={progress}
                index={index}
                last={index === beats.length - 1}
                beat={beat}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {beats.map((beat, index) => (
          <StatTile key={beat.title} progress={progress} index={index} stat={beat.stat} />
        ))}
      </div>
    </div>
  );
};

export default OracleChapter;
