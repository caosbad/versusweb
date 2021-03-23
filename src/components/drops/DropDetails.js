import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import piece1 from "../../images/piece1.png";

const DropDetails = () => {
  return (
    <div className="text-center">
      <div className="w-96 mx-auto max-w-full">
        <h4 className="font-lato font-bold text-xl">03.03.2021</h4>
        <h2 className="font-bold text-4xl mt-2">5 days, 10 hours</h2>
        <div className="my-8">
          <div className="h-84 sm:h-108 rounded-lg px-8">
            <Zoom>
              <img
                src={piece1}
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
            <h1 className="text-xl font-lato font-bold">Close shave</h1>
            <h2 className="font-ibm font-xl font-light">Vince Kamp</h2>
          </div>
          <p className="mt-4 text-sm text-mediumGrey">
            Vince has made a name for himself in the traditional art world
            through painting tattoed underworld.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropDetails;
