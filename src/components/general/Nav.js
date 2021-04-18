import React from "react";
import { Link } from "gatsby";
import * as fcl from "@onflow/fcl";
import { get } from "lodash";

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
      <div className="col-span-2 flex justify-center order-1 sm:order-none mt-4 sm:mt-0"></div>
      <div className="flex justify-end">
        {!user.loggedIn ? (
          <button
            className="standard-button small-button"
            role="button"
            aria-label="Connect Wallet"
            onClick={fcl.authenticate}
          >
            Connect Wallet
          </button>
        ) : (
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 sm:text-lg font-bold">
              {user.addr}
            </span>
            <button
              className="standard-button small-button"
              role="button"
              aria-label="Disconnect Wallet"
              onClick={fcl.unauthenticate}
            >
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
