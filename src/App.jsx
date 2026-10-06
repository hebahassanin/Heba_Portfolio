import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
