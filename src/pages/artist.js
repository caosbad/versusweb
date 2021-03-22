import React from "react";

import Main from "../layouts/Main";
import ArtistHeader from "../components/artist/ArtistHeader";
import ArtistProfile from "../components/artist/ArtistProfile";
import ArtistSocial from "../components/artist/ArtistSocial";

const Artist = () => {
  return (
    <Main>
      <ArtistHeader />
      <ArtistProfile />
      <ArtistSocial />
    </Main>
  );
};

export default Artist;
