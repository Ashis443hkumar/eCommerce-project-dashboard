
import React from "react";
import {Container, Row,Col } from "react-bootstrap";


export default function Furniture() {
  return (
   <>
     <section className="px-5 py-5 my-5">
     <Container fluid>
       <Row>
         <Col lg={3} className="bg-white p-4">
         <div className="left_menu4">
          <h4>Top Categories</h4>
          <ul>
            <li>Home</li>
            <li>Popular Products</li>
            <li>Trending Products</li>
            <li>All Products</li>
          </ul>
         </div>
         <div className="left_menu">
          <h4>Top Categories</h4>
          <ul>
            <li>Chair</li>
            <li>Grapes</li>
            <li>Decors</li>
            <li>Onion</li>
            <li>Potato</li>
            <li>Wardrobe</li>
            <li>Dining</li>
            <li>Living</li>
            <li>Coffee Tea Table</li>
            <li>Living Room Sets</li>
          </ul>
         </div>
         </Col>

         <Col lg={9}>
         <Row>
           <Col lg={8}>
             <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(6).png" className="w-100" alt=""/>
           </Col>
           <Col lg={4}>
             <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(5).png" className="w-100" alt=""/>
           </Col>
         </Row>
         <Row className="mt-4">
           <Col lg={8}>
             <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(6).png" className="w-100 h-25" alt=""/>
           </Col>
           <Col lg={4}>
             <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(5).png" className="w-100" alt=""/>
           </Col>
         </Row>
         </Col>

       </Row>
     </Container>
     </section>


     
     
   </>
  );
}


 