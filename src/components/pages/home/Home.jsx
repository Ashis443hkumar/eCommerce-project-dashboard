import React from "react";
import {Container, Row,Col } from "react-bootstrap";
import Sdata from "../../../data/Sdata";
import {supportData} from "../../../data/DummayData";
import {CarBikeData} from "../../../data/DummayData";
import {abcd} from "../../../data/DummayData";



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
   <>
   <section className="my-4 px-5 py-5 bg-secondary">
     <Container fluid>
       <div className="ddcc">
         <h4> <i class="fa-solid fa-bolt"></i>Categories</h4>
         <h5>View All</h5>
       </div>   
       <Row>
         {
           abcd.map((value, index)=>{
             return (
               <>
                <Col lg={2} className="mb-4" key={index.id}>
                <div className="bg-white">
                    <img src={value.img} style={{width:"60px", height:"60px"}} alt="" />
                    <span>{value.title}</span>
                  </div>
                </Col>
               </>
             )
           })
         }
         
       </Row>  
     </Container>
    </section>

   <Sdata/>
   <section className="flash_deal">
      <Container fluid className="">
       <div className="ddcc">
         <h4><i class="fa-solid fa-bolt"></i>More For You</h4>
         <h5>View All</h5>
       </div>
       <Row>
         {
           CarBikeData.map((value, index) =>{
             return ( 
              <>
              <Col lg={3}>
              <Card className="card_content_flash_deal">
                <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F21.TarzT3.png&w=640&q=75" />
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
                    <span className="price1">$297.50</span>
                    <span>$350.00</span>
                  </div>
                  <button><i class="fa-solid fa-plus"></i></button>
                  </div>
                </Card.Body>
              </Card>
              </Col>
            </>
             )
           })
         }
        </Row>
     </Container>
     </section>



   <section className="px-5 py-5 text-center">
      <Container fluid>
       <Row>
         {
           supportData.map((value, index) =>{
             return(
               <>
               <Col lg={}>
                <Card style={{ width: '18rem' }} className=" py-3">
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
               
               </>
             )
           })
         }
       </Row>
     </Container>
     </section>


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

 