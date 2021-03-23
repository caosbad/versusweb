import React from "react";
import { Link } from "gatsby";

import piece1 from "../../images/piece1.png";

const CollectionPreview = () => {
  return (
    <Link to="#" className="w-full">
      <div className="h-36 sm:h-56 lg:h-64 rounded-lg xl:px-8">
        <img
          src={piece1}
          className="w-full h-full object-cover rounded-lg cursor-pointer"
        />
      </div>
      <div className="mt-2">
        <p className="font-bold">Title of the Art</p>
        <p className="font-bold">#000/000</p>
        <p className="text-black-200 font-light">Artist Name</p>
      </div>
    </Link>
  );
};

export default CollectionPreview;
