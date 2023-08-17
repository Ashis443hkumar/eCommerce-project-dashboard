import React from "react";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tabs from "./Tabs";

function Tabs() {
  return (

    
  
  
    <section className="tabs_section"> 
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first"><img src="" alt=""/>Ferrari</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tesla </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Bmw">Bmw </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Toyota">Toyota </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Mini">Mini </Nav.Link>
            </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="Ford">Tesla </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
           <div className="ddffcc pb-2">
            <h4>Cars</h4>
            <h6>View All</h6>
           </div>
          <Tab.Content>
            <Tab.Pane eventKey="first">
          <Row>
          <Col lg={4}>
           <Card className="card_content_flash_deal">
            <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=640&q=75" />
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
           <Col lg={4}>
           <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=640&q=75" />
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
           <Col lg={4}>
           <Card className="card_content_flash_deal">
          <Card.Img variant="top" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F3.Tesla2015.png&w=640&q=75" />
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
         </Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="Bmw"> 
            <Row>
          <Col lg={4}>
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
           <Col lg={4}>
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
           <Col lg={4}>
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
         </Row></Tab.Pane>
            <Tab.Pane eventKey="Toyota">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="Mini"> <Row>
          <Col lg={4}>
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
           <Col lg={4}>
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
           <Col lg={4}>
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
         </Row></Tab.Pane>
            <Tab.Pane eventKey="Ford"> <Row>
          <Col lg={4}>
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
           <Col lg={4}>
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
           <Col lg={4}>
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
         </Row></Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </section>
  );
}

export default Tabs;