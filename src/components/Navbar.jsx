import React , {useState} from "react";
import{AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () =>{
    const [nav , setNav] = useState("")

    const handleNav = () => {
        setNav(!nav)
    }
return(
    < div className="flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-5"  >
        <h1 className=" w-8xl text-3xl text-[#00df9a] font-bold">Argjend Kozhani</h1>
        <ul className="hidden md:flex">
            <li className="p-4 border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 cursor-pointer">
      About
    </li>
    <li className="p-4 border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 cursor-pointer">
      Skills
    </li>
    <li className="p-4 border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 cursor-pointer">
      Projects
    </li>
    <li className="p-4 border-b-2 border-transparent hover:border-[#00df9a] transition duration-300 cursor-pointer">
      Contact
    </li>
   <button className="bg-[#00df9a] text-white px-4 py-2 rounded-[10px] h-[50px] hover:bg-[#36a75c] ml-5 font-bold" >Download CV</button>
        </ul>
        
        <div onClick={handleNav} className="block  md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
           
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#000300]" : "fixed left-[-100%]"}>
              <h1 className=" w-full text-2xl text-[#00df9a] font-bold m-2 ">Argjend Kozhani</h1>
            <ul className="uppercase p-4 bg-[#000300]">
                <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4  border-b border-gray-600">Skills</li>
            <li className="p-4  border-b border-gray-600">Projects</li>
            <li className="p-4  border-b border-gray-600">Contact</li>
            </ul>
            <button className="bg-[#00df9a] text-white px-4 py-2 rounded-[10px] h-[50px] hover:bg-[#36a75c] ml-5 font-bold">Download CV</button>
        </div> 
    </div>
)
}
export default Navbar