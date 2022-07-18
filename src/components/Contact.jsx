import * as React from 'react';
import { useSelector } from 'react-redux';
import './styles/Contact.scss';

export default function About() {
  
  const language = useSelector((state)=>state.language)

  return (
    <div className='contact' id='contact'>
        {language==="ES"?(<h1>Contacto</h1>):(<h1>Contact</h1>)}
        <div className='icons'>
            <a href='https://www.linkedin.com/in/deborah-anahi-kollman/'><img src={require('.././img/linkedin_icon.png')} alt='linkedin'/></a>
            <a href='mailto:deborahkollman@gmail.com'><img src={require('.././img/gmail_icon.png')} alt='gmail'/></a>
            <a href='https://api.WhatsApp.com/send?phone=542235681129'><img src={require('.././img/whatsapp_icon.png')} alt='whatsapp'/></a>
        </div>
    </div>
  );
}