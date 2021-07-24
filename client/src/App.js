import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
//Components
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
//Styles
import GlobalStyles from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home title="HOME | Enso" />}
              />

              <Route
                exact
                path="/enso"
                render={() => <Home title="HOME | Enso" />}
              />

              <Route
                path="/about"
                render={() => (
                  <AboutPage imageDetails={imageDetails} title="ABOUT | Enso" />
                )}
              />
              {/* 
              <Route
                path="/about/us"
                render={() => <AboutPage title="ABOUT | Enso" />}
              /> */}

              <Route
                path="/contact"
                render={() => <ContactPage title="CONTACT | Enso" />}
              />
            </Switch>
          )}
        />
      </Router>
    </React.Fragment>
  );
}

export default App;
