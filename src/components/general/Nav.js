import React from "react";
import { Link } from "gatsby";

import Logo from "../../assets/vslogo.svg";
import SearchBox from "../search/SearchBox";

const Nav = () => {
  return (
    <div className="grid grid-cols-4 items-center py-4 bg-cream-500 px-6 mx-auto relative z-30">
      <div className="flex items-start">
        <Link to="/" className="flex items-start">
          <Logo className="h-12" />
        </Link>
      </div>
      <div className="col-span-2 flex justify-center">
        <SearchBox />
      </div>
      <div className="flex justify-end">
        <button
          className="standard-button small-button"
          role="button"
          aria-label="Connect Wallet"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Nav;
