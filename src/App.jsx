
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' 
import Skills from './components/Skills'  
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global gradient overlay with animated orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500 rounded-full filter blur-[180px] opacity-10"></div>
        <div className="absolute top-[80%] left-[15%] w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-pink-500 rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App
