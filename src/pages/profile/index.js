import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";
import ArtistCollection from "../../components/artist/ArtistCollection";
import Main from "../../layouts/Main";
import get from "lodash.get";

const Profile = (props) => {
  const addr = get(props, "params.*");
  return (
    <Main>
      {() => (
        <>
          <Helmet>
            <title>Profile</title>
          </Helmet>
          <ArtistHeader
            dropInfo={{
              smallImage: "/images/generic.png",
              artist: addr,
            }}
          />
          <ArtistCollection addr={addr} />
        </>
      )}
    </Main>
  );
};

export default Profile;
