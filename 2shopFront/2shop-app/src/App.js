import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import SwitchContainer from "./components/layout/SwitchContainer";
import Footer from "./components/layout/Footer";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="min-h-screen bg-light">
          <Navbar />
          <SwitchContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}
