import React from "react";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";

const Unlisted = () => {
  return (
    <Main>
      <ArtistHeader />
      <div className="py-12 bg-white text-center h-108 container">
        <h4 className="font-lato font-bold text-xl">
          Marketplace coming soon...
        </h4>
        <h2 className="font-bold text-4xl mt-2">Signup for updates</h2>
      </div>
      <ArtistSocial />
    </Main>
  );
};

export default Unlisted;
