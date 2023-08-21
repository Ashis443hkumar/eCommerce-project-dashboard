
import React from "react";
import {Container, Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Hero from "./Hero";
import "./style.css"

export default function Furniture() {
  return (
   <>
   <Hero/>
     <section className="px-5 fourtune_section">
      <Container fluid>
       <Row>
         <Col lg={3} className="bg-white p-4">
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
         <Col lg={4}>
          <Card className="products_furntiure">
          <Card.Img className="product_img" variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(1).png&w=640&q=75" />
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
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
       </Row>
     </Container>
     </section>
     
     <section className="px-5 my-5">
      <Container fluid>
       <h4>Top New Product</h4>
       <p>Tall blind but were, been folks not the expand</p>
       <Row>
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
       </Row>
     </Container>
     </section>
     
     <section className="px-5 my-5">
      <Container fluid>
       <h4>Top New Product</h4>
       <p>Tall blind but were, been folks not the expand</p>
       <Row>
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
         <Col lg={4}>
          <Card>
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75" />
          <Card.Body>
            <Card.Title>Comfortable Sofa</Card.Title>
            <span>$190.00</span>
            <span>$200.00</span>
            <Button variant="primary">+</Button>
          </Card.Body>
         </Card>
         </Col>
       </Row>
     </Container>
     </section>
     
   </>
  );
}


 