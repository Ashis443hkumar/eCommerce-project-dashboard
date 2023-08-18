import React from "react";
import "./style.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Head from "./components/common/Head"
import Hero from "./components/common/Hero"

import Header from "./components/common/Header"

import Home from "./components/pages/home/Home"



export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Home/>
      {/* <Hero/> */}
    </div>
  );
}
