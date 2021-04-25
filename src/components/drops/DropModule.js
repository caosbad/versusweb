import React, { useState, useEffect } from "react";
import moment from "moment";

import DropBids from "./DropBids";
import DropDetails from "./DropDetails";

const DropModule = ({ drop, marketplaceAccount, dropInfo, user, art }) => {
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
  return (
    <div className="py-12 bg-white pb-40">
      <div className="w-full mx-auto container max-w-screen-lg">
        <DropDetails
          drop={drop}
          dropInfo={dropInfo}
          art={art}
          timeUntil={timeUntil}
          timeRemaining={timeRemaining}
        />
        {timeUntil <= 0 && (
          <DropBids
            drop={drop}
            marketplaceAccount={marketplaceAccount}
            user={user}
            timeRemaining={timeRemaining}
          />
        )}
      </div>
    </div>
  );
};

export default DropModule;
