import React from "react";
import "./style.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Head from "./components/common/Head"
import Hero from "./components/common/Hero"

import Header from "./components/common/Header"

import Home from "./components/pages/home/Home"
import Home2 from "./components/pages/home/home2/Home2"
import Furniture from "./components/pages/home/home3/Furniture"



export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Furniture/>
      <Home2/>
      <Home/>
      {/* <Hero/> */}
    </div>
  );
}
