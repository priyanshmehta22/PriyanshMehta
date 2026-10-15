import CountUp from "./CountUp";

const NUMBER = /(\d+(?:\.\d+)?)/;

// Shared CountUp settings for every number shown in the UI.
export const Count = ({ to, from = 0, suffix = "", prefix = "", className = "" }) => (
  <CountUp
    from={from}
    to={to}
    mode="count"
    easing="easeOut"
    format="standard"
    separator=""
    prefix={prefix}
    suffix={suffix}
    direction="up"
    duration={1}
    delay={0}
    trigger="view"
    replayOnHover
    className={`count-up-text ${className}`}
  />
);

// Renders text with each number in it counting up, e.g. "July 2024 – Present".
const AnimatedNumbers = ({ text }) =>
  String(text)
    .split(NUMBER)
    .map((part, i) => (i % 2 === 1 ? <Count key={i} to={Number(part)} /> : part));

export default AnimatedNumbers;
