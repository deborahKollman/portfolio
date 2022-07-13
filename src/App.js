import * as React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollTop';
import NavBar from './components/NavBar'

function App() {
  return (
    <React.Fragment>
      <NavBar id="back-to-top-anchor" />
      <ScrollToTop/>
    </React.Fragment>
    // <div className="App">
    //   <NavBar/>
    //   <div className='home'>
    //     <h1>Hola! Soy Deborah</h1>
    //     <h2>Full Stack Web Developer</h2>
    //     <h3>About</h3>
    //   </div>
    //   <div className='proyects'>
    //     <p>Aca va un carrusel</p>
    //   </div>
    //   <div className='skills'>
    //     <p>Muchos iconos(con links)</p>
    //   </div>
    //   <div className='contact'>
    //     <p>Telefono</p>
    //     <p>LinkedIn</p>
    //     <p>Github</p>
    //   </div>
    // </div>
  );
}

export default App;
