import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

export default function ImageCarousel(props){
    return(
        <div className='carousel'>
        <Carousel>
            {props.images.map((elem, index)=>(
                <Carousel.Item key={index}>
                    <img src={`${elem.url}`} alt={`${elem.alt}`} className='image'/>
                </Carousel.Item>
            ))}
        </Carousel>
        </div>
    )
}