import React from "react";
import {Container, Row,Col } from "react-bootstrap";
import Sdata from "../../../data/Sdata";
import {supportData} from "../../../data/DummayData";
import {CarBikeData} from "../../../data/DummayData";
import {abcd} from "../../../data/DummayData";
import {BigDiscount} from "../../../data/DummayData";
import {topFeature} from "../../../data/DummayData";
import {CategoriesSlide} from "../../../data/DummayData";

import Heading from "../../common/heading/Heading";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
     <>
        {/* Flash Deals */}
      <section className="flash_deal">
      <Container fluid className="">
       <Heading title="Flash Deals " itag="fa-solid fa-bolt" title2="View All" />
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
        <Heading title="Top Categories " itag="fa-solid fa-bolt" title2="View All" />
        <Row>
         {
           CategoriesSlide.map((value) =>(
            <Col lg={4} className="">
             <div className="edgrtegytr">
              <img src={value.img} className="w-100" alt=""/>
            </div>
           </Col>
           ))
         }
         </Row>
         </Container>
       </section>
     
       {/* Top Ratings Featured Brands */}
       <section className="defdef_hjyh  py-5">
        <Container fluid>
         <Row>
          <Col lg={6} md={6} sm={12}>
          <Heading title="Top Ratings dfgg " title2="View All" />
           <Row className="hfhgfhh">
           {
             topFeature.map((value) =>(
              <Col lg={3} md={6} sm={6}>
              <div className="card_content_flash_deal_2">
               <div className="ddee">
               <img src={value.img} />
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
                <h6>{value.price}</h6>
               </div>
              </div>
            </Col>
             ))
           }
         </Row>
        </Col>

         <Col lg={6} md={6} sm={12}>
          <Heading title="Featured Brands" title2="View All" />
          <Row>
           <Col lg={6} md={} sm={6}>
             <div className="deee">
               <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=1080&q=75"  alt=""/>
               <p>London Britches</p>
             </div>
           </Col>
           <Col lg={6} md={6} sm={6}>
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
      <section className="bg-secondary abc_5 pb-5  ">
      <Container fluid className="">
        <Heading title="New Arrivals " title2="View All" />
       <Row className="py-2 bg-white">
         {
           BigDiscount.map((value) =>(
            <Col lg={2} md={4} sm={4} xs={6} className="py-1 text-center">
            <img src={value.img} className="w-100 my-2" alt=""/>
            <h5>{value.title}</h5>
            <h>{value.price}</h>
          </Col>
           ))
         }
       </Row>
     </Container>
     </section>

     {/* Big Discounts */}
     <section className="bg-secondary abc_5 pb-5  ">
      <Container fluid className="">
        <Heading title="Big Discount 877" title2="View All" />
       <Row className="py-2 bg-white">
         {
           BigDiscount.map((value) =>(
            <Col lg={2} md={4} sm={4} xs={6} className="py-1 text-center">
            <img src={value.img} className="w-100 my-2" alt=""/>
            <h5>{value.title}</h5>
            <h>{value.price}</h>
          </Col>
           ))
         }
       </Row>
     </Container>
     </section>
      
      {/* home-banner */}
     <section className="mt-5 px-5 home_banner">
      <Container fluid>
        <Row>
          <Col lg={4} md={4} xs={4}>
            <img className="w-100" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=640&q=75" alt=""/>
          </Col>
          <Col lg={8} md={8} xs={8}>
            <img className="w-100"  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=828&q=75"  alt="" />
          </Col>
        </Row>
      </Container>
     </section>

      {/* sdsdd */}
     <section className="px-5 py-5 bg-secondary">
      <Container fluid>
      <Heading title="Categories 665" title2="View All" />
       <Row>
         {
           abcd.map((value, index)=>(
            <Col xs={6} sm={4} md={3} lg={2} xxl={2} className="mb-4" key={index.id}>
            <div className="bg-white">
                <img src={value.img} style={{width:"60px", height:"60px"}} alt="" />
                <span>{value.title}</span>
              </div>
            </Col>
           ))
         }
       </Row>  
     </Container>
    </section>

      {/* flash_deal */}
     <section className="flash_deal">
      <Container fluid className="">
      <Heading title="Categories" itag="fa-solid fa-bolt" title2="View All" />
       <Row>
         {
           CarBikeData.map((value, index) =>(
              <Col xs={12} sm={6} md={4} lg={3}>
              <Card className="card_content_flash_deal">
                <Card.Img variant="top" src={value.img} />
                <Card.Body>
                  <Card.Title> {value.title} </Card.Title>
                  <div className="rating">
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="price_flash_deals">
                   <div className="dd">
                    <span className="price1">{value.price}</span>
                    <span>{value.OfferPrice}</span>
                   </div>
                  <button><i class={value.icons}></i></button>
                  </div>
                </Card.Body>
              </Card>
             </Col>
           ))
         }
        </Row>
     </Container>
     </section>

       {/* website support  */}
     <section className="px-5 py-5 text-center">
      <Container fluid>
       <Row>
         {
           supportData.map((value, index) =>(
               <Col sm={6} md={6} lg={3}>
                <Card className=" py-3">
                <Card.Body>
                <div >
                  <i class={value.icons} style={{width:"50px",  height:"50px", background:"#eee", borderRadius:"50%", texAlign:"center", lineHeight:"50px", justifyContent:"center", alignItems: "center",}}></i>
                </div>
                <Card.Title className=" mt-3">{value.title}</Card.Title>
                <Card.Text className="p-4 pt-2">
                  {value.subtitle}
                </Card.Text>
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

 