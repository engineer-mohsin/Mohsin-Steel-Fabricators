import React from "react";
import Hero from "../components/Hero";
import Services from "./Services";
import Clients from "./Clients";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <About/>
      <Contact/>
    </>
  );
};

export default Home;
