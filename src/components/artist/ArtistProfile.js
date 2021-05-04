import React from "react";
import Slider from "react-slick";
import { get, map } from "lodash";
import { Link, withPrefix } from "gatsby";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slickSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 640,
      settings: { slidesToShow: 2 },
    },
  ],
  focusOnSelect: true,
  arrows: false,
  centerMode: true,
};

const ArtistProfile = ({ dropInfo }) => {
  const { aboutArtist, recentWork, id } = dropInfo;
  const slides = map(recentWork, (w) => ({
    image: withPrefix(w.image),
  }));
  return (
    <div className="bg-white py-12 text-center">
      <div className="mb-8 w-108 max-w-full mx-auto px-4">
        <h3 className="font-lato text-2xl font-bold">About the artist</h3>
        <p className="mt-4 text-mediumGrey">{aboutArtist}</p>
      </div>
      <div className="mb-8 w-full max-w-full mx-auto">
        <h3 className="font-lato text-2xl font-bold mb-4">Recent Work</h3>
        <Slider {...slickSettings}>
          {map(slides, (s, index) => (
            <div
              key={`piece-${index}`}
              className="h-36 sm:h-56 md:h-64 lg:h-108 rounded-lg px-3 md:px-4 xl:px-8"
            >
              <img
                src={s.image}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mb-8 w-96 max-w-full mx-auto px-4">
        <h3 className="font-lato text-2xl font-bold">
          {get(recentWork, "[1].title")}
        </h3>
        <p className="mt-4 text-mediumGrey mb-12">
          {get(recentWork, "[1].description")}
        </p>
      </div>
    </div>
  );
};

export default ArtistProfile;
