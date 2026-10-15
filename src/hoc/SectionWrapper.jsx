import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import SectionGlow from "../components/ui/SectionGlow";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        data-chapter={idName || undefined}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <SectionGlow>
          <Component />
        </SectionGlow>
      </motion.section>
    );
  };

export default SectionWrapper;
