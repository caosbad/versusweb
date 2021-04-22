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

export default ({ data }) => {
  console.log(data, "data");
  const dropInfo = get(data, "allSitePage.edges[0].node.context");
  const [drop, setDrop] = useState(null);
  //   console.log(drop, bidTransaction);
  console.log(dropInfo);
  useEffect(() => {
    async function fetchDrop() {
      console.log("response");
      const response = await fcl.send([
        fcl.script(fetchVersusDrop),
        fcl.args([
          fcl.arg(dropInfo.marketplaceAccount, t.Address),
          fcl.arg(parseInt(dropInfo.id), t.UInt64),
        ]),
      ]);
      console.log(response);
      const dropResponse = await fcl.decode(response);
      console.log(dropResponse);
      setDrop(dropResponse);
    }
    if (drop == null) {
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
            <ArtistHeader dropInfo={dropInfo} />
            <DropModule
              dropInfo={dropInfo}
              drop={drop}
              marketplaceAccount={dropInfo.marketplaceAccount}
              user={user}
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
