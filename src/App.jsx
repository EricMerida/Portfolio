import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Intro />
      <div className="portfolio">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
