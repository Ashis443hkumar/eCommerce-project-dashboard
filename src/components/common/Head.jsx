import React from "react";
import { Row } from "react-bootstrap";
import {Container, Row,Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import "./style.css"

function Head() {
  return (
   <>
     <Container fluid className="head py-3 px-5">
       <Row>
         <Col lg={3}>
           <img src="https://bazaar.ui-lib.com/assets/images/logo2.svg" alt=""/>
         </Col>
         <Col lg={7} className="">
           <div className="middle_input">
           <div>
              <input type="text" placeholder="Search" />
           </div>
           <div className="dd_allcategg">
            <Form.Select aria-label="Default select example">
              <option value="1">One gtr e5ty6 ry6y </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
           </div>
           </div>
         </Col>
         <Col lg={2} className="head_icons">
         <i class="fa-solid fa-user"></i>
         <i class="fa-solid fa-clipboard"></i>
         </Col>

       </Row>
     </Container>
   </>
  );
}

export default Head;