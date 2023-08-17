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


     {/* Top Categories */}
     <section className="flash_deal">
      <Container fluid className="">
       <div className="ddcc">
         <h4> <i class="fa-solid fa-bolt"></i> Top Categories</h4>
         <h5>View All</h5>
       </div>
       <Row>
         <Col lg={4} className="">
           <div className="edgrtegytr">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1080&q=75" className="w-100" alt=""/>
           </div>
         </Col>
         <Col lg={4}>
         <div className="edgrtegytr">

           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1080&q=75" className="w-100" alt=""/>
           </div>
         </Col>
         <Col lg={4}>
         <div className="edgrtegytr">
         <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=1080&q=75" className="w-100" alt=""/>
         </div>
         </Col>
         </Row>
         </Container>
       </section>

        {/* Top Ratings Featured Brands */}
       <section className="defdef_hjyh  py-5">
         <Container fluid>
          <Row>
          <Col lg={6}>
          <div className="ddffcc">
            <h4>Top Ratings </h4>
            <h6>View All</h6>
          </div>
         <Row className="hfhgfhh">
         <Col lg={3}>
         <div className="card_content_flash_deal_2">
          <div className="ddee">
          <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=384&q=75" />
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(10)</span>
           </div>
           <div className="ddddddd">
           <h6>Camera</h6>
           <h6>$3,300.00</h6>
          </div>
         </div>
       </Col>
       <Col lg={3}>
         <div className="card_content_flash_deal_2">
          <div className="ddee">
          <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=384&q=75" />
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(10)</span>
           </div>
           <div className="ddddddd">
           <h6>Camera</h6>
           <h6>$3,300.00</h6>
          </div>
         </div>
       </Col>
       <Col lg={3}>
         <div className="card_content_flash_deal_2">
          <div className="ddee">
          <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=384&q=75" />
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(10)</span>
           </div>
           <div className="ddddddd">
           <h6>Camera</h6>
           <h6>$3,300.00</h6>
          </div>
         </div>
       </Col>
       <Col lg={3}>
         <div className="card_content_flash_deal_2">
          <div className="ddee">
          <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=384&q=75" />
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>(10)</span>
           </div>
           <div className="ddddddd">
           <h6>Camera</h6>
           <h6>$3,300.00</h6>
          </div>
         </div>
       </Col>
       </Row>
       </Col>

         <Col lg={6}>
         <div className="ddffcc">
            <h4>Featured Brands </h4>
            <h6>View All</h6>
          </div>
          <Row>
           <Col lg={6}>
             <div className="deee">
               <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=1080&q=75"  alt=""/>
               <p>London Britches</p>
             </div>
           </Col>
           <Col lg={6}>
           <div className="deee">
              <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fjim%20and%20jiko.png&w=1080&q=75" alt=""/>
              <p>London Britches</p>
           </div>
           </Col>
         </Row>
         </Col>
       </Row>
     </Container>
     </section>


     {/* New Arrivals    */}
     <section className="bg-secondary abc_5 pb-5 ">
      <Container fluid className="">
         <div className="ddffcc pt-4 pb-3">
            <h4>New Arrivals</h4>
            <h6>View All</h6>
          </div>
       <Row className="py-2 bg-white">
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fbgwatch.png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(3).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(1).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(4).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
       </Row>
     </Container>
     </section>

     {/* Big Discounts */}
     <section className="bg-secondary abc_5 pb-5 ">
      <Container fluid className="">
         <div className="ddffcc pt-4 pb-3">
            <h4>Big Discount</h4>
            <h6>View All</h6>
          </div>
       <Row className="py-2 bg-white">
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fbgwatch.png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(3).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(1).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
         <Col lg={2} className="py-1 text-center">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(4).png&w=384&q=75" className="w-100 my-2" alt=""/>
           <h5>Sunglass</h5>
           <h>$150.00</h>
         </Col>
       </Row>
     </Container>
     </section>


    {/* tabs Cars */}
    <Tabs/>

    {/* Mobile Phones */}
    <Tabs/>

    <section className="mt-5 home_banner">
      <Container fluid>
        <Row>
          <Col lg={4}>
            <img className="w-100" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=640&q=75" alt=""/>
          </Col>
          <Col lg={8}>
            <img className="w-100"  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=828&q=75"  alt="" />
          </Col>
        </Row>
      </Container>
    </section>



    {/* tabs Optics / Watch */}
    <Tabs/>

    <section className="my-4">
     <Container>
       <div className="ddcc">
         <h4> <i class="fa-solid fa-bolt"></i>Categories</h4>
         <h5>View All</h5>
       </div>   
       <Row>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>

         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
       </Row>
       <Row className="mt-4">
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
         <Col lg={2} className="border px-0">
           <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=1080&q=75" style={{width:"60px", height:"60px"}} alt="" />
          <span>Automobile</span>
         </Col>
       </Row>
     </Container>
    </section>


   {/* More For You */}
   <section className="flash_deal">
      <Container fluid className="">
       <div className="ddcc">
         <h4><i class="fa-solid fa-bolt"></i>More For You</h4>
         <h5>View All</h5>
       </div>
       <Row>
         <Col lg={3}>
         <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F21.TarzT3.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F22.YamahaR15Black.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F23.YamahaR15Blue.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F24.Revel2020.png&w=640&q=75" />
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
        {/* 2nd row */}
       <Row className="mt-4">
         <Col lg={3}>
         <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F1.Siri2020.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F25.JacksonTB1.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F2.COSOR1.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F24.Revel2020.png&w=640&q=75" />
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
       {/* 3rd row */}
       <Row className="mt-4">
         <Col lg={3}>
         <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F21.TarzT3.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F22.YamahaR15Black.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F23.YamahaR15Blue.png&w=640&q=75" />
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
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F24.Revel2020.png&w=640&q=75" />
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

 