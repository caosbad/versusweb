import React from "react";
import { times } from "lodash";

import CollectionPreview from "./CollectionPreview";

const ArtistCollection = () => {
  return (
    <div className="py-12 bg-white text-center">
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {times(6, (i) => (
          <CollectionPreview key={`preview-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default ArtistCollection;
