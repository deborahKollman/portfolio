import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HideOnScroll from './sub-components/HideOnScroll';
import Divider from '@mui/material/Divider';
import Menu from './sub-components/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector, useDispatch } from 'react-redux';
import { changeLight } from '../redux/actions/index.js'
import './styles/NavBar.scss'


export default function NavBar(props) {
  
  const language = useSelector((state)=>state.language)
  const light_mode = useSelector((state)=>state.light_mode)
  const matches = useMediaQuery('(min-width:480px)');
  const [state, setState] = React.useState({left:false})
  const dispatch = useDispatch();

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

  const handleLightChange = ()=>{
    dispatch(changeLight());
  } 

  return (
    <React.Fragment>
      {matches?(<HideOnScroll {...props}>
        <AppBar>
          <Toolbar className='nav-bar'>
            <div>
                <a href='#about'>{language==="ES"?(<p lang='es'>Acerca de mi</p>):(<p lang='en'>About me</p>)}</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#projects'>{language==="ES"?(<p lang='es'>Proyectos</p>):(<p lang='en'>Projects</p>)}</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#skills'>{language==="ES"?(<p lang='es'>Habilidades</p>):(<p lang='en'>Skills</p>)}</a>
                <Divider orientation="vertical" variant="middle" flexItem />
                <a href='#contact'>{language==="ES"?(<p lang='es'>Contacto</p>):(<p lang='en'>Contact</p>)}</a>
            </div>
            <div>
                <IconButton onClick={handleLightChange}>
                  {!light_mode?(<LightModeIcon style={{color:"yellow"}}/>):(<DarkModeIcon style={{color:"white"}}/>)}
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <Menu/>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>):(
      <AppBar position="fixed">
        <Toolbar style={{backgroundColor:"#002790"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
          >
          <MenuIcon />
          </IconButton>
          <Drawer
            anchor={'left'}
            open={state.left}
            onClose={toggleDrawer('left', false)}
          >
            <List
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}>
              <ListItem>
                <a href='#back-to-top-anchor'>{language==="ES"?(<p lang='es'>Acerca de mi</p>):(<p lang='en'>About me</p>)}</a>
              </ListItem>
              <ListItem>
              <a href='#projects'>{language==="ES"?(<p lang='es'>Proyectos</p>):(<p lang='en'>Projects</p>)}</a>
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
              <ListItem>
                <IconButton onClick={handleLightChange}>
                  {!light_mode?(<LightModeIcon style={{color:"orange"}}/>):(<DarkModeIcon style={{color:"black"}}/>)}
                </IconButton>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
      
      )}
    </React.Fragment>
  );
}
