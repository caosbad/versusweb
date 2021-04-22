import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import moment from "moment";
import { get, set } from "lodash";
import classnames from "classnames";

import piece1 from "../../images/piece1.png";
import { withPrefix } from "gatsby";

const getWrittenTimer = (seconds) => {
  var days = Math.floor(seconds / (3600 * 24));
  var hours = Math.floor((seconds % (3600 * 24)) / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var seconds = Math.floor(seconds % 60);
  if (days >= 1) {
    return `${days} days, ${hours} hours`;
  } else if (hours >= 1) {
    return `${hours} hours, ${minutes} minutes`;
  } else if (minutes >= 1) {
    return `${minutes} minutes, ${seconds} seconds`;
  } else if (seconds >= 0) {
    return `${seconds} seconds`;
  } else return false;
};

const DropDetails = ({ drop = {}, dropInfo = {} }) => {
  const [counter, setCounter] = useState(null);
  const [timeUntil, setTimeUntil] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  useEffect(() => {
    if (parseFloat(drop.timeRemaining) - timeRemaining > 15 && timeRemaining) {
      setTimeRemaining(parseFloat(drop.timeRemaining));
    } else {
      setTimeUntil(parseFloat(drop.startTime) - moment().unix());
      setTimeRemaining(parseFloat(drop.timeRemaining));
      const timer = setInterval(() => {
        setTimeUntil((t) => t - 1);
        setTimeRemaining((t) => t - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [drop.timeRemaining]);
  useEffect(() => {
    if (drop && timeUntil) {
      if (timeUntil > 0) {
        const timer = getWrittenTimer(timeUntil);
        setCounter(`Starts in ${timer}`);
      } else if (timeRemaining > 0) {
        const timer = getWrittenTimer(timeRemaining);
        setCounter(`Ends in ${timer}`);
      } else if (drop.winning === "TIE") {
        setCounter(
          <span>
            Auction is currently Tied.
            <br /> For the auction to end one side has to win!
          </span>
        );
      } else {
        setCounter(
          <>
            This auction has ended
            <p className="text-lg font-normal mt-2">
              {drop.settled
                ? "Versus has finalized this auction"
                : "Versus has yet to finalize this auction"}
            </p>
          </>
        );
      }
    }
  }, [timeRemaining]);
  const ended = !drop.active && drop.winning !== "TIE";
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
              "text-red": !ended && timeRemaining <= 600,
            }
          )}
        >
          {counter}
        </h2>
        <div className="my-8">
          <div className="h-84 sm:h-108 rounded-lg px-8 fill-content-photo">
            <Zoom>
              <img
                src={withPrefix(dropInfo.featuredImage)}
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
            <h1 className="text-xl font-lato font-bold">{dropInfo.title}</h1>
            <h2 className="font-ibm font-xl font-light">{dropInfo.artist}</h2>
          </div>
          <p className="mt-4 text-sm text-mediumGrey">
            {get(drop, "metadata.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropDetails;
