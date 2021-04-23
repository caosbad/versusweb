import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import moment from "moment";
import { get, set } from "lodash";
import classnames from "classnames";

import piece1 from "../../images/piece1.png";
import { Link, withPrefix } from "gatsby";

const getWrittenTimer = (seconds) => {
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
        setCounter(
          <div className="flex flex-col">
            <h4 className="text-center font-lato font-bold text-xl">
              Starts In
            </h4>
            <div className="flex items-center gap-8 font-lato mx-auto justify-center">
              {timer.days ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.days}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    days
                  </span>
                </div>
              ) : (
                ""
              )}
              {timer.hours ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.hours}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    hrs
                  </span>
                </div>
              ) : (
                ""
              )}
              {timer.minutes ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.minutes}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    mins
                  </span>
                </div>
              ) : (
                ""
              )}
              {timer.seconds ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.seconds}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    secs
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      } else if (timeRemaining > 0) {
        const timer = getWrittenTimer(timeRemaining);
        setCounter(
          <div className="flex flex-col">
            <div className="flex items-center gap-8 font-lato mx-auto justify-center">
              {timer.days ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.days}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    days
                  </span>
                </div>
              ) : (
                ""
              )}
              {timer.hours ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.hours}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    hrs
                  </span>
                </div>
              ) : (
                ""
              )}
              {timer.minutes ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.minutes}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    mins
                  </span>
                </div>
              ) : (
                ""
              )}
              {timer.seconds ? (
                <div className="flex items-center">
                  <span className="text-4xl">{timer.seconds}</span>
                  <span className="font-thin text-base uppercase ml-2">
                    secs
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
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
              {drop.settledAt
                ? "Versus has finalized this auction"
                : "Versus has yet to finalize this auction"}
            </p>
          </>
        );
      }
    }
  }, [timeRemaining]);
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
                !drop.active && timeRemaining <= 600 && !drop.settledAt,
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
            <h1 className="text-2xl font-lato font-bold">{dropInfo.title}</h1>
            <h2 className="font-ibm text-xl font-light underline">
              <Link to={`/artist/${drop.dropId}`}>{dropInfo.artist}</Link>
            </h2>
          </div>
          <p className="mt-4 text-base max-w-screen-md mx-auto text-mediumGrey opacity-70">
            {get(drop, "metadata.description")}
            <br />
            <br />
            This auction has a minimum bid of 10 Flow on the unique side and 1
            Flow on each of the editions.
            <br />
            Each bid has to be {parseInt(
              drop.uniqueStatus.bidIncrement,
              10
            )}{" "}
            Flow larger than the previous bid. Bids placed in the last 10
            minutes of the auction will reset the countdown to 10 minutes
            remaining.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropDetails;
