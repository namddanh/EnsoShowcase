import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={ContactPage} exact />
        </Switch>
      </Router>
      {/* <Home /> */}
    </React.Fragment>
  );
}

export default App;
