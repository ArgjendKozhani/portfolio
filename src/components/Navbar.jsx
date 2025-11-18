import React , {useState} from "react";
import CV from "../assets/CV-argjend-kozhani.pdf";

import{AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () =>{
    const [nav , setNav] = useState(false)

    const handleNav = () => {
      
     setNav(prev => !prev)
    }
return(
   <div className="flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-5">

  <h1 className=" w-8xl text-3xl text-[#00df9a] font-bold">Argjend Kozhani</h1>

  
  <ul className="hidden md:flex">
    <li className="p-4 hover:border-[#00df9a] border-b-2 border-transparent transition">
      <a href="#about">About Me</a>
    </li>

    <li className="p-4 hover:border-[#00df9a] border-b-2 border-transparent transition">
      <a href="#skills">Skills</a>
    </li>

    <li className="p-4 hover:border-[#00df9a] border-b-2 border-transparent transition">
      <a href="#projects">Projects</a>
    </li>

    <li className="p-4 hover:border-[#00df9a] border-b-2 border-transparent transition">
      <a href="#contact">Contact</a>
    </li>

    <button className="bg-[#00df9a] text-white px-4 py-2 rounded-[10px] h-[50px] hover:bg-[#36a75c] ml-5 font-bold">
      <a href={CV} download>
    Download CV
  </a>
    </button>
</ul>



  <div onClick={handleNav} className="block md:hidden">
    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
  </div>

  
  <div
    className={
      nav
        ? "fixed md:hidden left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] duration-500"
        : "fixed left-[-100%]"
    }
  >
    <h1 className=" w-full text-2xl text-[#00df9a] font-bold m-2">Argjend Kozhani</h1>

  <ul className="uppercase p-4">
    <li className="p-4 border-b border-gray-600">
        <a href="#about">About</a>
    </li>

    <li className="p-4 border-b border-gray-600">
        <a href="#skills">Skills</a>
    </li>

    <li className="p-4 border-b border-gray-600">
        <a href="#projects">Projects</a>
    </li>

    <li className="p-4 border-b border-gray-600">
        <a href="#contact">Contact</a>
    </li>
</ul>


    <button className="bg-[#00df9a] text-white px-4 py-2 rounded-[10px] h-[50px] hover:bg-[#36a75c] ml-5 font-bold">
      <a href={CV} download>
    Download CV
  </a>
    </button>
  </div>
</div>

)
}
export default Navbar