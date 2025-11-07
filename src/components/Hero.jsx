import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white h-auto w-auto p-8 md:p-6 sm:p-4 mt-10 sm:w[800px]">
      <div className="flex flex-col text-center justify-center mt-15 ">
        
        <ReactTyped
        className="text-[#00df9a] text-5xl font-bold p-3 md:text-5xl sm:text-3xl"
          strings={["Frontend Developer"]}
          typeSpeed={120}
          backSpeed={80}
          loop
        />
        <h1 className="font-bold text-4xl md:text-4xl sm:text-4xl">An Aspiring Developer</h1>

        <p className="mt-3  text-3xl" >Always interested in</p>

      
        <ReactTyped
          className="text-3xl font-semibold  mt-2 text-[#00df9a]"
          strings={["Building.", "Learning.", "Growing."]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
