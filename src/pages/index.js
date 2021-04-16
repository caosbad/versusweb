import React from "react";

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
      <Landing />
      <WhatsDifferent />
      <NotRewarded />
      <MeetTheArtists />
      <Newsletter />
    </Main>
  );
};

export default Home;
