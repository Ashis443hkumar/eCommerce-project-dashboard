
import React from "react";
import {Container, Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Hero from "./Hero";
import {productNew} from "./Sdata";

import "./style.css"

export default function Furniture() {
  return (
   <>
   <Hero/>
     <section className="px-5 fourtune_section">
      <Container fluid>
       <Row>
         <Col lg={3} className="furniture_left p-4">
         <div className="left_menu4">
          <h4 className="top_tategories">Top Categories</h4>
          <ul>
            <li>Home</li>
            <li>Popular Products</li>
            <li>Trending Products</li>
            <li>All Products</li>
          </ul>
         </div>
         <div className="left_menu">
          <h4 className="top_tategories">Top Categories</h4>
          <ul>
            <li className="fourn_menu"><a href="">Chair </a> <i class="fa-solid fa-greater-than"></i> </li>
            <li className="fourn_menu"><a href="">Grapes </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Decors </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Onion </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Potato </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Wardrobe </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Dining </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Living </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Coffee Tea Table </a> <i class="fa-solid fa-greater-than"></i></li>
            <li className="fourn_menu"><a href="">Living Room Sets </a> <i class="fa-solid fa-greater-than"></i></li>
          </ul>
         </div>
         </Col>
         
         <Col lg={9} className="right_menu">
         <Row>
           <Col lg={7}>
             <div className="furniture_left_des">
               <div className="furntine_t_des">
                 <h6>Modern Furniture.</h6>
                 <h2>Big Sale</h2>
                 <h5>UP TO 50% OFF</h5>
                 <a href="">Shop Now</a>
               </div>
                <div>
                  <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(6).png"  alt=""/>
                </div>
             </div>
           </Col>
           <Col lg={5}>
           <div className="furniture_right_des">
               <div className="furntine_t_des">
                 <h4>Sofa Collection.</h4>
                 <h5>UP TO 50% OFF</h5>
                 <a href="">Shop Now</a>
               </div>
                <div className="fournt_right_img">
                <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(5).png" className="" alt=""/>
                </div>
             </div>
           </Col>
          </Row>

          {/* 2nd row  */}
         <Row className="fourniture_bottom_hero">
           <Col lg={7}>
             <div className="left_fouriture_des">
               <div className="furntine_t_des">
                 <h4>Winter Offer.</h4>
                 <h1>50% OFF</h1>
                <p>All Kinds of Fourniture  Items</p>
                 <a href="">Shop Now</a>
               </div>
                <div>
                  <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75"  alt=""/>
                </div>
             </div>
           </Col>

           <Col lg={5} className="fouth_right">
            <Row>
             <Col>
             <div className="right_fouriture_des">
               <div className="furntine_desc">
                 <h4>Modern & Comporfobale.</h4>
                 <h5>Chair Collections</h5>
                 <a href="">Shop Now</a>
               </div>
                <div className="fournt_right_img">
                <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(4).png" className="" alt=""/>
                </div>
             </div>
             </Col>
             <Col>
             <div className="right_fouriture_des mt-4">
               <div className="furntine_desc">
                 <h4>Modern & Comporfobale.</h4>
                 <h5>Chair Collections</h5>
                 <a href="">Shop Now</a>
               </div>
                <div className="fournt_right_img">
                <img src="https://bazaar.ui-lib.com/assets/images/Furniture%20Shop/Furniture%20(4).png" className="" alt=""/>
                </div>
             </div>
             </Col>
            </Row>
           </Col>
         </Row>
         </Col>

       </Row>
     </Container>
     </section>


     {/* secction 2 */}
     <section className="px-5 my-5 furntiure_products ">
      <Container fluid>
       <h4>Top New Product</h4>
       <p>Tall blind but were, been folks not the expand</p>
       <Row>
         {
           productNew.map((value, index) =>(
            <Col lg={4}>
            <Card className="products_furntiure">
            <Card.Img className="product_img" variant="top" src={value.img} />
            <Card.Body>
              <Card.Title>Study Gold Chair</Card.Title>
              <p className="special_offer">5% off</p>
               <div className="card_desc">
                <div className="prces_define">
                 <span className="price">$190.00</span>
                 <span className="offers_price">$200.00</span>
                </div>
                <Button variant="outline-secondary" className="addtocard" ><i class="fa-solid fa-plus"></i></Button> 
               </div>
            </Card.Body>
           </Card>
           </Col>
           ))
         }
        

      
       </Row>
     </Container>
     </section>
     
   </>
  );
}


 