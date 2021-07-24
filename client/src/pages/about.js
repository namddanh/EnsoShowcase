import React, { useEffect } from "react";
import About from "./../components/About";
import Footer from "../components/Footer";

const AboutPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <React.Fragment>
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
