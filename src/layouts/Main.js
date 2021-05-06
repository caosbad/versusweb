import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import { Helmet } from "react-helmet";
import * as t from "@onflow/types";

import "../config";
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";
import icon from "../images/icon.png";
import versusSocial from "../images/versussocial.png";
import { fetchOneUser } from "../components/artist/transactions";
import { useError } from "react-use";

const Main = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  const [balance, setBalance] = useState(0);
  useEffect(() => fcl.currentUser().subscribe(setUser), []);
  useEffect(() => {
    async function getArt() {
      const response = await fcl.send([
        fcl.script(fetchOneUser),
        fcl.args([fcl.arg(user.addr, t.Address)]),
      ]);
      const balance = await fcl.decode(response);
      setBalance(parseFloat(balance).toFixed(2));
    }
    if (user.addr) getArt();
  }, [user.addr]);
  return (
    <div id="main">
      <Helmet titleTemplate="%s | Versus" defaultTitle="Versus">
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
        <title>Versus - Better for Art</title>
        <meta name="title" content="Versus - Better for Art" />
        <meta
          name="description"
          content="Versus is a novel NFT art marketplace that works to empower the artist and the collector."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://versus-flow.art/" />
        <meta property="og:title" content="Versus - Better for Art" />
        <meta
          property="og:description"
          content="Versus is a novel NFT art marketplace that works to empower the artist and the collector."
        />
        <meta property="og:image" content={versusSocial} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://versus-flow.art/" />
        <meta property="twitter:title" content="Versus - Better for Art" />
        <meta
          property="twitter:description"
          content="Versus is a novel NFT art marketplace that works to empower the artist and the collector."
        />
        <meta property="twitter:image" content={versusSocial} />
      </Helmet>
      <Nav user={user} balance={balance} />
      {children(user)}
      <Footer />
    </div>
  );
};

export default Main;
