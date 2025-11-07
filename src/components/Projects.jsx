import Weather from '../assets/weather.png'
import News from '../assets/news.png'
import Movies from '../assets/movies.png'
import Pokemon from '../assets/pokemon.png'
const Projects = () => {

    return (
        <>
         <hr className="w-[90%] mx-auto h-[4px] bg-[#00df9a] border-0 rounded-4xl my-6 mt-20 mb-[10%]" />
        <h2 className="text-4xl font-bold text-[#00df9a] mt-35">Projects</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:gap-6 sm:gap-6  md:grid-cols-4 gap-4 text-2xl text-[#00df9a] mt-30">

            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                <img src={Weather} alt=""  className="w-55 h-45 mb-3 rounded-2xl"/>
                <p>Weather App</p>
            </div>

            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 ">
                <img src={News} alt=""  className="w-55 h-45 mb-3 rounded-2xl sm:"/>
                <p>News App</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                <img src={Movies} alt=""  className="w-55 h-45 mb-3 rounded-2xl"/>
                <p>Movies App</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                <img src={Pokemon} alt=""  className="w-55 h-45 mb-3 rounded-2xl"/>
                <p>Pokemon App</p>
            </div>


            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                <img src={Weather} alt=""  className="w-55 h-45 mb-3 rounded-2xl"/>
                <p>Weather App</p>
            </div>

            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 ">
                <img src={News} alt=""  className="w-55 h-45 mb-3 rounded-2xl sm:"/>
                <p>News App</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                <img src={Movies} alt=""  className="w-55 h-45 mb-3 rounded-2xl"/>
                <p>Movies App</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                <img src={Pokemon} alt=""  className="w-55 h-45 mb-3 rounded-2xl"/>
                <p>Pokemon App</p>
            </div>

           
        </div>
        </>
         
         

    )
}

export default Projects