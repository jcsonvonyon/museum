import React from "react";
import { Hero, StarsCanvas, Works } from "./components";
import "./index.css";

const Section1 = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <StarsCanvas />
      <Works />
      <div className="relative z-0">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Section1;
