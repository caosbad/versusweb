import React from "react";
import moment from "moment";

import DropBids from "./DropBids";
import DropDetails from "./DropDetails";

const DropModule = ({ drop, marketplaceAccount, dropInfo, user, art }) => {
  const timeUntil = parseFloat(drop.startTime) - moment().unix();
  return (
    <div className="py-12 bg-white pb-40">
      <div className="w-full mx-auto container max-w-screen-lg">
        <DropDetails drop={drop} dropInfo={dropInfo} art={art} />
        {timeUntil <= 0 && (
          <DropBids
            drop={drop}
            marketplaceAccount={marketplaceAccount}
            user={user}
          />
        )}
      </div>
    </div>
  );
};

export default DropModule;
