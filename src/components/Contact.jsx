import React  from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionHeadText}>MOVE TO OTHER SECTION</p>
        {/* <h3 className={styles.sectionSubText}>Contact.</h3> */}


       <div className="flex  justify-between mt-10">
         <button className="text-black font-bold bg-slate-100 rounded-lg p-2">{"<"}--SECTION 1</button>
         <button className="text-black font-bold bg-slate-100 rounded-lg p-2">SECTION 3--{">"}</button>
       </div>

     
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
