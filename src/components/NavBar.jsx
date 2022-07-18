import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import HideOnScroll from './sub-components/HideOnScroll';
import Divider from '@mui/material/Divider';
import Menu from './sub-components/Menu';
import { useSelector } from 'react-redux';
import './styles/NavBar.scss'


export default function NavBar(props) {
  
  const language = useSelector((state)=>state.language)

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className='nav-bar'>
            <div>
                <a href='#back-to-top-anchor'><p>Home</p></a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#proyects'>{language==="ES"?(<p lang='es'>Proyectos</p>):(<p lang='en'>Proyects</p>)}</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#skills'>{language==="ES"?(<p lang='es'>Habilidades</p>):(<p lang='en'>Skills</p>)}</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#contact'>{language==="ES"?(<p lang='es'>Contacto</p>):(<p lang='en'>Contact</p>)}</a>
            </div>
            <div>
                {/* <div>Light Dark mode</div>
                <Divider orientation="vertical" flexItem /> */}
                <Menu/>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
