import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/index";
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

  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/home" render={() => <Home />} />

              <Route exact path="/contact" render={() => <ContactPage />} />
            </Switch>
          )}
        />
      </Router>
    </React.Fragment>
  );
}

export default App;
