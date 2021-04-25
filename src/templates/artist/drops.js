import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import * as sdk from "@onflow/sdk";
import { graphql } from "gatsby";
import { get, clone } from "lodash";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";
import DropModule from "../../components/drops/DropModule";
import {
  fetchVersusArt,
  fetchVersusDrop,
} from "../../components/artist/transactions";
import Loading from "../../components/general/Loading";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  const dropInfo = get(data, "allSitePage.edges[0].node.context");
  const [drop, setDrop] = useState(null);
  const [art, setArt] = useState(null);
  useEffect(() => {
    async function fetchDrop() {
      const response = await fcl.send([
        fcl.script(fetchVersusDrop),
        fcl.args([fcl.arg(parseInt(dropInfo.id), t.UInt64)]),
      ]);
      const dropResponse = await fcl.decode(response);
      setDrop(dropResponse);
    }
    async function fetchArt() {
      const response = await fcl.send([
        fcl.script(fetchVersusArt),
        fcl.args([fcl.arg(parseInt(dropInfo.id), t.UInt64)]),
      ]);
      const artResponse = await fcl.decode(response);
      setArt(artResponse);
    }
    if (drop == null) {
      fetchDrop();
      fetchArt();
      window.fetches = setInterval(() => {
        fetchDrop();
      }, 30000);
    }
    document.addEventListener(
      "bid",
      () => {
        fetchDrop();
      },
      false
    );
    return () => {
      clearInterval(window.fetches);
      document.removeEventListener("bid", fetchDrop, false);
    };
  }, [dropInfo.id]);
  return (
    <Main>
      {(user) => {
        return drop ? (
          <>
            <Helmet title={`${dropInfo.title} by ${dropInfo.artist}`} />
            <ArtistHeader dropInfo={dropInfo} />
            <DropModule
              dropInfo={dropInfo}
              drop={drop}
              marketplaceAccount={dropInfo.marketplaceAccount}
              user={user}
              art={art}
            />
            <ArtistSocial dropInfo={dropInfo} />
          </>
        ) : (
          <Loading className="w-full min-h-screen" />
        );
      }}
    </Main>
  );
};

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            id
            marketplaceAccount
            title
            artist
            handle
            smallImage
            featuredImage
            aboutArtist
            twitter
            instagram
            increment
            recentWork {
              image
              title
              description
              link
            }
          }
        }
      }
    }
  }
`;
