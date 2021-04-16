import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import * as sdk from "@onflow/sdk";
import { graphql } from "gatsby";
import { get } from "lodash";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";
import DropModule from "../../components/drops/DropModule";
import { fetchVersusDrop } from "../../components/artist/transactions";
import Loading from "../../components/general/Loading";

export default ({ data }) => {
  console.log(data, "data");
  const dropInfo = get(data, "allSitePage.edges[0].node.context");
  const [drop, setDrop] = useState(null);
  const [bidTransaction, setBidTransaction] = useState(null);
  //   console.log(drop, bidTransaction);
  console.log(dropInfo);
  useEffect(() => {
    async function fetchDrop() {
      console.log("response");
      const response = await fcl.send([
        fcl.script(fetchVersusDrop),
        sdk.args([
          sdk.arg(dropInfo.marketplaceAccount, t.Address),
          sdk.arg(parseInt(dropInfo.id), t.UInt64),
        ]),
      ]);
      console.log(response);
      const dropResponse = await fcl.decode(response);
      console.log(dropResponse);
      setDrop(dropResponse);
      setBidTransaction(null);
      //we mark that the current transaction has been taken into account
    }
    if (drop == null || bidTransaction != null) {
      setInterval(() => {
        fetchDrop();
      }, 5000);
    }
  }, [dropInfo.id, bidTransaction]);
  return (
    <Main>
      {drop ? (
        <>
          <ArtistHeader dropInfo={dropInfo} />
          <DropModule
            dropInfo={dropInfo}
            drop={drop}
            marketplaceAccount={dropInfo.id}
          />
          <ArtistSocial />
        </>
      ) : (
        <Loading className="w-full min-h-screen" />
      )}
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
