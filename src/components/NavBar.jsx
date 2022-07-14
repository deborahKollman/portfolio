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
                <div>Home</div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div>Proyectos</div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div>Habilidades</div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div>Contacto</div>
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
