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
            <span className="mr-1 sm:text-lg font-bold">{user.addr}</span>
            {/* todo: add in mainnet with env variable */}
            <a
              href={`https://flow-view-source.com/testnet/account/${user.addr}`}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 mr-2 sm:mr-4 cursor-pointer"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
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
