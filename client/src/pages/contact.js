import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <React.Fragment>
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
