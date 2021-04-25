import React, { useState, useEffect } from "react";
import { times } from "lodash";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

import CollectionPreview from "./CollectionPreview";
import { fetchMyArt } from "./transactions";

const ArtistCollection = ({ addr }) => {
  const [pieces, setPieces] = useState(null);
  useEffect(() => {
    async function getArt() {
      const response = await fcl.send([
        fcl.script(fetchMyArt),
        fcl.args([fcl.arg(addr, t.Address)]),
      ]);
      const artResponse = await fcl.decode(response);
      console.log(artResponse);
      setPieces(artResponse);
    }
    getArt();
  }, []);
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
