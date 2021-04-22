import React from "react";
import { get, reduce } from "lodash";
import moment from "moment";

import Logo from "../../assets/vslogo.svg";
import EditionBidBox from "./EditionBidBox";
import UniqueBidBox from "./UniqueBidBox";

const DropBids = ({ drop, marketplaceAccount, user }) => {
  console.log(drop);
  const uniqueTotal = parseFloat(get(drop, "uniqueStatus.price"));
  const editionTotal = reduce(
    drop.editionsStatuses,
    (sum, e) => sum + parseFloat(e.price),
    0
  );
  const ended = !drop.active && drop.winning !== "TIE";
  const hasntStarted = parseFloat(drop.startTime) - moment().unix() > 0;
  return (
    <div className="max-w-md mx-auto md:mx-0 md:max-w-none md:grid grid-cols-10 items-stretch pt-12 pb-3">
      <div className="col-span-4">
        <UniqueBidBox
          drop={drop}
          marketplaceAccount={marketplaceAccount}
          winning={uniqueTotal > editionTotal}
          ended={ended}
          hasntStarted={hasntStarted}
          user={user}
        />
      </div>
      <div className="py-6 md:py-0 col-span-2 h-full flex items-center justify-center">
        <Logo className="h-12" />
      </div>
      <div className="col-span-4">
        <EditionBidBox
          drop={drop}
          marketplaceAccount={marketplaceAccount}
          winning={editionTotal > uniqueTotal}
          ended={ended}
          hasntStarted={hasntStarted}
          user={user}
        />
      </div>
    </div>
  );
};

export default DropBids;
