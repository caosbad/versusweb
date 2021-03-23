import React from "react";
import DropBids from "./DropBids";
import DropDetails from "./DropDetails";

const DropModule = () => {
  return (
    <div className="py-12 bg-white">
      <div className="w-full mx-auto container">
        <DropDetails />
        <DropBids />
      </div>
    </div>
  );
};

export default DropModule;
