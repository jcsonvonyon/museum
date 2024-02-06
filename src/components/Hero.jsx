

import { styles } from "../styles";

import { Headerimg } from "../assets";
import TrackVisibility from "react-on-screen";
import 'animate.css';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">BOT</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            This Section has Images Realted to  <br className="sm:block hidden" />
            SCI as a pioneering peace organization
          </p>
        </div>
      </div>
    

      <div className="banner" id="home">
        <div className=" flex justify-end pt-64 md:pt-20 ">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <img src={Headerimg} alt="Header Img" width={600} height={600} />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
