import React from "react";
import { useEffect, useState } from "react";
import { assets } from "./constants/assets";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//import Image from 'next/image';
//import { useRouter } from 'next/navigation';
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";
//import styles from "./home.module.css";

const tabs = [
  {
    name: "SCI",
    image: assets.home.hero.figma,
    data: [
      {
        slug: "transform-portfolio-design-to-web-app-1",
        title: "SCI AS A PIONEERING PEACE ORGANIZATION",
        image: assets.home.hero.peaceProject,
        repositoryUrl: "https://github.com/deri-kurniawan/portfolio",
        demoUrl: "/section1",
      },
    ],
  },
  {
    name: "SCI",
    image: assets.home.hero.figma,
    data: [
      {
        slug: "portfolio-web-design",
        title: "SCI WITHIN SOCITY",
        image: assets.home.hero.societyProject,
        repositoryUrl:
          "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
        demoUrl: "/section2",
      },
    ],
  },
  {
    name: "SCI",
    image: assets.home.hero.figma,
    data: [
      {
        slug: "portfolio-web-design",
        title: "SCI IN DIFFERENT PART OF THE WORLD",
        image: assets.home.hero.worldProject,
        repositoryUrl:
          "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
        demoUrl: "/section3",
      },
    ],
  },
];

export default function SectionMyLatestProject() {
  const [activeTab, setActiveTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab && parseInt(tab) < tabs.length - 1) {
      setActiveTab(parseInt(tab));
    }
  }, [activeTab]);

  return (
    <div
      ref={ref}
      className="safe-x-padding my-[172px]"
      aria-label="My Latest Project Section"
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl font-montserrat text-transparent bg-gradient-to-r from-[#A293FF] to-[#00F0FF] bg-clip-text"
        >
          OUR THREE SECTION
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-base font-medium md:text-xl lg:text-2xl text-accent max-w-[706px] mx-auto"
        >
          Take a look at something I&apos;ve worked on, such as a case study,
          real project, and more
        </motion.p>
      </div>
      <div className="flex flex-col items-center justify-center h-full mt-10 ">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-col gap-9 ">
          <div className="flex flex-row md:flex-row bg-gray-300 p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-[26px] gap-y-[26px] md:items-center ">
            {tabs.map((tab, index) => (
              <motion.button
                key={index.toString()}
                className={`relative ${
                  activeTab === index ? "gradient-bg" : "bg-white"
                } w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  setActiveTab(index);
                  //window.history.pushState({}, '', `?tab=${index}`);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={tab.image}
                  alt=""
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                  <p
                    className={`${
                      activeTab === index ? "text-white" : "text-accent"
                    } font-bold transition-colors duration-75 ease-in-out`}
                  >
                    {tab.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="overflow-hidden">
            <div className="bg-gray rounded-[36px] p-[26px] w-auto h-auto overflow-y-auto ">
              <div className="grid grid-flow-row grid-cols-2 gap-[6px]">
                {tabs.map((tab, tabIndex) =>
                  tab.data.map(
                    (item, dataIndex) =>
                      activeTab === tabIndex && (
                        <motion.div
                          key={dataIndex.toString()}
                          className="relative col-span-12 overflow-hidden group xl:col-span-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="col-span-6">
                            <motion.div
                              className="bg-gray-300 p-[26px] rounded-2xl md:rounded-[25px] h-auto overflow-hidden"
                              initial={{ opacity: 0, x: -50 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + dataIndex * 0.1,
                              }}
                            >
                              <img
                                className="object-cover w-30 h-30"
                                src={item.image}
                                alt=""
                                width={450}
                                height={261}
                                // priority
                              />
                            </motion.div>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl">
                            <div className="flex flex-col items-center justify-center w-full h-full select-none lg:select-auto">
                              <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">
                                {item.title}
                              </p>
                              <div className="flex flex-row gap-4 text-3xl">
                                {/* <a
                                                                    className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                                    
                                                                    onClick={() => {
                                                                        if (tab.name === 'SCI') {
                                                                            // If the current tab is 'SCI', navigate to the specified URL
                                                                            router.push(tab.data[0].demoUrl);
                                                                        } 
                                                                    }}
                                                                >
                                                                    <IoMdOpen />
                                                                </a>
                                                             */}

                                <Link
                                  to={
                                    tab.name === "SCI"
                                      ? tab.data[0].demoUrl
                                      : "#"
                                  }
                                  className="p-4 transition-all duration-300 ease-in-out bg-gray-300 rounded-2xl hover:text-white hover:bg-gradient-to-r from-[#A293FF] to-[#00F0FF]"
                                >
                                  <IoMdOpen />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
