import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skillGroups } from "../constants";
import { textVariant } from "../utils/motion";

const SkillPill = ({ item }) => (
  <li className="group flex flex-none items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] py-2.5 pl-2.5 pr-5 backdrop-blur-sm transition-colors duration-300 hover:border-[#915EFF]/70 hover:bg-[#915EFF]/10 hover:shadow-[0_0_24px_-6px_#915EFF]">
    <span className="grid h-10 w-10 flex-none place-items-center overflow-hidden rounded-xl bg-white/[0.06]">
      {item.icon ? (
        <img src={item.icon} alt="" className="h-7 w-7 object-contain" loading="lazy" />
      ) : (
        <span className="bg-gradient-to-br from-[#b39dff] to-[#4f7cff] bg-clip-text text-[13px] font-black text-transparent">
          {item.mono}
        </span>
      )}
    </span>
    <span className="whitespace-nowrap text-[15px] font-medium text-white-100">{item.name}</span>
  </li>
);

// Each row drifts slowly in alternating directions and pauses on hover. The list is
// rendered twice so the loop is seamless; the copy is hidden from screen readers.
const SkillRow = ({ group, index }) => (
  <div className="scroll-fade">
    <p className="mb-3 text-[12px] uppercase tracking-[0.2em] text-secondary">{group.title}</p>
    <div className="skill-marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="skill-marquee__track flex w-max gap-3"
        style={{
          "--marquee-duration": `${36 + index * 6}s`,
          "--marquee-direction": index % 2 ? "reverse" : "normal",
        }}
      >
        <ul className="flex gap-3">
          {group.items.map((item) => (
            <SkillPill key={item.name} item={item} />
          ))}
        </ul>
        <ul className="flex gap-3" aria-hidden="true">
          {group.items.map((item) => (
            <SkillPill key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Tech = () => (
  <>
    <motion.div variants={textVariant()} className="scroll-fade">
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Tech Stack</h2>
    </motion.div>
    <div className="mt-10 flex flex-col gap-8">
      {skillGroups.map((group, index) => (
        <SkillRow key={group.title} group={group} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
