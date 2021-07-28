import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import "../../styles/style.scss";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

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
                <Link to={`/about-transition`}>
                  <ProgressiveImage
                    src={require("../../images/AnneVo2.png").default}
                    placeholder={require("../../images/AnneVo2-compressed.jpg")}
                  >
                    {(src) => (
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        src={src}
                        alt="Anne Vo"
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div exit={{ opacity: 0 }} transition={transition}>
              <div className="title-short">ABOUT US</div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
