import React from "react";
import { getEvents } from "@onflow/sdk-build-get-events";
import { getLatestBlock } from "@onflow/sdk-build-get-latest-block";
import { send } from "@onflow/sdk-send";

import Logo from "../../assets/vslogo.svg";
import EditionBidBox from "./EditionBidBox";
import UniqueBidBox from "./UniqueBidBox";
import { useInterval } from "../general/utils";

const DropBids = ({ drop, marketplaceAccount }) => {
  // useInterval(async () => {
  // const latestBlock = await send([getLatestBlock(true)]);
  // if (!startBlock || !latestBlock) {
  //   return;
  // }
  // }, 1000);
  return (
    <div className="max-w-md mx-auto md:mx-0 md:max-w-none md:grid grid-cols-10 items-stretch pt-12 pb-3">
      <div className="col-span-4">
        <UniqueBidBox drop={drop} marketplaceAccount={marketplaceAccount} />
      </div>
      <div className="py-6 md:py-0 col-span-2 h-full flex items-center justify-center">
        <Logo className="h-12" />
      </div>
      <div className="col-span-4">
        <EditionBidBox drop={drop} marketplaceAccount={marketplaceAccount} />
      </div>
    </div>
  );
};

export default DropBids;
