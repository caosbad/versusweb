import React from "react";
import get from "lodash.get";
import * as fcl from "@onflow/fcl";

import prof from "../../images/prof.png";
import ArtistTabs from "./ArtistTabs";
import { withPrefix } from "gatsby";
import { tx } from "../drops/transactions";
import { connectArtCollection } from "./transactions";

const ArtistHeader = ({ dropInfo, user }) => {
  const { artist, smallImage, handle } = dropInfo || {};
  console.log(user);
  const myPage = user && user.addr && artist === user.addr;
  const createArtCollection = async (e) => {
    e.preventDefault();
    try {
      await tx(
        [
          fcl.transaction(connectArtCollection),
          fcl.args(),
          fcl.proposer(fcl.currentUser().authorization),
          fcl.payer(fcl.currentUser().authorization),
          fcl.authorizations([fcl.currentUser().authorization]),
          fcl.limit(9999),
        ],
        {
          onStart() {},
          onSubmission() {},
          async onSuccess(status) {
            console.log(status);
          },
          async onError(error) {
            console.log(error);
          },
        }
      );
    } catch (e) {}
  };
  return (
    <div className="h-64 container flex flex-col sm:justify-center relative">
      <div className="flex flex-col items-center justify-center text-center mt-4 sm:mt-0 mb-4">
        <div className="w-20 h-20">
          <img
            src={withPrefix(smallImage)}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold font-lato mt-4 mb-1">{artist}</h1>
        <p className="text-lg font-lato">{handle}</p>
        {myPage && (
          <button
            className="standard-button small-button mt-3 mb-16"
            role="button"
            aria-label="Create Art Collection"
            onClick={createArtCollection}
          >
            Create Art Collection
          </button>
        )}
      </div>
      <div className="absolute bottom-4 w-full left-0 px-6 md:px-24">
        {artist && <ArtistTabs dropInfo={dropInfo} />}
      </div>
    </div>
  );
};

export default ArtistHeader;
