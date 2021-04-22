import React from "react";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";
import ArtistCollection from "../../components/artist/ArtistCollection";

const Collection = () => {
  return (
    <Main>
      {() => (
        <>
          <ArtistHeader />
          <ArtistCollection />
          <ArtistSocial />
        </>
      )}
    </Main>
  );
};

export default Collection;
