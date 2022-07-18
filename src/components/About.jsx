import * as React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import { useSelector } from 'react-redux'
import './styles/About.scss';

export default function About() {

  const language = useSelector((state)=>state.language);

  return (
    <div className='about' id="back-to-top-anchor">
      {language==="ES"?(
      <div>
        <h1>Hola! Soy Deborah</h1>
        <h2>Desarrollador Web Full Stack</h2>
        <h5>
          Soy Desarrollador FullStack, certificada del bootcamp Henry, y estudiante de Ingenieria Informatica. <br/>
          Cuento con conocimientos de JavaScript, React, NodeJS y SQL, con mas de 800 horas de estudio intensivo y experiencia en proyectos web, tanto individuales como en equipo. <br/>
          Soy una persona apasionada por la programacion, responsable, autodidacta y flexible. <br/>
          Estoy constantemente ampliando mis conocimientos, y actualmente estoy en busqueda de un proyecto en el que pueda seguir expandiendome.
        </h5>
      </div>):(
      <div>
        <h1>Hi! I'm Deborah</h1>
        <h2>Full Stack Web Developer</h2>
        <h5>
          I'm a Full Stack Developer, certified in the Henry bootcamp, and Computer Engineering student. <br/>
          I count with knowledge in JavaScript, React, NodeJS and SQL, with more than 800 hours of intensive study and experience in web proyects, both individually and as part of a team. <br/>
          I'm passionate about programming, responsible, self-learning and flexible. <br/>
          I'm constantly expanding my knowledge, and I'm currently looking for a proyect in which i can keep growing.
        </h5>
      </div>
      )}
      <div className='info'>
        <a href='https://github.com/deborahKollman/'>
          <Button variant="contained" startIcon={<GitHubIcon/>}>
            {language==="ES"?("Repositorio"):("Repository")}
          </Button>
        </a>
        <a href='src\documents\Deborah Anahi Kollman - CV - Full Stack Web Developer.pdf' download>
          <Button variant="contained" startIcon={<ArticleIcon/>}>
            {language==="ES"?("Descargar curriculum"):("Download resume")}
          </Button>
        </a>
      </div>
    </div>
  );
}