import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { SliderData } from "../data/SliderData";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <React.Fragment>
      <HeroSection slides={SliderData} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
