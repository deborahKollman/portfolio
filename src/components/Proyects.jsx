import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import ForwardIcon from '@mui/icons-material/Forward';
import ImageCarousel from './sub-components/ImageCarousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';
import './styles/Proyects.scss';


export default function About() {
  const videogames = [{url:require('../img/vg_landing.png'),alt:'Landing page'},{url:require('../img/vg_search.png'),alt:'Search, filter, order'},{url:require('../img/vg_detail.png'),alt:'Videogame detail page'},{url:require('../img/vg_create.png'),alt:'Create videogame'}];
  const serviexpress = [{url:require('../img/se_landing.png'),alt:'Landing page'},{url:require('../img/se_home.png'),alt:'Homepage'},{url:require('../img/se_detail.png'),alt:'Publication page'},{url:require('../img/se_order.png'),alt:'Order page'}];
  
  const language = useSelector((state)=>state.language);
  const light_mode = useSelector((state)=>state.light_mode);
  const matches = useMediaQuery('(min-width:770px)');

  return (
    <React.Fragment>
      <div maxWidth='xl' className={`proyects ${light_mode?"light":"dark"}`} >
      <Toolbar  style={{backgroundColor:"transparent"}} id='proyects'/>
        {language==="ES"?(<h1 className={light_mode?"light":"dark"}>Proyectos</h1>):<h1 className={light_mode?"light":"dark"}>Proyects</h1>}
        <Card className={light_mode?"light":"dark"}><CardContent>
        <div className='proyect_div'>
        <div className='proyect_detail'>
          {language==="ES"?(<div>
          <h2 className={light_mode?"light":"dark"}>Videogames App</h2>
          <p className={light_mode?"light":"dark"}>Proyecto individual creado para el bootcamp Henry.
          <br/> Esta SPA (Single Page Application) permite visualizar videojuegos e interactuar con ellos, incluyendo:
          </p>
          <ul className={light_mode?"light":"dark"}>
            <li>Filtrarlos por genero y tipo (creado o preexistente),</li>
            <li>Ordenarlos por nombre o puntuacion,</li>
            <li>Buscarlos por nombre,</li>
            <li>Visualizar detalles de cada videojuego,</li>
            <li>Crear videojuegos para poder ser visualizados en la pagina.</li>
          </ul>
          </div>):(<div>
            <h2 className={light_mode?"light":"dark"}>Videogames App</h2>
          <p className={light_mode?"light":"dark"}>Individual project made for the Henry bootcamp.
          <br/> This SPA (Single Page Application) allows viewing videogames and interacting with them, including:
          </p>
          <ul className={light_mode?"light":"dark"}>
            <li>Filter by gender and type (created or preexisting),</li>
            <li>Order by name or rating,</li>
            <li>Search by name,</li>
            <li>Visualize details of each videogame,</li>
            <li>Create videogames to be seen in the page.</li>
          </ul>
          </div>)}
          <a href='https://github.com/deborahKollman/Videogames_PI'>
            <Button variant="contained" startIcon={<GitHubIcon/>}>
              {language==="ES"?("Repositorio"):("Repository")}
            </Button>
          </a>
          <a href='https://videogames-pi.vercel.app'>
            <Button variant="contained" startIcon={<ForwardIcon/>}>
              {language==="ES"?("Sitio Web"):("Web Site")}
            </Button>
          </a>
        </div>
        {matches?(
        <ImageCarousel images={videogames}/>):(
        <img src={require('../img/vg_landing.png')} alt="VideogamesApp" className="proyect_image"/>
        )}
        </div>
        </CardContent></Card>
        <Card className={light_mode?"light":"dark"}><CardContent>
        <div className='proyect_div'>
        <div className='proyect_detail'>
          {language==="ES"?(<div>
          <h2 className={light_mode?"light":"dark"}>ServiExpress</h2>
          <p className={light_mode?"light":"dark"}>Proyecto final grupal para el bootcamp Henry.
          <br/> Esta plataforma permite a los usuarios ofrecer y contratar servicios, incluyendo: 
          </p>
          <ul className={light_mode?"light":"dark"}>
            <li>Filtrar los servicios por categoria, precio y ubicacion,</li>
            <li>Buscarlos por nombre,</li>
            <li>Registrarse y loguearse como usuario,</li>
            <li>Publicar y modificar servicios,</li>
            <li>Contratar servicios y pagarlos mediante tarjeta o Mercado Pago,</li>
            <li>Chatear con otros usuarios</li>
            <li>Comunicarse con soporte de usuario</li>
          </ul>
          </div>):(<div>
            <h2 className={light_mode?"light":"dark"}>ServiExpress</h2>
          <p className={light_mode?"light":"dark"}>Final project made for the Henry bootcamp.
          <br/>This platform allows users to offer and hire services, including: 
          </p>
          <ul className={light_mode?"light":"dark"}>
            <li>Filter services by category, price and location,</li>
            <li>Search by name,</li>
            <li>Register and sign in as User,</li>
            <li>Publish and modify services,</li>
            <li>Hire services and pay for them using card or Mercado Pago,</li>
            <li>Chat with other users,</li>
            <li>Comunicating with user support</li>
          </ul>
          </div>)}
          <a href='https://github.com/camiFK/ProyectoGrupal'>
            <Button variant="contained" startIcon={<GitHubIcon/>}>
            {language==="ES"?("Repositorio"):("Repository")}            </Button>
          </a>
          <a href='https://serviexpress-client.vercel.app/'>
            <Button variant="contained" startIcon={<ForwardIcon/>}>
            {language==="ES"?("Sitio Web"):("Web Site")}            </Button>
          </a>
        </div>
        {matches?(
        <ImageCarousel images={serviexpress}/>):(
          <img src={require('../img/se_landing.png')} alt="ServiExpressApp" className="proyect_image"/>
        )}
        </div>
        </CardContent></Card>
      </div>
    </React.Fragment>
  );
}