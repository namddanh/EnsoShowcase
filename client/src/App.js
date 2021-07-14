import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./globalStyles";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HeroSection slides={SliderData} />
    </>
  );
}

export default App;
