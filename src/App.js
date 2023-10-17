import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tours from "./components/Tours/Tours";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import PageScroller from "./components/PageScroller/PageScroller";

function App() {
  return (
    <div className="App">
      <Header />
      <PageScroller>
        <Hero />
        <About />
        <Tours />
        <Blog />
      </PageScroller>
      <Footer />
    </div>
  );
}

export default App;
