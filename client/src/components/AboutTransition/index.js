import React, { useState, useEffect } from "react";
import ImageOne from "../../images/ENSO-Group2.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { SliderData } from "./../../data/SliderData";
import "../../styles/style.scss";

const transition = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const AboutTransition = ({ imageDetails }) => {
  // window size hook for size.width
  const size = useWindowSize();

  // scrollyprogress for image pop and fade
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  // can scroll on animation complete
  const [canScroll, setCanScroll] = useState(false);
  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div className="model">
              <motion.span variants={firstName} className="first">
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>b</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>t</motion.span>
              </motion.span>
              <motion.span variants={lastName} className="last">
                <motion.span variants={letter}>U</motion.span>
                <motion.span variants={letter}>s</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 600 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <div className="frame-single">
                  <motion.img
                    style={{ scale: scale, opacity: opacity }}
                    initial={{ scale: 1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1125 : -600,
                    }}
                    src={require("../../images/AnneVo2.png").default}
                    alt="an image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
    // <div className="container">
    //   <div className="bottom">
    //     <div className="introduction">
    //       <div className="title">
    //         <h1>ABOUT US</h1>
    //       </div>
    //       <div className="flex-container">
    //         <div className="item">
    //           <img className="img" src={ImageOne} alt="" />
    //         </div>
    //         <div className="item">
    //           <h1>
    //             WHERE <br />
    //             CREATIVITY <br />
    //             MEETS <br />
    //             COMMUNITY
    //           </h1>
    //           <p>
    //             ENSO is founded by four women who are passionate about the
    //             creative industries and the actualization in lack of safe spaces
    //             for emerging Asian creatives.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="Instagram"></div>
    //   </div>
    // </div>
  );
};

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default AboutTransition;
