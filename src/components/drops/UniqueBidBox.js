import React, { useRef, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import classnames from "classnames";

import { bidTransaction, tx } from "./transactions";
import get from "lodash.get";
import StatusModule from "./StatusModule";

const UniqueBidBox = ({ drop, marketplaceAccount, winning, ended }) => {
  const form = useRef(null);
  const [status, setStatus] = useState(null);
  const [writtenStatus, setWrittenStatus] = useState(null);
  const handleSubmit = async (e) => {
    if (ended) return false;
    e.preventDefault();
    setStatus(null);
    setWrittenStatus(null);
    const { bid } = form.current;
    if (!bid.value) {
      return setWrittenStatus("Please place a bid");
    }
    const newBid = parseFloat(bid.value);
    if (newBid < parseFloat(drop.uniqueStatus.minNextBid))
      return setWrittenStatus(
        `Minimum next bid must be at least ${parseFloat(
          drop.uniqueStatus.minNextBid
        ).toFixed(2)}`
      );
    try {
      await tx(
        [
          fcl.transaction(bidTransaction),
          fcl.args([
            fcl.arg(marketplaceAccount, t.Address),
            fcl.arg(parseInt(drop.dropId, 10), t.UInt64),
            fcl.arg(drop.uniqueStatus.id, t.UInt64),
            fcl.arg(newBid.toFixed(1).toString(), t.UFix64),
          ]),
          fcl.proposer(fcl.currentUser().authorization),
          fcl.payer(fcl.currentUser().authorization),
          fcl.authorizations([fcl.currentUser().authorization]),
          fcl.limit(9999),
        ],
        {
          onStart() {
            form.current.reset();
            setStatus({ msg: "Bid processing" });
          },
          async onSuccess(foo) {
            setStatus({ msg: "Almost there!" });
          },
          onSubmission() {
            setStatus({ msg: "Submitting to Server" });
          },
          async onComplete(status) {
            if (!status) {
              return setStatus({
                msg: "You have cancelled the bid",
                allowClose: true,
              });
            }
            setStatus({ msg: "Bid Succesfully Submitted", allowClose: true });
          },
          async onError(error) {
            if (error) {
              const { message } = error;
              if (message === "Declined: User rejected signature") {
                return setStatus({
                  msg: "You have rejected the bid",
                  allowClose: true,
                });
              } else {
                return setStatus({
                  msg: "Your bid exceeds your current Flow balance",
                  allowClose: true,
                });
              }
            }
            setStatus({
              msg: "There was an error with your bid",
              allowClose: true,
            });
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {status ? (
        <StatusModule status={status} close={() => setStatus(null)} />
      ) : (
        ""
      )}
      <div
        className={classnames(
          "bg-cream-500 text-center p-8 relative w-full rounded-lg flex flex-col sm:h-120 transform",
          {
            "md:scale-110": winning && ended,
            "md:scale-90": !winning && ended,
            "opacity-60": !winning && ended,
          }
        )}
      >
        {winning ? (
          <div
            className={classnames(
              "absolute top-0 transform -translate-y-full left-1/2 -translate-x-1/2 w-10/12 text-lightGrey py-1 text-sm font-bold rounded-t",
              {
                "bg-black-500": !ended,
                "bg-green-500": ended,
              }
            )}
          >
            {ended ? "Winner" : `Current Winning Bid`}
          </div>
        ) : (
          ""
        )}
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
            className={classnames(
              "relative w-full uppercase flex flex-col sm:block",
              {
                "pointer-events-none": ended,
              }
            )}
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
            {writtenStatus}
          </span>
        </div>
      </div>
    </>
  );
};

export default UniqueBidBox;
