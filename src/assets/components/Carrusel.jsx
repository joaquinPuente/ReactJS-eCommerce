import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import SlideUrbanas from '../../../public/images/slideUrbanas.jpg'
import Slide1 from '../../../public/images/slide2.jpg'
import SlideNike from '../../../public/images/slideNike Dunk High Varsity Maize.jpg'
import { Link } from 'react-router-dom'


const Carrusel = () => {
  return (
    <div className='carruselContainer'>
    <Carousel className='w-50'>
      
      <Carousel.Item>   
        <img
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
        />
        <Link to="/productos">
        <Carousel.Caption>
           <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item> 
      
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideUrbanas}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideNike}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carrusel