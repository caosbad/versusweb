import React from "react";
import DropBids from "./DropBids";
import DropDetails from "./DropDetails";

const DropModule = ({ drop, marketplaceAccount, dropInfo }) => {
  return (
    <div className="py-12 bg-white pb-40">
      <div className="w-full mx-auto container max-w-screen-lg">
        <DropDetails drop={drop} dropInfo={dropInfo} />
        <DropBids drop={drop} marketplaceAccount={marketplaceAccount} />
      </div>
    </div>
  );
};

export default DropModule;
