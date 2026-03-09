import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-4 pb-16 relative" style={{ minHeight: 'calc(100vh - 96px)', marginTop: '96px' }}>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center py-12">
        <div className="animate-fadeIn" style={{ marginBottom: '32px' }}>
          
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight leading-tight pb-2">
            Argjend Kozhani
          </h1>
        </div>
        <div className="min-h-[60px] sm:min-h-[80px] flex items-center justify-center w-full overflow-hidden px-2" style={{ marginBottom: '40px' }}>
          <ReactTyped
            className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-2xl sm:text-4xl md:text-6xl font-bold"
            strings={[
              "Frontend Developer",
              "React Specialist",
              "UI/UX Enthusiast",
              "Creative Problem Solver"
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </div>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ marginBottom: '48px' }}>
          Crafting <span className="text-purple-400 font-semibold">beautiful</span> and <span className="text-blue-400 font-semibold">responsive</span> web applications with modern technologies.
          Passionate about creating <span className="text-pink-400 font-semibold">seamless experiences</span> and writing clean, maintainable code.
        </p>
        <div style={{ marginBottom: '56px' }}>
          <p className="text-gray-400 text-lg" style={{ marginBottom: '12px' }}>
            Dedicated to
          </p>
          <div className="min-h-[40px] flex items-center justify-center w-full overflow-hidden px-2">
            <ReactTyped
              className="text-lg sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              strings={[
                "Building innovative solutions 🚀",
                "Learning new technologies 📚",
                "Growing as a developer 📈",
                "Delivering quality code ✨"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center mt-12">
          <a
            href="#projects"
            className="group relative inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl 
                     transform hover:scale-105 transition-all duration-300 
                     shadow-2xl hover:shadow-purple-500/50 text-base tracking-wide whitespace-nowrap"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="group relative inline-block px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-400 
                     font-semibold rounded-xl hover:bg-purple-500 hover:text-white 
                     transform hover:scale-105 transition-all duration-300 text-base tracking-wide
                     shadow-lg hover:shadow-purple-500/50 whitespace-nowrap"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="relative z-10 mb-8 animate-bounce" style={{ marginTop: '40px' }}>
        <a href="#about" className="inline-block">
          <div className="w-10 h-16 border-2 border-purple-400 rounded-full relative mx-auto">
            <div className="w-2 h-4 bg-purple-400 rounded-full absolute left-1/2 top-3 transform -translate-x-1/2 animate-pulse"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
