import React from "react";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

const FAQ = () => {
  return (
    <Main>
      {() => (
        <>
          <Helmet>
            <title>FAQ</title>
          </Helmet>
          <div className="py-12 bg-white">
            <div className="container">
              <h1 className="text-4xl font-bold font-lato mt-4 mb-1">
                Frequently Asked Questions{" "}
              </h1>
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">What is Versus?</h2>
                <p className="mb-4">
                  Versus is a curated digital auction house and art marketplace.
                  All art on Versus is tokenized as an NFT on the Flow
                  Blockchain.
                </p>
                <p className="mb-4">
                  Originally, Versus will have one drop/auction each week, with
                  the goal to increase the frequency of drops in the future to
                  accommodate increases in demand.
                </p>
                <h2 className="text-xl font-semibold mb-4">What is an NFT?</h2>
                <p className="mb-4">
                  An NFT (or non-fungible token) is a unique tokenized
                  collectable on the blockchain.
                </p>
                <p className="mb-4">
                  The blockchain allows for verifiable scarcity, easy
                  provenance, and users to control their own assets.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  What makes a Versus NFT valuable?
                </h2>
                <p className="mb-4">
                  Our NFTs are future oriented and decentralized. All the data
                  related to each NFT (image, art name, artist’s name, and
                  edition number) is stored directly on the Flow Blockchain.
                </p>
                <p className="mb-4">
                  Versus will be the first art maketplace to store high quality,
                  full resolution .png artworks on chain.
                </p>
                <p className="mb-4">
                  This means that buyers can be comfortable knowing that their
                  NFT is not reliant on any centralized company or service.
                  There is no image or data hosting that could lead to dead NFTs
                  if anything ever happens to Versus.
                </p>
                <p className="mb-4">
                  Buyers have complete control over their art.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  How can I buy art on Versus?
                </h2>
                <p className="mb-4">
                  Purchases on Versus will be made using the native token of the
                  Flow Blockchain, Flow, through the Blocto wallet. We will also
                  accommodate other wallets in the future.
                </p>
                <p className="mb-4">
                  We are aware that Flow is not yet available in some
                  jurisdictions, notably the US and Canada, but we are
                  confidient that Flow will be made available to all in the near
                  future.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  How does a Versus auction work?
                </h2>
                <p className="mb-4">
                  Versus auctions are not your average english auctions.
                </p>
                <p className="mb-4">
                  Biders will have the ability to place bids on exclusive (1/1)
                  artworks or edition artworks (1/10-25+). Whichever auction
                  will generate more revenue for the artist (exclusive or
                  editions) wins the auction, and the respective number of NFTs
                  are then minted.
                </p>
                <p className="mb-4">
                  In summary, there will be three separate types of english
                  auctions ongoing during a Versus drop. There is the simple
                  engilsh auction for the 1/1 piece, an engilsh auction for each
                  /10-25+ piece, and the auction that tallies the sum of all
                  bids for both sides and determines which side will win.
                </p>
                <p className="mb-4">
                  This unique auction system of “exclusive” versus “edition” is
                  meant to allow those looking to spend less to still be able to
                  participate in an exhilarating auction for a high quality NFT
                  artwork. It will also allow for thorough price discovery and
                  democratization of the auction process.
                </p>
                <p className="mb-4">
                  If a bid is placed in the last 10 minutes of an auction the
                  time remaining in the auction returns to 10 minutes.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  How can I sell art I bought from a Versus drop?
                </h2>
                <p className="mb-4">
                  At launch Versus will not have a native secondary marketplace.
                </p>
                <p className="mb-4">
                  This means that buyers will have to go to other NFT
                  marketplaces if they are looking to sell their art. Currently
                  VIV3 is the marketplace we recommend, but in the future you
                  will have the option to use other secondary marketplaces, such
                  as Opensea, or the Versus native marketplace.
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  How can I join Versus as an artist?
                </h2>
                <p className="mb-4">Versus is a curated art marketplace.</p>
                <p>
                  Currently we are manually reaching out to artists we would
                  like to feature on Versus, but in the future we will likely
                  have an application process for interested artists.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </Main>
  );
};

export default FAQ;
