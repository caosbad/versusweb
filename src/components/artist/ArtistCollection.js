import React, { useState, useEffect } from "react";
import { times, map } from "lodash";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

import CollectionPreview from "./CollectionPreview";
import { fetchMyArt, fetchOneArt } from "./transactions";
import Loading from "../general/Loading";

const ArtistCollection = ({ addr }) => {
  const [pieces, setPieces] = useState(null);
  useEffect(() => {
    async function getArt() {
      const response = await fcl.send([
        fcl.script(fetchMyArt),
        fcl.args([fcl.arg(addr, t.Address)]),
      ]);
      const artResponse = await fcl.decode(response);
      const allPieces = await Promise.all(
        map(artResponse, async (r) => {
          const oneArtResponse = await fcl.send([
            fcl.script(fetchOneArt),
            fcl.args([fcl.arg(addr, t.Address), fcl.arg(r.id, t.UInt64)]),
          ]);
          return { ...r, img: await fcl.decode(oneArtResponse) };
        })
      );
      setPieces(allPieces);
    }
    getArt();
  }, []);
  return (
    <div className="py-12 bg-white text-center">
      <div className="container min-h-screen">
        {pieces ? (
          pieces.length ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 min-h-screen">
              {map(pieces, (p) => (
                <CollectionPreview key={`piece-${p.id}`} piece={p} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg">
              This user does not currently own any art
            </p>
          )
        ) : (
          <div className="w-full flex flex-col justify-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistCollection;
