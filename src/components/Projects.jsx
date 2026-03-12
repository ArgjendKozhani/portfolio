import Weather from '../assets/weather.png';
import News from '../assets/news.png';
import Movies from '../assets/movies.png';
import Pokemon from '../assets/pokemon.png';
import coffeeGenerator from '../assets/coffeeGenerator.png';
import quoteGenerator from '../assets/quote.png';

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      image: Weather,
      description: "Real-time weather application with location-based forecasts",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://argjendkozhani.github.io/weather-app/",
      featured: true
    },
    {
      title: "Pokemon App",
      image: Pokemon,
      description: "Interactive Pokemon explorer with search functionality",
      techStack: ["React", "API", "CSS"],
      link: "https://argjendkozhani.github.io/pokemon-app/",
      featured: true
    },
    {
      title: "News App",
      image: News,
      description: "Live news aggregator with category filtering",
      techStack: ["React", "API", "CSS"],
      link: "https://argjendkozhani.github.io/news-app/",
      featured: true
    },
    {
      title: "Movies App",
      image: Movies,
      description: "Movie database with ratings and search features",
      techStack: ["React", "API", "CSS"],
      link: "https://argjendkozhani.github.io/movies-app/",
      featured: true
    },
    {
      title: "Coffee Generator",
      image: coffeeGenerator,
      description: "Fun coffee recommendation app with preferences",
      techStack: ["JavaScript", "HTML", "CSS"],
      link: "https://argjendkozhani.github.io/coffee-generator/",
      featured: false
    },
    {
      title: "Quote Generator",
      image: quoteGenerator,
      description: "Inspirational quote generator with share functionality",
      techStack: ["JavaScript", "API", "CSS"],
      link: "https://argjendkozhani.github.io/QuoteGenerator/",
      featured: false
    }
  ];

  return (
    <>
      <div style={{ height: '40px' }}></div>
      <section id="projects" style={{ paddingTop: '64px', paddingBottom: '64px' }} className="px-6 relative">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent relative inline-block mb-6 pb-2">
            Projects
          </h2>
          
          <p className="text-gray-400 text-xl">
            A selection of my recent work and side projects
          </p>
        </div>
        <div className="flex justify-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-sm md:max-w-2xl lg:max-w-5xl">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-900 rounded-xl 
                       overflow-hidden border border-gray-800 hover:border-blue-500 
                       transform hover:-translate-y-2 transition-all duration-300 z-10 hover:z-30
                       shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-xs font-bold rounded-full shadow-lg">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-blue-500 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-400 
                               text-xs rounded-full font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500
                               transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                             text-sm font-bold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 
                             shadow-lg hover:shadow-blue-500/50"
                  >
                    View Project
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-500 
                                text-sm font-bold rounded-lg cursor-not-allowed">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 text-center">
          <p className="mt-6 text-gray-400 text-lg text-center mb-8">
            Want to see more? Check out my GitHub for additional projects
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://argjendkozhani.github.io/all-projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700
                       text-white font-bold rounded-lg hover:from-blue-500 hover:to-blue-600
                       transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
              </svg>
              View All Projects
            </a>
          <a
            href="https://github.com/ArgjendKozhani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-500 
                     text-blue-400 font-bold rounded-lg hover:bg-blue-500 hover:text-white 
                     transition-all duration-300 shadow-lg hover:shadow-blue-500/50 w-full sm:w-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Visit My GitHub
          </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;