import React from "react";
import {Container, Row,Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Heading from "../../../common/heading/Heading";


export default function Home2() {
  return (
     <>
      <section className="home2_hero px-5 ">
        <Container fluid>
       <Row>
         <Col lg={8}>
         <Carousel data-bs-theme="dark">
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-19.jpg&w=384&q=75"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-20.jpg&w=384&q=75"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
         </Carousel.Item>
          <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-18.jpg&w=384&q=75"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
         </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Col>
         <Col lg={2} className="left_hero">
           <Col>
              <img className="" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-17.jpg&w=384&q=75" alt=""/></Col>
           <Col>
              <img className="mt-2" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-16.jpg&w=384&q=75" alt=""/></Col>
          </Col>
        </Row>
       </Container>
       </section>

       <section className="mt-5 px-5 bg-white py-3"> 
         <Container fluid>
          <Row>
            <Col lg={3}>
              <div className="home_bbt d-flex justify-content-start align-items-center">
                 <i class="fa-solid fa-truck-fast mx-3"></i>
                 <div className="home_bbtdesc">
                   <h4>Fast Delivery</h4>
                   <h6>Start from $10</h6>
                 </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="home_bbt d-flex justify-content-start align-items-center">
              <i class="fa-solid fa-truck-fast mx-3"></i>
                 <div className="home_bbtdesc">
                   <h4>Fast Delivery</h4>
                   <h6>Start from $10</h6>
                 </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="home_bbt d-flex justify-content-start align-items-center">
              <i class="fa-solid fa-truck-fast mx-3"></i>
                 <div className="home_bbtdesc">
                   <h4>Fast Delivery</h4>
                   <h6>Start from $10</h6>
                 </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="home_bbt d-flex justify-content-start align-items-center">
              <i class="fa-solid fa-truck-fast mx-3"></i>
                 <div className="home_bbtdesc">
                   <h4>Fast Delivery</h4>
                   <h6>Start from $10</h6>
                 </div>
              </div>
            </Col>
          </Row>
         </Container>
       </section>


       <section className="px-5 my-4">
        <Container fluid>
        <Row>
          <Col lg={2}>
            <div className="dddc ">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=256&q=75" alt="" className="w-100" />
              <h4>Toys</h4>
            </div>
          </Col>
          <Col lg={2}>
            <div className="dddc">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=256&q=75" alt="" className="w-100" />
              <h4>Toys</h4>
            </div>
          </Col>
          <Col lg={2}>
            <div className="dddc">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=256&q=75" alt="" className="w-100" />
              <h4>Toys</h4>
            </div>
          </Col>
          <Col lg={2}>
            <div className="dddc">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=256&q=75" alt="" className="w-100" />
              <h4>Toys</h4>
            </div>
          </Col>
          <Col lg={2}>
            <div className="dddc">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=256&q=75" alt="" className="w-100" />
              <h4>Toys</h4>
            </div>
          </Col>
          <Col lg={2}>
            <div className="dddc">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=256&q=75" alt="" className="w-100" />
              <h4>Toys</h4>
            </div>
          </Col>
          
        </Row>
        </Container>
       </section>

       <section className="px-5 my-4">
        <Container fluid>
          <Heading title="Deals Of The Day" title2="More Products" />
          <Row>
            <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
          </Row>
        </Container>
      </section>


      <section className="px-5 my-3">
       <Container fluid>
        <Row>
          <Col lg={4}>
            <div className="ddc-4e ">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-18.jpg&w=384&q=75" alt=""/>
            </div>
          </Col>
          <Col lg={4}>
            <div className="ddc-4e">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-19.jpg&w=384&q=75" alt=""/>
            </div>
          </Col>
          <Col lg={4} className="">
            <div className="ddc-4e ">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-20.jpg&w=384&q=75" alt=""/>
            </div>
          </Col>
        </Row>
       </Container>
      </section>

      <section className="px-5 my-4 pt-5">
       <Container fluid>
       <Row>
         <Col lg={3} className="bg-white p-4">
           <h4>Electronic</h4>
           <ul>
             <li>Wireless Speaker</li>
             <li>Tablet</li>
             <li>Smartphone</li>
             <li>Laptop</li>
             <li>iMac</li>
             <li>Game Controller</li>
             <li>Drone</li>
             <li>HoAppleme</li>
           </ul>
         </Col>
         <Col lg={9}>
         <Row>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>

          </Row>
         </Col>
       </Row>
      </Container>
     </section>


     <section className="px-5">
        <Container fluid>
        <Row>
          <Col lg={6}>
            <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-21.jpg" className="w-100" alt=""/>
          </Col>
          <Col lg={6}>
            <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-22.jpg" className="w-100" alt=""/>
          </Col>
        </Row>
      </Container>
     </section>

     <section className="px-5 my-4">
       <Container fluid>
       <Row>
         <Col lg={3} className="bg-white p-4">
           <h4>Electronic</h4>
           <ul>
             <li>Wireless Speaker</li>
             <li>Tablet</li>
             <li>Smartphone</li>
             <li>Laptop</li>
             <li>iMac</li>
             <li>Game Controller</li>
             <li>Drone</li>
             <li>HoAppleme</li>
           </ul>
         </Col>
         <Col lg={9}>
         <Row>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>

          </Row>
         </Col>
       </Row>
      </Container>
     </section>

     <section className="px-5 my-5">
      <Container fluid>
       <Row className="d-flex justify-content-center align-items-cnter">
         <Col lg={4}>
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-20.jpg&w=384&q=75" alt=""/>
         </Col>
         <Col lg={6}>
           <h1>GIFT 50% OFF PERFECT STYLES</h1>
           <p>Only until the end of this week. Terms and conditions apply</p>
         </Col>
         <Col lg={2}>
           <button>Discover Now</button>
         </Col>
       </Row>
     </Container>
     </section>

     
     <section className="px-5 my-4">
       <Container fluid>
       <Row>
         <Col lg={3} className="bg-white p-4">
           <h4>Electronic</h4>
           <ul>
             <li>Wireless Speaker</li>
             <li>Tablet</li>
             <li>Smartphone</li>
             <li>Laptop</li>
             <li>iMac</li>
             <li>Game Controller</li>
             <li>Drone</li>
             <li>HoAppleme</li>
           </ul>
         </Col>
         <Col lg={9}>
         <Row>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={3} className="text-center">
            <Card>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
          </Row>
         </Col>
       </Row>
      </Container>
     </section>


     <section className="px-5 my-3">
     <Container fluid className="bg-white py-4" >
       <Row>
         <Col lg={2}>
           <img className="w-100" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt=""/>
         </Col>
         <Col lg={2}>
           <img className="w-100" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt=""/>
         </Col><Col lg={2}>
           <img className="w-100" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt=""/>
         </Col>
         <Col lg={2}>
           <img className="w-100" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt=""/>
         </Col>
         <Col lg={2}>
           <img className="w-100" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt=""/>
         </Col>
         <Col lg={2}>
           <img className="w-100" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt=""/>
         </Col>
         
         
       </Row>
     </Container>
     </section>
      
     <section className="px-5 my-4">
        <Container fluid>
          {/* <Heading title="Selected Products" title2="More Products" /> */}
          <div className="select_product_home2 d-flex justify-content-between align-aitems-center ">
            <div className="hed_2">
              <h4>Selected Products</h4>
              <p>All our new arrivals in a exclusive brand selection</p>
            </div>
            <div className="hed_3">
            <Button variant="outline-secondary">New Arrivals</Button>
            <Button variant="outline-secondary">Most Popular</Button>
            <Button variant="outline-secondary">Best Sellers</Button>
            <Button variant="outline-secondary"> View All</Button>

            </div>
          </div>
          <Row>
            <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
           <Col lg={} className="text-center">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75" />
            <Card.Body>
              <Card.Title>Silver High Neck Sweater</Card.Title>
              <h4>$210.00</h4>
              
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
           </Col>
          </Row>
        </Container>
      </section>


     
     </>
  );
}

 