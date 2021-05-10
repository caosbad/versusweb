import React from "react";
import { withPrefix, Link } from "gatsby";

import Arrow from "../../assets/arrow.svg";

const FeaturedDrop = () => {
  return (
    <div
      className="bg-cover sm:bg-cover featured-image w-full relative z-20 bg-center"
      style={{ backgroundImage: `url(${withPrefix("/images/han.jpg")})` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black-500 backdrop-filter bg-opacity-30" />
      <div className="container py-12 h-full flex flex-col justify-between text-white z-10 relative">
        <div>
          <h6 className="font-lato font-semibold text-xl">Introducing.</h6>
          <h2 className="text-5xl sm:text-8xl font-ibm mt-1 tracking-tighter relative -left-1">
            Han
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="font-lato text-xl uppercase mb-4 sm:mb-0 relative text-black-500 py-4 sm:pr-6 w-full sm:w-auto text-center sm:text-left">
            <div className="date-background"></div>
            <span className="font-light relative z-10">May 12th </span>
            <span className="font-bold relative z-10">10am EST</span>
          </span>
          <Link
            to="/artist/drops/han"
            className="standard-button long-button white-button arrow-button"
          >
            View Drop
            <Arrow className="hidden sm:inline-block ml-3 stroke-current stroke-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDrop;
