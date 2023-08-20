import React from "react";
import "./style.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Head from "./components/common/Head"
import Hero from "./components/common/Hero"

import Header from "./components/common/Header"

import Home from "./components/pages/home/Home"
import Home2 from "./components/pages/home/home2/Home2"




export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Home2/>
      <Home/>
      {/* <Hero/> */}
    </div>
  );
}
