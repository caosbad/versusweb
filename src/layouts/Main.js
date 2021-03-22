import React from "react";

import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";

const Main = ({ children }) => {
  return (
    <div id="main">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
