import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

import "./style/landingpage.css"

function App() {
  return (
    <div>
      <div>
    <NavigationBar />
    </div>
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
