import React from "react";
import Slider from "react-slick";
import { map } from "lodash";
import { Link } from "gatsby";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import piece1 from "../../images/piece1.png";
import piece2 from "../../images/piece2.png";
import piece3 from "../../images/piece3.png";

const slides = [
  {
    image: piece1,
  },
  {
    image: piece2,
  },
  {
    image: piece3,
  },
  {
    image: piece1,
  },
  {
    image: piece2,
  },
];

const slickSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  focusOnSelect: true,
  arrows: false,
  centerMode: true,
};

const ArtistProfile = () => {
  return (
    <div className="bg-white py-12 text-center">
      <div className="mb-6 w-108 max-w-full mx-auto">
        <h3 className="font-lato text-2xl font-bold">About the artist</h3>
        <p className="mt-2 text-sm text-mediumGrey">
          Vince has made a name for himself in the traditional art world through
          painting tattoed underworld figures and gangsters. He has never before
          launched an artwork on a NFT platform, and we look forward to seeing
          what he brings to his gensis drop! If the unique side wins Vincent’s
          auction the winnner will have the option to receive Vince’s physical
          painting
        </p>
      </div>
      <div className="mb-6 w-full max-w-full mx-auto">
        <h3 className="font-lato text-2xl font-bold mb-2">Recent Work</h3>
        <Slider {...slickSettings}>
          {map(slides, (s, index) => (
            <div key={`piece-${index}`} className="h-108 rounded-lg px-8">
              <img
                src={s.image}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mb-6 w-96 max-w-full mx-auto">
        <h3 className="font-lato text-2xl font-bold">Space Whale</h3>
        <p className="mt-2 text-sm text-mediumGrey mb-12">
          Vince has made a name for himself in the traditional art world through
          painting tattoed underworld.
        </p>
        <Link to="/" className="standard-button long-button transparent-button">
          View Drop
        </Link>
      </div>
    </div>
  );
};

export default ArtistProfile;
