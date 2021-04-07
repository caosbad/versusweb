import React from "react";
import { Link } from "gatsby";
import * as fcl from "@onflow/fcl";

import Logo from "../../assets/vslogo.svg";
import SearchBox from "../search/SearchBox";

const Nav = ({ user }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 items-center py-4 bg-cream-500 px-6 mx-auto relative z-30">
      <div className="flex items-start">
        <Link to="/" className="flex items-start">
          <Logo className="h-12" />
        </Link>
      </div>
      <div className="col-span-2 flex justify-center order-1 sm:order-none mt-4 sm:mt-0">
        <SearchBox />
      </div>
      <div className="flex justify-end">
        {user ? (
          <button
            className="standard-button small-button"
            role="button"
            aria-label="Connect Wallet"
            onClick={fcl.logIn}
          >
            Connect Wallet
          </button>
        ) : (
          "connected"
        )}
      </div>
    </div>
  );
};

export default Nav;
