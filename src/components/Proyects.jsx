import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import ForwardIcon from '@mui/icons-material/Forward';
import ImageCarousel from './sub-components/ImageCarousel';

import './styles/Proyects.scss';


export default function About() {
  // '../../img/'
  const videogames = [{url:require('../img/vg_landing.png'),alt:'Landing page'},{url:require('../img/vg_search.png'),alt:'Search, filter, order'},{url:require('../img/vg_detail.png'),alt:'Videogame detail page'},{url:require('../img/vg_create.png'),alt:'Create videogame'}];
  const serviexpress = [{url:require('../img/se_landing.png'),alt:'Landing page'},{url:require('../img/se_home.png'),alt:'Homepage'},{url:require('../img/se_detail.png'),alt:'Publication page'},{url:require('../img/se_order.png'),alt:'Order page'}];
  
  return (
    <React.Fragment>
      <div className='proyects' maxWidth='xl' id='proyects'>
        <h1>Proyectos</h1>
        <Card><CardContent>
        <div className='proyect_div'>
        <img src={require('../img/vg_landing.png')} alt="VideogamesApp"/>
        <div className='proyect_detail'>
          <h2>Videogames App</h2>
          <p>Proyecto individual creado para el bootcamp Henry.
          <br/> Esta SPA (Single Page Application) permite visualizar videojuegos e interactuar con ellos, incluyendo:
          </p>
          <ul>
            <li>Filtrarlos por genero y tipo (creado o preexistente),</li>
            <li>Ordenarlos por nombre o puntuacion,</li>
            <li>Buscarlos por nombre,</li>
            <li>Visualizar detalles de cada videojuego,</li>
            <li>Crear videojuegos para poder ser visualizados en la pagina.</li>
          </ul>
          <a href='https://github.com/deborahKollman/Videogames_PI'>
            <Button variant="contained" startIcon={<GitHubIcon/>}>
              Repositorio
            </Button>
          </a>
          <a href='https://videogames-pi.vercel.app'>
            <Button variant="contained" startIcon={<ForwardIcon/>}>
              Sitio Web
            </Button>
          </a>
        </div>
        <ImageCarousel images={videogames}/>
        </div>
        </CardContent></Card>
        <Card><CardContent>
        <div className='proyect_div'>
        <img src={require('../img/se_landing.png')} alt="ServiExpressApp"/>
        <div className='proyect_detail'>
          <h2>ServiExpress</h2>
          <p>Proyecto final grupal para el bootcamp Henry.
          <br/> Esta plataforma permite a los usuarios ofrecer y contratar servicios, incluyendo: 
          </p>
          <ul>
            <li>Filtrar los servicios por categoria, precio y ubicacion,</li>
            <li>Buscarlos por nombre,</li>
            <li>Registrarse y loguearse como usuario</li>
            <li>Publicar y modificar servicios,</li>
            <li>Contratar servicios y pagarlos mediante tarjeta o Mercado Pago</li>
            <li>Chatear con otros usuarios</li>
            <li>Comunicarse con soporte de usuario</li>
          </ul>
          <a href='https://github.com/camiFK/ProyectoGrupal'>
            <Button variant="contained" startIcon={<GitHubIcon/>}>
              Repositorio
            </Button>
          </a>
          <a href='https://serviexpress-client.vercel.app/'>
            <Button variant="contained" startIcon={<ForwardIcon/>}>
              Sitio Web
            </Button>
          </a>
        </div>
        <ImageCarousel images={serviexpress}/>
        </div>
        </CardContent></Card>
      </div>
    </React.Fragment>
  );
}