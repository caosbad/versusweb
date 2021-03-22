import React from "react";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";

const ForSale = () => {
  return (
    <Main>
      <ArtistHeader />
      <div className="py-12 bg-white text-center h-108">
        <h4 className="font-lato font-bold text-xl">No current drops...</h4>
        <h2 className="font-bold text-4xl mt-2">Signup for updates</h2>
      </div>
      <ArtistSocial />
    </Main>
  );
};

export default ForSale;
