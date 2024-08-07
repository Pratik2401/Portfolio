import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Admin from './Admin';
import Home from './Home';
import Education from './Education';
import Myskill from './Myskill';
import Project from './Project';
import Certification from './Certification';
import About from './About';
import Contact from './Contact';

function App() {


  return (
    <Router>
      <MouseTrail {...config} />
      <Navbar />
      <Route path="/Portfolio/admin" component={Admin} />
      <Route path="/" exact>
        <>
          <Home />
          <Education />
          <Myskill />
          <Project />
          <Certification />
          <About />
          <Contact />
        </>
      </Route>
    </Router>
  );
}

export default App;
