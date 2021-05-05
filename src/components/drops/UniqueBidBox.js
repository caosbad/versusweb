import React, { useRef, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import classnames from "classnames";
import { includes, get } from "lodash";
import { Link } from "gatsby";

import { bidTransaction, tx } from "./transactions";
import StatusModule from "./StatusModule";
import IndDropTimer from "./IndDropTimer";

const UniqueBidBox = ({
  drop,
  marketplaceAccount,
  winning,
  ended,
  hasntStarted,
  user,
  timeRemaining,
}) => {
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
            setStatus({
              msg: "Bid processing",
              subtext: "Please wait while we submit the bid to the server.",
            });
          },
          onSubmission() {
            setStatus({
              msg: "Submitting to Server",
              subtext: "Please wait while we submit the bid to the server.",
            });
          },
          async onSuccess(status) {
            setStatus({
              msg: "Bid Successfully Submitted",
              subtext: "Your bid was successfully submitted.",
              allowClose: true,
            });
            const event = document.createEvent("Event");
            event.initEvent("bid", true, true);
            document.dispatchEvent(event);
          },
          async onError(error) {
            console.log(error);
            if (error) {
              const { message } = error;
              if (includes(error, "larger or equal")) {
                return setStatus({
                  msg: "Bid unsuccessful",
                  subtext:
                    "Somebody has probably outbid you while you placed your bid. Try again.",
                  allowClose: true,
                });
              } else if (includes(error, "balance of the")) {
                return setStatus({
                  msg: "Bid unsuccessful",
                  subtext: "You do not have enough Flow to make this bid",
                  allowClose: true,
                });
              } else if (message === "Declined: User rejected signature") {
                return setStatus({
                  msg: "Bid unsuccessful",
                  subtext: "You have rejected the bid",
                  allowClose: true,
                });
              } else if (includes(error, "invalid argument at index 3")) {
                return setStatus({
                  msg: "Bid unsuccessful",
                  subtext: "This bid exceeds our maximum bid",
                  allowClose: true,
                });
              } else {
                return setStatus({
                  msg: "Bid unsuccessful",
                  subtext: `Unexpected error occured: ${error}`,
                  allowClose: true,
                });
              }
            }
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
            "opacity-60": !winning && ended,
          }
        )}
      >
        {winning || drop.winning === "TIE" ? (
          <div
            className={classnames(
              "absolute top-0 transform -translate-y-full left-1/2 -translate-x-1/2 w-10/12 text-lightGrey py-1 text-sm font-bold rounded-t",
              {
                "bg-black-500": !ended,
                "bg-green-500": ended,
                "bg-yellow": !ended && drop.winning === "TIE",
              }
            )}
          >
            {ended
              ? "Winner"
              : drop.winning === "TIE"
              ? "Tied"
              : `Current Winning Bid`}
          </div>
        ) : (
          ""
        )}
        <div className="flex-1">
          <div className="mb-6">
            <span className="text-xl font-light text-mediumGrey">1/1</span>
            <h3 className="text-2xl font-bold">Own the Unique</h3>
            <p className="mt-2 text-transparent">-</p>
          </div>
          <div className="mt-8">
            <p className="text-xl text-mediumGrey opacity-60">current bid:</p>
            <p className="text-3xl font-bold">
              F{parseFloat(get(drop, "uniqueStatus.price")).toFixed(2)}
            </p>
          </div>
          {get(user, "addr") === get(drop, "uniqueStatus.leader") &&
          get(drop, "uniqueStatus.leader") ? (
            <p className="mt-4 text-2xl font-bold">
              You are the highest bidder
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          className={classnames("mt-12 sm:mt-0 mb-2", {
            hidden: hasntStarted,
          })}
        >
          {ended ? (
            <p>
              Highest bid by{" "}
              <Link
                to={`/profile/${get(drop, "uniqueStatus.leader")}`}
                className="underline"
              >
                {get(drop, "uniqueStatus.leader")}
              </Link>
            </p>
          ) : (
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
                className={classnames(
                  "placeholder-black-200 w-full bg-white text-black-500 font-semibold rounded-full border-none px-8 py-3 outline-none",
                  {
                    "opacity-80": ended,
                  }
                )}
                step="0.1"
              />
              <input
                type="submit"
                className="standard-button small-button mt-2 sm:mt-0 sm:absolute right-0 h-full px-6"
                value="Place Bid"
              />
              <span className="w-full left-0 absolute top-full mt-2 text-center text-xs sm:text-base normal-case">
                {writtenStatus}
              </span>
            </form>
          )}
        </div>
      </div>
      {timeRemaining > 0 ? <IndDropTimer timeRemaining={timeRemaining} /> : ""}
    </>
  );
};

export default UniqueBidBox;
