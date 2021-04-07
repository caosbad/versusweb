import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";

import "../config";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";

const Main = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser().subscribe(setUser), []);
  return (
    <div id="main">
      <Nav user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
