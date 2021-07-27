import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import "./style.scss";

const About = ({ imageDetails }) => {
  return (
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              style={{ width: imageDetails.width, height: imageDetails.height }}
            >
              <div className="frame">
                <Link to={`/about/1`}>
                  <ProgressiveImage
                    src={require("../../images/AnneVo2.png").default}
                    placeholder={require("../../images/AnneVo2-compressed.jpg")}
                  >
                    {(src) => <img src={src} alt="Anne Vo" />}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <div>
              <div className="title-short">ABOUT US</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
