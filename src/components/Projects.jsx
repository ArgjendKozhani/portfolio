import Weather from '../assets/weather.png'
import News from '../assets/news.png'
import Movies from '../assets/movies.png'
import Pokemon from '../assets/pokemon.png'
import coffeeGenerator from '../assets/coffeeGenerator.png'
import quoteGenerator from '../assets/quote.png'
const Projects = () => {

    return (
        <>
         <hr className="w-[90%] mx-auto h-[4px] bg-[#00df9a] border-0 rounded-4xl my-6 mt-20 mb-[10%]" />
        <h2 id="projects" className="text-4xl font-bold text-[#00df9a] mt-35">Projects</h2>

        <div  className="grid grid-cols-2 sm:grid-cols-2 md:gap-6 sm:gap-6  md:grid-cols-4 gap-4 text-2xl text-[#00df9a] mt-30">

           <a href="https://argjendkozhani.github.io/weather-app/">
  <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
    <img src={Weather} alt="Coffee Generator" className="w-55 h-45 mb-3 rounded-2xl" />
    <p>Weather App</p>
  </div>
</a>


            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 ">
                <img src={News} alt=""  className="w-55 h-45 mb-3 rounded-2xl sm:"/>
                <p>News App (link coming soon)</p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                <img src={Movies} alt=""  className="w-55 h-45 mb-3 rounded-2xl"/>
                <p>Movies App (link coming soon)</p>
            </div>

           <a href="https://argjendkozhani.github.io/pokemon-app/">
  <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
    <img src={Pokemon} alt="Coffee Generator" className="w-55 h-45 mb-3 rounded-2xl" />
    <p>Pokemon App</p>
  </div>
</a>


            <a href="https://argjendkozhani.github.io/coffee-generator/">
  <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
    <img src={coffeeGenerator} alt="Coffee Generator" className="w-55 h-45 mb-3 rounded-2xl" />
    <p>Coffee Generator</p>
  </div>
</a>


            <a href="https://argjendkozhani.github.io/QuoteGenerator/">
  <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
    <img src={quoteGenerator} alt="Coffee Generator" className="w-55 h-45 mb-3 rounded-2xl" />
    <p>Quote Generator</p>
  </div>
</a>

           

           
        </div>
        </>
         
         

    )
}

export default Projects