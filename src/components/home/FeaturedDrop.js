import React from "react";
import { withPrefix, Link } from "gatsby";

const FeaturedDrop = () => {
  return (
    <div
      className="bg-cover featured-image w-full relative z-20 bg-center"
      style={{ backgroundImage: `url(${withPrefix("/images/kamp.png")})` }}
    >
      <div className="container py-16 h-full flex flex-col justify-between text-white">
        <div>
          <h6 className="font-lato font-semibold text-xl">Introducing.</h6>
          <h2 className="text-8xl font-ibm mt-1 tracking-tighter relative -left-1">
            Kamp
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="font-lato text-xl uppercase mb-4 sm:mb-0">
            <span className="font-light">Dropping </span>
            <span className="font-bold">April</span>
          </span>
          <Link
            to="/artist/drops/1"
            className="standard-button long-button white-button"
          >
            View Drop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDrop;
