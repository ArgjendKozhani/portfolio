import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import Linked from '../assets/linked.png'
import Gmail from '../assets/gmail.png'
import Location from '../assets/location.png'

const Contact = () => {

    return (
        <>
            <hr className="w-[90%] mx-auto h-[4px] bg-[#00df9a] border-0 rounded-4xl my-6 mt-20 mb-[10%]" />

            <div
  className="
     grid 
    grid-cols-1 md:grid-cols-2 
    gap-6 
    place-items-center 
    text-2xl text-[#00df9a] 
    mb-20
  "
>
 
  <div className="flex flex-col justify-center items-center gap-10 m-5 w-[400px]">
    <h2 className="text-4xl font-bold text-[#00df9a] mt-10">Contact Me</h2>
    <p className="text-white font-bold text-center">
      If you’re really interested in my work, here are some of my socials where you
      can contact me.
    </p>

    <div className="flex flex-row gap-5">
        <a href="https://www.instagram.com/argjend___kozhani" target="_blank" rel="noopener noreferrer">
      <img
        src={Instagram}
        alt="Instagram"
        className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300"
      />
      </a>
    <a
  href="https://www.facebook.com/argjend-kozhani.1"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={Facebook}
    alt="Facebook"
    className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300"
  />
</a>

<a
  href="https://www.linkedin.com/in/argjend-kozhani"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={Linked}
    alt="LinkedIn"
    className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300"
  />
</a>

<a
  href="mailto:argjendkozhani15@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={Gmail}
    alt="Gmail"
    className="w-[40px] h-[40px] p-2 bg-white rounded hover:scale-110 transition-transform duration-300"
  />
</a>

    </div>
  </div>

 
  <div
    className="
      flex flex-col justify-center items-center gap-6  bg-[#00df9a] text-white font-bold
      w-[300px] h-[300px] rounded-3xl shadow-[15px_15px_6px_-6px_#00df5a]mt-20 md:mt-0 md:ml-20 p-6 
      hover:scale-105 transition-transform duration-300
    "
  >
    <img
      src={Location}
      alt="Location"
      className="w-[100px] h-[100px] p-2 bg-white rounded hover:scale-110 transition-transform duration-300"
    />
    <p>Qyteti: Lipjan</p>
    <h2>Tel: +38345811336</h2>
  </div>
</div>

 <footer>   
       <p className="text-white text-center mb-0">© 2025 Argjend. All rights reserved.</p>
</footer>
        </>

    )
}


export default Contact