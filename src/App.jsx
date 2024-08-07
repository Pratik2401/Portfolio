import Navbar from './Navbar'
import './App.css'
import Admin from './Admin'
import Home from './Home'
import Education from './Education'
import Myskill from "./Myskill"
import Project from './Project'
import Certification from './Certification'
import About from './About'
import Contact from './Contact'
import MouseTrail from "@pjsalita/react-mouse-trail";
function App() {
  const pathname = window.location.pathname;
  console.log(pathname)
  const config = {
    color: "#cd0ff9",
    idleAnimation: false,
    idleAnimationCount: 10,
    inverted: false,
    size: 20,
    trailCount: 30,
    }
  return (
    <>
      {pathname === "/Portfolio/" ? (
        <>
          <MouseTrail {...config} />
          <Navbar />
          <Home />
          <Education />
          <Myskill />
          <Project />
          <Certification />
          <About />
          <Contact />
        </>
      ) : (
        <Admin/>
      )}
    </>

  )
}

export default App
