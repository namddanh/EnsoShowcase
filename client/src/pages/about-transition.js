import React from "react";
import ImageOne from "../../images/ENSO-Group2.jpg";

const AboutPageTransition = () => {
  return (
    <div className="container">
      <div className="bottom">
        <div className="introduction">
          <div className="title">
            <h1>ABOUT US</h1>
          </div>
          <div className="flex-container">
            <div className="item">
              <img className="img" src={ImageOne} alt="" />
            </div>
            <div className="item">
              <h1>
                WHERE <br />
                CREATIVITY <br />
                MEETS <br />
                COMMUNITY
              </h1>
              <p>
                ENSO is founded by four women who are passionate about the
                creative industries and the actualization in lack of safe spaces
                for emerging Asian creatives.
              </p>
            </div>
          </div>
        </div>
        <div className="Instagram"></div>
      </div>
    </div>
  );
};

export default AboutPageTransition;
