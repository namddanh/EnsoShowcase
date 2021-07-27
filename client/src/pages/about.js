import React, { useEffect } from "react";
import About from "./../components/About";
import Footer from "../components/Footer";

const AboutPage = ({ title, imageDetails }) => {
  useEffect(() => {
    document.title = title;
  });

  const imageDetails1 = { ...imageDetails };

  return (
    <React.Fragment>
      <About imageDetails={imageDetails1} />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default AboutPage;
