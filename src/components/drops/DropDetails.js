import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import moment from "moment";
import { get } from "lodash";

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
  useEffect(() => {
    if (drop) {
      const timeUntil = parseFloat(drop.startTime) - moment().unix();
      const { timeRemaining } = drop;
      if (timeUntil > 0) {
        const timer = getWrittenTimer(timeUntil);
        setCounter(`Starts in ${timer}`);
      } else if (timeRemaining > 0) {
        const timer = getWrittenTimer(timeRemaining);
        setCounter(`Ends in ${timer}`);
      } else if (drop.winning === "TIED") {
        setCounter("Auction Tied!");
      } else {
        setCounter("This auction has ended");
      }
    }
  }, [drop]);
  return (
    <div className="text-center">
      <div className="w-124 mx-auto max-w-full">
        <h4 className="font-lato font-bold text-xl">
          {moment.unix(drop.startTime).format("MM.DD.YYYY")}
        </h4>
        <h2 className="font-bold text-4xl mt-2">{counter}</h2>
        <div className="my-8">
          <div className="h-84 sm:h-108 rounded-lg px-8 fill-content-photo">
            <Zoom>
              <img
                src={withPrefix(dropInfo.featuredImage)}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
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
            {/* {get(drop, "metadata.description")} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropDetails;
