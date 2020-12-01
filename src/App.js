import React from "react";
import "./styles.css";

import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* /search */}
          <Route path="/search">
            <SearchPage />
          </Route>

          {/* / */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
