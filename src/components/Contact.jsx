import * as React from 'react';
import './styles/Contact.scss';

export default function About() {
  return (
    <div className='contact' id='contact'>
        <h1>Contacto</h1>
        <div className='icons'>
            <a href='https://github.com/deborahKollman'><img src={require('.././img/github_icon.png')} alt='github'/></a>
            <a href='https://linkedin/in/deborah-anahi-kollman'><img src={require('.././img/linkedin_icon.png')} alt='linkedin'/></a>
            <a href='mailto:deborahkollman@gmail.com'><img src={require('.././img/gmail_icon.png')} alt='gmail'/></a>
            <img src={require('.././img/whatsapp_icon.png')} alt='whatsapp'/>
        </div>
    </div>
  );
}