import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import moment from "moment";
import { get, map } from "lodash";
import classnames from "classnames";

import { Link } from "gatsby";

export const getWrittenTimer = (seconds) => {
  var days = Math.floor(seconds / (3600 * 24));
  var hours = Math.floor((seconds % (3600 * 24)) / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var seconds = Math.floor(seconds % 60);
  if (!days && !hours && !minutes && !seconds) return false;
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const DropDetails = ({
  drop = {},
  dropInfo = {},
  art,
  timeRemaining,
  timeUntil,
}) => {
  const editionsStatuses = map(drop.editionsStatuses, (e) => ({ ...e }));
  let Counter = <></>;
  if (timeUntil > 0 || timeRemaining > 0) {
    const timer = getWrittenTimer(timeUntil > 0 ? timeUntil : timeRemaining);
    Counter = (
      <div className="flex flex-col">
        {timeUntil > 0 ? (
          <h4 className="text-center font-lato font-bold text-xl">Starts In</h4>
        ) : (
          ""
        )}
        <div className="flex items-center font-lato mx-auto justify-center">
          {timer.days ? (
            <div className="flex items-center mx-2 sm:mx-4">
              <span className="text-2xl sm:text-4xl">{timer.days}</span>
              <span className="font-thin text-sm sm:text-base uppercase ml-2">
                days
              </span>
            </div>
          ) : (
            ""
          )}
          {timer.hours ? (
            <div className="flex items-center mx-2 sm:mx-4">
              <span className="text-2xl sm:text-4xl">{timer.hours}</span>
              <span className="font-thin text-sm sm:text-base uppercase ml-2">
                hrs
              </span>
            </div>
          ) : (
            ""
          )}
          {timer.minutes ? (
            <div className="flex items-center mx-2 sm:mx-4">
              <span className="text-2xl sm:text-4xl">{timer.minutes}</span>
              <span className="font-thin text-sm sm:text-base uppercase ml-2">
                mins
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center mx-2 sm:mx-4">
            <span className="text-2xl sm:text-4xl">
              {timer.seconds.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              }) || "00"}
            </span>
            <span className="font-thin text-sm sm:text-base uppercase ml-2">
              secs
            </span>
          </div>
        </div>
      </div>
    );
  } else if (drop.winning === "TIE") {
    Counter = (
      <span>
        Auction is currently Tied.
        <br /> For the auction to end one side has to win!
      </span>
    );
  } else {
    Counter = (
      <>
        This auction has ended
        <p className="text-lg font-normal mt-2">
          {drop.settledAt
            ? "Versus has finalized this auction"
            : "Versus has yet to finalize this auction"}
        </p>
      </>
    );
  }
  return (
    <div className="text-center">
      <div className="w-124 mx-auto max-w-full">
        <h4 className="font-lato font-bold text-xl">
          {moment.unix(drop.startTime).format("MM.DD.YYYY")}
        </h4>
        <h2
          className={classnames(
            "font-bold max-w-screen-md mt-2 mx-auto text-4xl",
            {
              "text-red":
                !drop.active && timeRemaining <= 300 && !drop.settledAt,
            }
          )}
        >
          {Counter}
        </h2>
        <div className="my-8">
          <div className="h-84 sm:h-108 rounded-lg px-8 fill-content-photo">
            <Zoom>
              <img
                src={art}
                className="w-full h-full object-contain rounded-lg cursor-pointer"
              />
            </Zoom>
          </div>
          <span className="text-sm text-mediumGrey mt-2 cursor-pointer">
            Click to expand
          </span>
        </div>
        <div className="mb-8">
          <div>
            <h1 className="text-2xl font-lato font-bold">{dropInfo.title}</h1>
            <h2 className="font-ibm text-xl font-light underline">
              <Link to={`/artist/${drop.dropId}`}>{dropInfo.artist}</Link>
            </h2>
          </div>
          <p className="mt-4 text-base max-w-screen-md mx-auto text-mediumGrey opacity-70">
            {get(drop, "metadata.description")}
            <br />
            <br />
            This auction has a minimum bid of{" "}
            {parseInt(get(drop, "startPrice", 0), 10)} Flow on the unique side
            and 1 Flow on each of the editions.
            <br />
            Each bid has to be{" "}
            {parseInt(get(drop, "uniqueStatus.bidIncrement", 0), 10)} Flow
            larger than the previous bid for the unique or{" "}
            {parseInt(get(editionsStatuses, "[0].bidIncrement", 0), 10)} Flow
            larger than the previous bid for the editions. Bids placed in the
            last {dropInfo.increment} minutes of the auction will reset the
            countdown to {dropInfo.increment} minutes remaining.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropDetails;
