import React from "react";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Script from "./components/pages/Script";
import Youtube from "./components/pages/Youtube";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import ReferDetail from './components/basics/ReferDetail';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/reference" exact component={Reference} />
      <Route path="/script" exact component={Script} />
      <Route path="/youtube" exact component={Youtube} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/reference-detail" exact component={ReferDetail} />
    </Router>
  );
}

export default App;