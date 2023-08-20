import React from "react";
import {Container, Row,Col } from "react-bootstrap";


export default function demo() {
  return (
   <>
     <section className="px-5">
     <Container fluid>
       <Row>
         <Col lg={4}></Col>
         <Col lg={4}></Col>
         <Col lg={4}></Col>
       </Row>
     </Container>
     </section>
     
   </>
  );
}


 