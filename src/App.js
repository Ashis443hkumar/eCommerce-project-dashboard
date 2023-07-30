import React from "react";
import "./style.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Head from "./components/common/Head"
import Hero from "./components/common/Hero"

import Header from "./components/common/Header"


export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Hero/>
    </div>
  );
}
