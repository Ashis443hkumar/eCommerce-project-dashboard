import React from "react";
import {Container, Row,Col } from "react-bootstrap";
import "./style.css"

export default function Heading({title, title2}) {
  return (
   <>
     <div className="ddd_heading">
       <div className="dd_lefthead">
         <h4>{title}</h4>
       </div>
       <div className="dd_lefthead">
         <h5>{title2}</h5>
       </div>
     </div>
     
   </>
  );
}

 