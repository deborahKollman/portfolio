import * as React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import './styles/About.scss';

export default function About() {
  return (
    <div className='about' id="back-to-top-anchor">
      <h1>Hola! Soy Deborah</h1>
      <h2>Full Stack Web Developer</h2>
      <h5>
        Soy Desarrollador FullStack, certificada del bootcamp Henry, y estudiante de Ingenieria Informatica. <br/>
        Cuento con conocimientos de JavaScript, React, NodeJS y SQL, con mas de 800 horas de estudio intensivo y experiencia en proyectos web, tanto individuales como en equipo. <br/>
        Soy una persona apasionada por la programacion, responsable, autodidacta y flexible. <br/>
        Estoy constantemente ampliando mis conocimientos, y actualmente estoy en busqueda de un proyecto en el que pueda seguir expandiendome.
      </h5>
      <div className='info'>
        <a href='https://github.com/camiFK/ProyectoGrupal'>
          <Button variant="contained" startIcon={<GitHubIcon/>}>
            Repositorio
          </Button>
        </a>
        <a href='src\documents\Deborah Anahi Kollman - CV - Full Stack Web Developer.pdf' download>
          <Button variant="contained" startIcon={<ArticleIcon/>}>
            Descargar CV
          </Button>
        </a>
      </div>
    </div>
  );
}