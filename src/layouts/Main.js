import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import { Helmet } from "react-helmet";

import "../config";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";
import icon from "../images/icon.png";

const Main = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser().subscribe(setUser), []);
  return (
    <div id="main">
      <Helmet titleTemplate="%s | Versus" defaultTitle="Versus">
        <meta name="description" content="Better for art" />
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
      </Helmet>
      <Nav user={user} />
      {children(user)}
      <Footer />
    </div>
  );
};

export default Main;
