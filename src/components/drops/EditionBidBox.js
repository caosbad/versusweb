import React, { useRef, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { find, map, reduce, first, get } from "lodash";
import classnames from "classnames";

import { bidTransaction, tx } from "./transactions";
import StatusModule from "./StatusModule";

const EditionBidBox = ({
  drop,
  marketplaceAccount,
  winning,
  ended,
  hasntStarted,
  user,
}) => {
  const form = useRef(null);
  const [status, setStatus] = useState(null);
  const [writtenStatus, setWrittenStatus] = useState(null);
  const [activeEdition, setActiveEdition] = useState(1);
  const { editionsStatuses } = drop;
  const currentEdition =
    find(editionsStatuses, (e) => e.edition === activeEdition) ||
    find(editionsStatuses, (e) => e.edition === 0);
  const totalPrice = reduce(
    editionsStatuses,
    (sum, e) => sum + parseFloat(e.price),
    0
  );
  const totalEditions = reduce(editionsStatuses, (sum) => sum + 1, 0);
  const handleSubmit = async (e) => {
    if (ended) return false;
    e.preventDefault();
    setStatus(null);
    setWrittenStatus(null);
    const { bid } = form.current;
    const newBid = parseFloat(bid.value);
    if (newBid < parseFloat(currentEdition.minNextBid))
      return setWrittenStatus(
        `Minimum next bid must be at least ${parseFloat(
          currentEdition.minNextBid
        ).toFixed(2)}`
      );
    try {
      await tx(
        [
          fcl.transaction(bidTransaction),
          fcl.args([
            fcl.arg(marketplaceAccount, t.Address),
            fcl.arg(drop.dropId, t.UInt64),
            fcl.arg(currentEdition.id, t.UInt64),
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
            console.log(status);
            if (!status) {
              return setStatus({
                msg:
                  "You have either been outbid or your bid has been cancelled. Please try again.",
                allowClose: true,
              });
            }
            setStatus({ msg: "Bid Succesfully Submitted", allowClose: true });
            const event = document.createEvent("Event");
            event.initEvent("bid", true, true);
            document.dispatchEvent(event);
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
          "bg-cream-500 text-center p-8 relative w-full rounded-lg flex flex-col transform",
          {
            "md:scale-110": winning && ended,
            "md:scale-90": !winning && ended,
            "opacity-60": !winning && ended,
            "sm:h-120": !ended,
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
            <span className="text-xl font-light text-mediumGrey">
              ? / {totalEditions}
            </span>
            <h3 className="text-2xl font-bold">Own the Edition</h3>
            <p className="mt-2 text-transparent">-</p>
          </div>
          <div className="mt-8">
            <p className="text-xl text-mediumGrey opacity-60">
              current bid on #{activeEdition}:
            </p>
            <p className="text-3xl font-bold">
              F{parseFloat(currentEdition.price).toFixed(2)}
            </p>
            <p className="text-2xl">
              (Combined total:{" "}
              <span className="font-bold">F{totalPrice.toLocaleString()}</span>)
            </p>
          </div>
        </div>
        <div
          className={classnames("mt-12 sm:mt-0 mb-2 flex flex-col", {
            hidden: hasntStarted,
          })}
        >
          {ended ? (
            <div className="flex flex-col gap-4 mt-4">
              {map(
                map(editionsStatuses, (e) => ({ ...e })),
                (e, index) => (
                  <p key={`edition-won-${index}`}>
                    Edition {index + 1} - {e.leader || "No bids"} - F
                    {parseFloat(e.price).toFixed(2)}
                  </p>
                )
              )}
            </div>
          ) : (
            <select
              className="w-3/4 mx-auto mb-3 py-3 px-6 font-lato"
              onChange={(e) => {
                setStatus("");
                setActiveEdition(parseInt(e.currentTarget.value));
              }}
            >
              {map(editionsStatuses, (e, index) => (
                <option
                  key={`edition-${e.edition}`}
                  value={e.edition}
                  selected={index === 0}
                >
                  Edition #{e.edition} - F{parseFloat(e.price).toFixed(2)}{" "}
                  {get(user, "addr") === e.leader ? "- Your Bid" : ""}
                </option>
              ))}
            </select>
          )}
          {ended ? (
            ""
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
                className="placeholder-black-200 w-full bg-white text-black-500 font-semibold rounded-full border-none px-8 py-3 outline-none"
              />
              <input
                type="submit"
                className="standard-button small-button mt-2 sm:mt-0 sm:absolute right-0 h-full px-6"
                value="Place Bid"
              />
            </form>
          )}
          <span className="w-full left-0 absolute top-full mt-2 text-center">
            {writtenStatus}
          </span>
        </div>
      </div>
    </>
  );
};

export default EditionBidBox;
