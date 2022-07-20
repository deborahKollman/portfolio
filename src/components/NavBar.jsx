import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HideOnScroll from './sub-components/HideOnScroll';
import Divider from '@mui/material/Divider';
import Menu from './sub-components/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { useSelector } from 'react-redux';
import './styles/NavBar.scss'


export default function NavBar(props) {
  
  const language = useSelector((state)=>state.language)
  const matches = useMediaQuery('(min-width:600px)');
  const [state, setState] = React.useState({left:false})

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      {matches?(<HideOnScroll {...props}>
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
      </HideOnScroll>):(
      <SwipeableDrawer
        anchor={'left'}
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <List
         onClick={toggleDrawer('left', false)}
         onKeyDown={toggleDrawer('left', false)}>
          <ListItem>
            <a href='#back-to-top-anchor'><p>Home</p></a>
          </ListItem>
          <ListItem>
          <a href='#proyects'>{language==="ES"?(<p lang='es'>Proyectos</p>):(<p lang='en'>Proyects</p>)}</a>
          </ListItem>
          <ListItem>
          <a href='#skills'>{language==="ES"?(<p lang='es'>Habilidades</p>):(<p lang='en'>Skills</p>)}</a>
          </ListItem>
          <ListItem>
          <a href='#contact'>{language==="ES"?(<p lang='es'>Contacto</p>):(<p lang='en'>Contact</p>)}</a>
          </ListItem>
        </List>
        <Divider/>
        <List>
          <ListItem>
            <Menu/>
          </ListItem>
        </List>
      </SwipeableDrawer>)}
    </React.Fragment>
  );
}
