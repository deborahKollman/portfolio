import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../../img/vg_create.png';
import './Carousel.scss';

export default function ImageCarousel(props){
    console.log(props)
    return(
        <div className='carousel'>
        <Carousel>
            {props.images.map((elem, index)=>(
                <Carousel.Item key={index}>
                    <img src={image} alt={`${elem.alt}`} className='image'/>
                </Carousel.Item>
            ))}
        </Carousel>
        </div>
    )
}