import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { SliderData } from "../data/SliderData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HeroSection slides={SliderData} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
