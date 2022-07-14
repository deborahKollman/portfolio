import * as React from 'react';
import { Container} from '@mui/material';
import './styles/About.scss';

export default function About() {
  return (
    <React.Fragment>
      <Container className='about'>
        <h1>Hola! Soy Deborah</h1>
        <h2>Full Stack Web Developer</h2>
        <h4>Soy una persona apasionada por la programacion, con mas de 800 horas de estudio intensivo y experiencia en proyectos web.</h4>
      </Container>
    </React.Fragment>
  );
}