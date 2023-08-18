import React from "react";
import {Container, Row,Col } from "react-bootstrap";

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tabs from "./Tabs";


import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// import Data from "../../data/Data"
import CarBikeData from "../../data/CarBikeData"

export default function Hero() {
  return (
   <>

     <section>
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
     </section>


    

    

     


  

     


    {/* tabs Cars */}
    <Tabs/>

    {/* Mobile Phones */}
    <Tabs/>

   

    {/* tabs Optics / Watch */}
    <Tabs/>

  
  

    


   {/* More For You */}
  
    

     <section className="px-5 footer">
      <Container fluid>
       <Row>
         <Col lg={4}>
           <img src="https://bazaar.ui-lib.com/assets/images/logo.svg" alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
         </Col>
         <Col lg={2}>
           <h4>About Us</h4>
           <ul>
             <li>Careers</li>
             <li>Our Stores</li>
             <li>Our Cares</li>
             <li>Terms & Conditions</li>
             <li>Privacy Policy</li>
           </ul>
         </Col>
         <Col lg={3}>
           <h4>Customer Care</h4>
           <ul>
             <li>Help Center</li>
             <li>How to Buy</li>
             <li>Track Your Order</li>
             <li>Corporate & Bulk Purchasing</li>
             <li>Returns & Refunds</li>
           </ul>
         </Col>
         <Col lg={3}>
           <h4>Contact Us</h4>
           <p>70 Washington Square South, New York, NY 10012, United States</p>
           <span></span>
           <email> Email: uilib.help@gmail.com</email>
           <phone>Phone: +1 1123 456 780</phone>

         </Col>
       </Row>
     </Container>
     </section>

   </>
  );
}

 