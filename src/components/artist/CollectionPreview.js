import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import get from "lodash.get";

const CollectionPreview = ({ piece }) => {
  return (
    <div to="#" className="w-full">
      <div className="h-36 sm:h-56 lg:h-64 rounded-lg xl:px-8 fill-content-photo">
        <Zoom>
          <img
            src={piece.img}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
          />
        </Zoom>
      </div>
      <div className="mt-2">
        <p className="font-bold">{get(piece, "metadata.name")}</p>
        <p className="font-bold">
          #{get(piece, "metadata.edition")}/{get(piece, "metadata.maxEdition")}
        </p>
        <p className="text-black-200 font-light">
          {get(piece, "metadata.artist")}
        </p>
      </div>
    </div>
  );
};

export default CollectionPreview;
