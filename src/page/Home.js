import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;