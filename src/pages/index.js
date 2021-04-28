import React from "react";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";
import FeaturedDrop from "../components/home/FeaturedDrop";
import Landing from "../components/home/Landing";
import WhatsDifferent from "../components/home/WhatsDifferent";
import NotRewarded from "../components/home/NotRewarded";
import MeetTheArtists from "../components/home/MeetTheArtists";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <Main>
      {() => (
        <>
          <Helmet>
            <title>Home</title>
          </Helmet>
          {/* <FeaturedDrop /> */}
          <Landing />
          <WhatsDifferent />
          <NotRewarded />
          <MeetTheArtists />
          <Newsletter />
        </>
      )}
    </Main>
  );
};

export default Home;
