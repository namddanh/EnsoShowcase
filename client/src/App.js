import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./globalStyles";
import { SliderData } from "./data/SliderData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HeroSection slides={SliderData} />
    </>
  );
}

export default App;
