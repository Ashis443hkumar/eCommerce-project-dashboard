import React from "react";
import {Container, Row,Col } from "react-bootstrap";

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Hero() {
  return (
   <>

     <Container>
       <Row>
         <Col lg={6} className="pt-5">
           <h1  className="pt-5 mt-5">50% Off For Your First Shopping.</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss</p>
         </Col>
         <Col lg={6}>
           <img src="https://bazaar.ui-lib.com/assets/images/products/nike-black.png" alt=""/>
         </Col>

       </Row>
     </Container>


     {/* Flash Deals */}
     <section className="flash_deal">
     <Container fluid className="">
       <div className="ddcc">
         <h4> <i class="fa-solid fa-bolt"></i> Flash Deals</h4>
         <h5>View All</h5>
       </div>
       <Row>
         <Col lg={3}>
         <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Classic Rolex Watch</Card.Title>
            <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="price_flash_deals">
             <div className="dd">
              <span className="price1">$297.50</span>
              <span>$350.00</span>
             </div>
             <button><i class="fa-solid fa-plus"></i></button>
            </div>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={3}>
         <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Classic Rolex Watch</Card.Title>
            <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="price_flash_deals">
             <div className="dd">
              <span className="price1">$297.50</span>
              <span>$350.00</span>
             </div>
             <button><i class="fa-solid fa-plus"></i></button>
            </div>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={3}>
         <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Classic Rolex Watch</Card.Title>
            <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="price_flash_deals">
             <div className="dd">
              <span className="price1">$297.50</span>
              <span>$350.00</span>
             </div>
             <button><i class="fa-solid fa-plus"></i></button>
            </div>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={3}>
         <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Classic Rolex Watch</Card.Title>
            <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="price_flash_deals">
             <div className="dd">
              <span className="price1">$297.50</span>
              <span>$350.00</span>
             </div>
             <button><i class="fa-solid fa-plus"></i></button>
            </div>
          </Card.Body>
         </Card>
         </Col>
         



       </Row>
     </Container>
     </section>


     


   </>
  );
}

 