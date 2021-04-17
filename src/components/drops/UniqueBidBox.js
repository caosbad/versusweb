import React, { useRef, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

import { bidTransaction, tx } from "./transactions";
import get from "lodash.get";

const UniqueBidBox = ({ drop, marketplaceAccount }) => {
  const form = useRef(null);
  const [status, setStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { bid } = form.current;
    const newBid = parseFloat(bid.value);
    if (newBid < parseFloat(drop.uniqueStatus.minNextBid))
      return setStatus(
        `Minimum next bid must be at least ${parseFloat(
          drop.uniqueStatus.minNextBid
        ).toFixed(2)}`
      );
    console.log(
      parseInt(bid.value),
      parseInt(drop.dropId, 10),
      parseInt(drop.uniqueStatus.edition, 10)
    );
    await tx(
      [
        fcl.transaction(bidTransaction),
        fcl.args([
          fcl.arg(marketplaceAccount, t.Address),
          fcl.arg(parseInt(drop.dropId, 10), t.UInt64),
          fcl.arg(drop.uniqueStatus.edition, t.UInt64),
          fcl.arg(bid.value, t.UFix64),
        ]),
        fcl.proposer(fcl.currentUser().authorization),
        fcl.payer(fcl.currentUser().authorization),
        fcl.authorizations([fcl.currentUser().authorization]),
        fcl.limit(1000),
      ],
      {
        onStart() {
          setStatus("Transaction received");
        },
        async onSuccess(foo) {
          setStatus("Transaction success");
          // handleBidTransaction(foo);
        },
        onSubmission() {
          setStatus("Transaction submitted");
        },
        async onComplete() {
          setStatus("");
        },
        async onError(error) {
          setStatus("Transaction Error");
        },
      }
    );
  };
  return (
    <div className="bg-cream-500 text-center p-8 relative w-full rounded-lg flex flex-col sm:h-120">
      <div className="absolute top-0 transform -translate-y-full left-1/2 -translate-x-1/2 w-10/12 bg-black-500 text-lightGrey py-1 text-sm font-bold rounded-t">
        Current Winning Bid
      </div>
      <div className="flex-1">
        <div className="mb-6">
          <span className="text-xl font-light text-mediumGrey">1/1</span>
          <h3 className="text-2xl font-bold">Own the Unique</h3>
          <p className="mt-2">+ Physical artwork</p>
          <span className="text-mediumGrey text-sm">
            Winner recieves a unique 1/1 NFT <br /> and the physical painting
          </span>
        </div>
        <div className="mt-8">
          <p className="text-xl text-mediumGrey opacity-60">current bid:</p>
          <p className="text-3xl font-bold">
            F{get(drop, "uniqueStatus.price")}
          </p>
        </div>
      </div>
      <div className="mt-12 sm:mt-0 relative mb-2">
        <form
          className="relative w-full uppercase flex flex-col sm:block"
          onSubmit={handleSubmit}
          ref={form}
        >
          <input
            type="number"
            placeholder="Enter Bid"
            name="bid"
            className="placeholder-black-200 w-full bg-white text-black-500 font-semibold rounded-full border-none px-8 py-3 outline-none"
          />
          <input
            type="submit"
            className="standard-button small-button mt-2 sm:mt-0 sm:absolute right-0 h-full px-6"
            value="Place Bid"
          />
        </form>
        <span className="w-full left-0 absolute top-full mt-2 text-center">
          {status}
        </span>
      </div>
    </div>
  );
};

export default UniqueBidBox;
