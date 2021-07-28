import React, { useEffect } from "react";
import AboutTransition from "../components/AboutTransition";

const AboutPageTransition = ({ title, imageDetails }) => {
  useEffect(() => {
    document.title = title;
  });

  const imageDetails2 = { ...imageDetails };

  return (
    <React.Fragment>
      <AboutTransition imageDetails={imageDetails2} />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default AboutPageTransition;
