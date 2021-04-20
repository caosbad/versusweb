import React from "react";
import { get } from "lodash";
import { graphql } from "gatsby";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistProfile from "../../components/artist/ArtistProfile";
import ArtistSocial from "../../components/artist/ArtistSocial";

export default ({ data }) => {
  console.log(data);
  const dropInfo = get(data, "allSitePage.edges[0].node.context");
  return (
    <Main>
      <ArtistHeader dropInfo={dropInfo} />
      <ArtistProfile dropInfo={dropInfo} />
      <ArtistSocial dropInfo={dropInfo} />
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
