import React from "react";
import get from "lodash.get";

import prof from "../../images/prof.png";
import ArtistTabs from "./ArtistTabs";
import { withPrefix } from "gatsby";

const ArtistHeader = ({ dropInfo }) => {
  const { artist, smallImage, handle } = dropInfo || {};
  return (
    <div className="h-96 container flex flex-col sm:justify-center relative">
      <div className="flex flex-col items-center justify-center text-center mt-4 sm:mt-0">
        <div className="w-20 h-20">
          <img
            src={withPrefix(smallImage)}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold font-lato mt-4 mb-1">{artist}</h1>
        <p className="text-lg font-lato">{handle}</p>
      </div>
      <div className="absolute bottom-4 w-full left-0 px-6 md:px-24">
        {artist && <ArtistTabs dropInfo={dropInfo} />}
      </div>
    </div>
  );
};

export default ArtistHeader;
