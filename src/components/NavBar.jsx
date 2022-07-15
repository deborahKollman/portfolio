import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import './styles/NavBar.scss'

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function NavBar(props) {
  
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className='nav-bar'>
            <div>
                <a href='#back-to-top-anchor'>Home</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#proyects'>Proyectos</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#skills'>Habilidades</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#contact'>Contacto</a>
            </div>
            <div>
                <div>Light Dark mode</div>
                <Divider orientation="vertical" flexItem />
                <div>Lenguaje</div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
