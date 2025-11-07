import quoteImage from "../assets/aboutme.png"

const About = () => {
return(
    <>
     <hr className="w-[90%] mx-auto h-[4px] bg-[#00df9a] border-0 rounded-4xl my-6 mt-40 mb-[-10%]" />
 
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8  bg-black mt-70 text-white">
   
      <div className="flex justify-center">
        <img
          src={quoteImage}
          alt="About me workspace"
          className="w-[400px] h-[400px] max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

 
      <div>
        <h2 className="text-4xl font-bold text-[#00df9a] mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate frontend developer who loves building modern, 
          responsive web experiences. I'm currenty studying in AAB college where 
          ive gained my first steps into computer sience. My work focuses on clean code, 
          smooth animations, and great user experiences. I'm always learning 
          and exploring new ways to create with technology.
        </p>
      </div>
    </div>
   
  

 
    </>
)
}

export default About 