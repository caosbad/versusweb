import React from "react";
import classnames from "classnames";
import { getWrittenTimer } from "./DropDetails";

const IndDropTimer = ({ timeRemaining }) => {
  const timer = getWrittenTimer(timeRemaining);
  let Counter = (
    <div className="flex flex-col">
      <div className="flex items-center font-sourceSansPro mx-auto justify-center">
        {timer.days ? (
          <div className="flex items-center mx-1 sm:mx-2">
            <span className="text-lg sm:text-2xl">{timer.days}</span>
            <span className="font-thin text-xs uppercase ml-2">days</span>
          </div>
        ) : (
          ""
        )}
        {timer.hours ? (
          <div className="flex items-center mx-1 sm:mx-2">
            <span className="text-lg sm:text-2xl">{timer.hours}</span>
            <span className="font-thin text-xs uppercase ml-2">hrs</span>
          </div>
        ) : (
          ""
        )}
        {timer.minutes ? (
          <div className="flex items-center mx-1 sm:mx-2">
            <span className="text-lg sm:text-2xl">{timer.minutes}</span>
            <span className="font-thin text-xs uppercase ml-2">mins</span>
          </div>
        ) : (
          ""
        )}
        <div className="flex items-center mx-1 sm:mx-2">
          <span className="text-lg sm:text-2xl">
            {timer.seconds.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            }) || "00"}
          </span>
          <span className="font-thin text-xs uppercase ml-2">secs</span>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className={classnames(
        "w-full sm:w-10/12 mx-auto text-white py-2 px-4 rounded-b-md",
        {
          "bg-black-500": timeRemaining > 600,
          "bg-red": timeRemaining <= 600,
        }
      )}
    >
      {Counter}
    </div>
  );
};

export default IndDropTimer;
