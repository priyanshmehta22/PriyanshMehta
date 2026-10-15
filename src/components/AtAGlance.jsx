import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiBrain01Icon,
  Briefcase01Icon,
  CodeIcon,
  Location01Icon,
  Mortarboard01Icon,
  Rocket01Icon,
  Tick02Icon,
  WorkflowSquare10Icon,
} from "@hugeicons/core-free-icons";
import { Oracle } from "../assets";
import { Count } from "./ui/AnimatedNumbers";
import MagicBento from "./ui/MagicBento";

const ACCENT = "#915EFF";

const icon = (glyph) => <HugeiconsIcon icon={glyph} size={15} strokeWidth={1.8} />;

const BigStat = ({ to, suffix = "", note }) => (
  <div>
    <p className="font-black leading-none text-[44px] sm:text-[52px]" style={{ color: ACCENT }}>
      <Count to={to} suffix={suffix} />
    </p>
    {note && <p className="mt-1 text-[12px] text-[rgba(244,244,245,0.6)]">{note}</p>}
  </div>
);

const RoleVisual = () => (
  <div className="flex items-center gap-3">
    <img src={Oracle} alt="" className="h-12 w-12 rounded-xl object-contain bg-white/5 p-1.5" />
    <span className="rounded-full border border-[#915EFF]/60 px-3 py-1 text-[11px] uppercase tracking-wider text-[#cbb7ff]">
      Promoted · Oct 2026
    </span>
  </div>
);

const RCA_STEPS = ["Collect logs & dumps", "Agent analysis", "Root cause", "Remediation"];

const RcaVisual = () => (
  <ol className="flex flex-col gap-1.5">
    {RCA_STEPS.map((step, i) => (
      <li key={step} className="flex items-center gap-2.5 text-[13px]">
        <span
          className="grid h-5 w-5 flex-none place-items-center rounded-full text-white"
          style={{ background: i === RCA_STEPS.length - 1 ? ACCENT : "rgba(145,94,255,0.35)" }}
        >
          <HugeiconsIcon icon={Tick02Icon} size={11} strokeWidth={2.6} />
        </span>
        {step}
      </li>
    ))}
  </ol>
);

const STACK = ["Java", "TypeScript", "Python", "C++", "Linux", "React", "Next.js", "Node.js", "MCP", "ONNX", "Rust", "MongoDB"];

const StackVisual = () => (
  <div className="flex flex-wrap gap-1.5">
    {STACK.map((tech) => (
      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[12px]">
        {tech}
      </span>
    ))}
  </div>
);

// Everything here is from my resume; MagicBento's built-in demo visuals are not used.
const ITEMS = [
  {
    id: "role",
    label: "Now",
    icon: icon(Briefcase01Icon),
    visual: <RoleVisual />,
    title: "Application Software Developer 2",
    description: "Oracle · Platform Engineering · since 16 Oct 2026",
    colSpan: 2,
  },
  {
    id: "experience",
    label: "Experience",
    icon: icon(Rocket01Icon),
    visual: <BigStat to={2} suffix="+" note="years of enterprise engineering" />,
    title: "Years at Oracle",
    description: "Plus many more years of coding since school",
  },
  {
    id: "education",
    label: "Education",
    icon: icon(Mortarboard01Icon),
    visual: <BigStat to={8.69} note="GPA" />,
    title: "VIT Vellore",
    description: "BTech, Computer Science",
  },
  {
    id: "rca",
    label: "Agents",
    icon: icon(AiBrain01Icon),
    visual: <RcaVisual />,
    title: "RCA agents & remediation",
    description: "Agents that trace SBC issues to a root cause and drive the fix",
    colSpan: 2,
  },
  {
    id: "mcp",
    label: "MCP",
    icon: icon(WorkflowSquare10Icon),
    visual: <BigStat to={22} note="tools across 2 MCP servers" />,
    title: "Multi-agent system",
    description: "Up to 10,000× faster faulty-delivery detection",
  },
  {
    id: "location",
    label: "Based in",
    icon: icon(Location01Icon),
    visual: <p className="text-[24px] sm:text-[28px] font-black leading-tight">Jaipur / Hyderabad</p>,
    title: "India",
    description: "Open to reaching out by email or LinkedIn",
  },
  {
    id: "stack",
    label: "Stack",
    icon: icon(CodeIcon),
    visual: <StackVisual />,
    title: "Languages & tools I reach for",
    colSpan: 4,
  },
];

const AtAGlance = () => (
  <MagicBento
    items={ITEMS}
    columns={4}
    rowHeight={200}
    gap={12}
    radius={20}
    glowColor={ACCENT}
    enableBorderGlow
    enableSpotlight
    spotlightRadius={300}
    clickEffect
    enableStars={false}
    particleCount={24}
    enableTilt={false}
    enableMagnetism={false}
    textAutoHide
    intro
  />
);

export default AtAGlance;
