import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';
import './styles/Skills.scss';

export default function About() {

  const language = useSelector((state)=>state.language);
  const light_mode = useSelector((state)=>state.light_mode);
  
  return (
    <div className={`skills ${light_mode?"light":"dark"}`}>
      <Toolbar id='skills' style={{backgroundColor:"transparent"}}/>
      {language==="ES"?(<h1>Habilidades</h1>):(<h1>Skills</h1>)}
      <div className='skill_icons'>
        <img src={require('.././img/javascript_icon.png')} alt='javascript'/>
        <img src={require('.././img/typescript_icon.png')} alt='typescript'/>
        <img src={require('.././img/html5_icon.png')} alt='html'/>
        <img src={require('.././img/css3_icon.png')} alt='css'/>
        <img src={require('.././img/sass_icon.png')} alt='sass'/>
        <a href='https://es.reactjs.org/'><img src={require('.././img/react_icon.png')} alt='react'/></a>
        <a href='https://es.redux.js.org/'><img src={require('.././img/redux_icon.png')} alt='redux'/></a>
        {/* <a href='https://mui.com/'><img src={require('.././img/material_ui_icon.png')} alt='mui'/></a> */}
        <a href='https://nodejs.org/'><img src={require('.././img/nodejs_icon.png')} alt='nodejs'/></a>
        <a href='https://expressjs.com/es/'><img src={require('.././img/express_icon.png')} alt='express'/></a>
        <a href='https://sequelize.org/'><img src={require('.././img/sequelize_icon.png')} alt='sequelize'/></a>
        <a href='https://www.postgresql.org/'><img src={require('.././img/postgresql_icon.png')} alt='postgresql'/></a>
        <a href='https://www.mongodb.com/'><img src={require('.././img/mongodb_icon.png')} alt='mongodb'/></a>
      </div>
    </div>
  );
}