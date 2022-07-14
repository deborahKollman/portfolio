import * as React from 'react';
import { Container} from '@mui/material';
import './styles/Skills.scss';

export default function About() {
  return (
    <React.Fragment>
      <Container className='skills'>
        <h1>Skills</h1>
        <div className='icons'>
            <img src={require('.././img/javascript_icon.png')} alt='javascript'/>
            <img src={require('.././img/html5_icon.png')} alt='html'/>
            <img src={require('.././img/css3_icon.png')} alt='css'/>
            <a href='https://es.reactjs.org/'><img src={require('.././img/react_icon.png')} alt='react'/></a>
            <a href='https://es.redux.js.org/'><img src={require('.././img/redux_icon.png')} alt='redux'/></a>
            {/* <a href='https://mui.com/'><img src={require('.././img/material_ui_icon.png')} alt='mui'/></a> */}
            {/* <a href='https://sass-lang.com/'><img src={require('.././img/sass_icon.png')} alt='sass'/></a> */}
            <a href='https://nodejs.org/'><img src={require('.././img/nodejs_icon.png')} alt='nodejs'/></a>
            <a href='https://expressjs.com/es/'><img src={require('.././img/express_icon.png')} alt='express'/></a>
            <a href='https://sequelize.org/'><img src={require('.././img/sequelize_icon.png')} alt='sequelize'/></a>
            <a href='https://www.postgresql.org/'><img src={require('.././img/postgresql_icon.png')} alt='postgresql'/></a>
        </div>
      </Container>
    </React.Fragment>
  );
}