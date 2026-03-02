import quoteImage from "../assets/aboutme.png";

const About = () => {
  return (
    <>
      <div style={{ height: '40px' }}></div>
      <section id="about" style={{ paddingTop: '64px', paddingBottom: '64px' }} className="px-6 relative">
        {/* Section Title */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative group z-10 hover:z-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <img
                src={quoteImage}
                alt="About me workspace"
                className="relative w-full max-w-md h-80 rounded-2xl shadow-2xl object-cover transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-10">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hello! I'm <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold">Argjend Kozhani</span>, 
                a passionate frontend developer dedicated to crafting beautiful, 
                responsive web experiences that users love.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Currently studying Computer Science at <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">AAB College</span>, 
                where I've built a strong foundation in programming and software development. 
                I specialize in building interactive user interfaces with <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">React</span> and 
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> Tailwind CSS</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 