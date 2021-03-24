import React, { useEffect } from "react";
import * as fcl from "@onflow/fcl";

import "../config";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";

const Main = ({ children }) => {
  useEffect(() => {
    // console.log(fcl);
  }, []);
  return (
    <div id="main">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
