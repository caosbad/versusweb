import React from "react";
import { Link } from "gatsby";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import Main from "../../layouts/Main";
import DropDetails from "../../components/drops/DropDetails";

const YouWon = () => {
  const { width, height } = useWindowSize();
  return (
    <Main>
      <Confetti width={width} height={height} />
      <div className="py-12 bg-white">
        <div className="w-full max-w-screen-lg mx-auto">
          <DropDetails />
          <div className="my-12 text-center">
            <h4 className="font-lato font-bold text-4xl">Congratulations!</h4>
            <Link
              to="/account/collection"
              className="text-lg mt-6 underline text-black-200 inline-block font-lato font-light"
            >
              View in collection &gt;
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default YouWon;
