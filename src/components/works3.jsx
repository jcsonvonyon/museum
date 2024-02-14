import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// import {  section3 } from "../constants/section3";
import { fadeIn, textVariant } from "../utils/motion";
import Projectcard from "./Projectcard";
import { section1 } from "../constants/section1";





const Works3 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <h2 className={`${styles.sectionHeadText}`}>
          SCI as a pioneering peace organization
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          SCI’s activities started in Western Europe: France, Switzerland and
          Liechtenstein, soon also Great Britain. The volunteers were of
          European origin. After the Second World War, SCI started to spread
          across Western Europe, including the formerly fascist countries such
          as Germany, Austria, and Italy. And soon afterwards, activities,
          groups and branches were set up in a few Asian countries, from the
          Indian subcontinent to Japan and Malaysia. Volunteer exchange with
          partner organisations was also an important pillar of SCI’s
          geographical expansion – in communist Eastern Europe as well as on the
          African continent. After the end of the cold war, SCI spread in
          Eastern Europe, and a few rare new branches were built up in Africa,
          Latin America and Asia.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {section1.map((project, index) => (
          <Projectcard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works3, "");
