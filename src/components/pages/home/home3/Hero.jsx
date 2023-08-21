
import React,{useState} from "react";
import { Container, Row,Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


export default function Hero() {

  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20Shop%20Header.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption_caousel">
          <h5>A Beautiful Home</h5>
          <h1>Morden Furniture</h1>
          <p>Our innovative technology and creative expertise empower us to transform your vision
						into a tangible solution.</p>
          <br/>
          <button className="furn_comp_btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20Shop%20Header.jpg"
          alt="Second slide"
        />
         <Carousel.Caption className="caption_caousel">
          <h5>A Beautiful Home</h5>
          <h1>Morden Furniture</h1>
          <p>Our innovative technology and creative expertise empower us to transform your vision
						into a tangible solution.</p>
          <br/>
          <button className="furn_comp_btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}