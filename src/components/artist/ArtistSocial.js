import React from "react";

import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Youtube from "../../assets/youtube.svg";

const ArtistSocial = () => {
  return (
    <div className="bg-lightGrey text-center py-8">
      <h4 className="font-lato font-bold text-2xl">Follow artist</h4>
      <div className="flex items-center justify-center mt-6">
        <a href="" target="_blank">
          <Facebook className="h-6 fill-current mx-4" />
        </a>
        <a href="" target="_blank">
          <Twitter className="h-6 fill-current mx-4" />
        </a>
        <a href="" target="_blank">
          <Instagram className="h-6 fill-current mx-4" />
        </a>
        <a href="" target="_blank">
          <Youtube className="h-6 fill-current mx-4" />
        </a>
      </div>
    </div>
  );
};

export default ArtistSocial;
