import React from "react";

import prof from "../../images/prof.png";
import ArtistTabs from "./ArtistTabs";

const ArtistHeader = () => {
  return (
    <div className="h-96 container flex flex-col justify-center relative">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20">
          <img src={prof} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold font-lato mt-4 mb-1">Vince Kamp</h1>
        <p className="text-lg font-lato">@vincekamp</p>
      </div>
      <div className="absolute bottom-4 w-full px-24">
        <ArtistTabs />
      </div>
    </div>
  );
};

export default ArtistHeader;
