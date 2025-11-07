import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';

 const Skills = () => {
  return (
    <> 
    <hr className="w-[90%] mx-auto h-[4px] bg-[#00df9a] border-0 rounded-4xl my-6 mt-40 mb-[-10%]" />

    <div className="bg-black text-white px-8 py-16 mt-40">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00df9a] mb-30">Skills</h2>

      
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center  bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-3/4 md:w-auto mx-auto">
            <img src={HTML} alt="HTML" className="w-16 h-16 mb-3" />
            <p className="text-[#00df9a] font-semibold mt-2">HTML</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-3/4 md:w-auto mx-auto">
            <img src={CSS} alt="CSS" className="w-16 h-16 mb-3" />
            <p className="text-[#00df9a] font-semibold mt-2">CSS</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-3/4 md:w-auto mx-auto">
            <img src={JavaScript} alt="JavaScript" className="w-16 h-16 mb-3" />
            <p className="text-[#00df9a] font-semibold mt-2">JavaScript</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-3/4 md:w-auto mx-auto">
            <img src={ReactLogo} alt="React" className="w-16 h-16 mb-3" />
            <p className="text-[#00df9a] font-semibold mt-2">React</p>
          </div>
           <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-3/4 md:w-auto mx-auto">
            <img src={Tailwind} alt="React" className="w-16 h-16 mb-3" />
            <p className="text-[#00df9a] font-semibold mt-2">Tailwind</p>
          </div>
            <div className="flex flex-col items-center justify-center bg-[#0a0a0a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-3/4 md:w-auto mx-auto">
            <img src={Bootstrap} alt="React" className="w-16 h-16 mb-3" />
            <p className="text-[#00df9a] font-semibold mt-2">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
    </>
        
  );
}


export default Skills;