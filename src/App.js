import * as React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollTop';
import NavBar from './components/NavBar';
import About from './components/About';
import Proyect from './components/Proyects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Toolbar id="back-to-top-anchor"/>
      <About/>
      <Proyect/>
      <Skills/>
      <Contact/>
      <ScrollToTop/>
    </React.Fragment>
  );
}

export default App;
