import React from "react";
import {Container, Row,Col } from "react-bootstrap";



function BasicExample() {
  return (
   <>
     <Container>
       <Row>
         <Col lg={4}></Col>
         <Col lg={4}></Col>
         <Col lg={4}></Col>


       </Row>
     </Container>
   </>
  );
}

export default BasicExample;