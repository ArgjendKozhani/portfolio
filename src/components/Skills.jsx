import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML5', 
      icon: HTML, 
      category: 'Frontend'
    },
    { 
      name: 'CSS3', 
      icon: CSS, 
      category: 'Frontend'
    },
    { 
      name: 'JavaScript', 
      icon: JavaScript, 
      category: 'Frontend'
    },
    { 
      name: 'React', 
      icon: ReactLogo, 
      category: 'Framework'
    },
    { 
      name: 'Tailwind CSS', 
      icon: Tailwind, 
      category: 'Framework'
    },
    { 
      name: 'Bootstrap', 
      icon: Bootstrap, 
      category: 'Framework'
    },
    {
      name: 'Git',
      icon: null,
      category: 'Tools',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>'
    },
    {
      name: 'GitHub',
      icon: null,
      category: 'Tools',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>'
    },
    {
      name: 'Responsive Design',
      icon: null,
      category: 'Skills',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'
    },
    {
      name: 'RESTful APIs',
      icon: null,
      category: 'Skills',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>'
    }
  ];

  return (
    <>
      <div style={{ height: '40px' }}></div>
      <section id="skills" style={{ paddingTop: '64px', paddingBottom: '64px' }} className="px-6 relative">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-xl">
              Technologies and tools I use to build amazing web experiences
            </p>
          </div>
          <div className="flex justify-center px-6 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-4xl">
              {skills.map((skill, index) => (
                <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                         p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500 
                         transform hover:-translate-y-2 transition-all duration-300 z-10 hover:z-30
                         shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
                style={{
                  animationDelay: `${index * 80}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center justify-center h-full">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    />
                  ) : (
                    <div 
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-5 text-blue-400 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      dangerouslySetInnerHTML={{ __html: skill.svg }}
                    />
                  )}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white text-center group-hover:text-blue-400 transition-colors leading-tight">
                    {skill.name}
                  </h3>
                  <span className="mt-2 sm:mt-3 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/30">
                    {skill.category}
                  </span>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;