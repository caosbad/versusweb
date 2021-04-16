import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import { Helmet } from "react-helmet";

import "../config";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";

const Main = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser().subscribe(setUser), []);
  return (
    <div id="main">
      <Helmet titleTemplate="%s | Versus" defaultTitle="Versus">
        <meta name="description" content="Better for art" />
      </Helmet>
      <Nav user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
