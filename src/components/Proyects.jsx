import * as React from 'react';
// import { Container} from '@mui/material';
import ImageCarousel from './sub-components/ImageCarousel';
import './styles/Proyects.scss';

export default function About() {
  // '../../img/'
  const videogames = [{url:'../../img/vg_landing.png',alt:'landing'},{url:'../../img/vg_search.png',alt:'search'},{url:'../../img/vg_detail.png',alt:'detail'},{url:'../../img/vg_create.png',alt:'create'}];
  // const serviexpress = [];
  
  return (
    <React.Fragment>
      <div className='proyects' maxWidth='xl'>
        <h1>Proyectos</h1>
        <div className='proyect_div'>
          <h2>Videogames Individual Project</h2>
          <ImageCarousel images={videogames}/>
        </div>
      </div>
    </React.Fragment>
  );
}