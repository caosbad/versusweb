import React from "react";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

const FAQ = () => {
  return (
    <Main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="py-12 bg-white">
        <div className="container">
          <h1 className="text-4xl font-bold font-lato mt-4 mb-1">
            Frequently Asked Questions{" "}
          </h1>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">What is Versus?</h2>
            <p className="mb-4">
              Versus is a marketplace to collect and trade unique,
              single-edition digital artworks. Each artwork is authentically
              created by an artist in the network, and tokenized as a
              crypto-collectible digital item that you can own and trade.
            </p>
            <p className="mb-4">
              You can think of Versus like Instagram meets Christies. A new way
              to interact with art, culture, and collecting on the internet!
            </p>
            <h2 className="text-xl font-semibold mb-4">
              What is CryptoArt and how is it valuable?
            </h2>
            <p className="mb-4">
              Each artwork on Versus is a digital collectible– a digital object
              secured by cryptography and tracked on the blockchain. That’s just
              a fancy way of saying they’re provably scarce items that can be
              collected, and that hold value just like cryptocurrencies like
              ether and bitcoin.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              Why build a social network for CryptoArt?
            </h2>
            <p className="mb-4">
              We think collecting is inherently social. Since digital
              collectibles have a transparent record of ownership, they're
              perfect for a social environment. The social layer can make it
              easier to assess value and other context around items in the
              marketplace. Also, it's more fun!
            </p>
            <h2 className="text-xl font-semibold mb-4">
              How do I get started collecting?
            </h2>
            <p className="mb-4">
              Sign up here to create an account and connect it with an Ethereum
              wallet. Once you have an account, check out the activity feed and
              follow some of your favorite artists to get inspired and start
              collecting.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              Do I need cryptocurrency to buy items on Versus?
            </h2>
            <p className="mb-4">
              Yes, all transactions are made using ether, the native
              cryptocurrency to the Ethereum network, which powers Versus.
              Coinbase is an easy place to buy ether using a bank account if you
              haven’t used cryptocurrencies before.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              How does it work for creators?
            </h2>
            <p className="mb-4">
              Versus is still in early access, onboarding only a small number of
              hand-picked artists. You can use this form to submit your artist
              profile and get on our radar for our full launch next year.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              Are there marketplace fees?
            </h2>
            <p className="mb-4">
              There is a simple 3% transaction fee for all purchases, paid by
              the buyer.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              Are there artist gallery commissions?
            </h2>
            <p className="mb-4">
              For primary sales, there is a 15% commission (creators receive
              85%). For secondary sales, creators receive a 10% commission (aka
              royalty), providing passive revenue from an artwork if it
              continues to trade on the secondary market.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              What about fees/commissions for artworks created during the beta
              phase?
            </h2>
            <p className="mb-4">
              For artworks with a token ID lower than 4,000, there is no
              transaction fee or commission on primary sales, and a 3%
              commission on secondary sales.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              What's the motivation behind secondary market artist royalties?
            </h2>
            <p className="mb-4">
              We think the ability to secure a percentage of secondary-market
              revenue for artists is one of the most revolutionary and exciting
              capabilities provided by Ethereum smart contracts. It’s analogous
              to a musician receiving a percentage of sales for a vinyl record
              issued, say, in the 1960s and still being bought and sold in used
              record stores today.
            </p>
            <h2 className="text-xl font-semibold mb-4">
              What's the technology behind Versus?
            </h2>
            <p className="mb-4">
              Versus is a peer-to-peer marketplace for non-fungible tokens
              (ERC-721 NFTs) built on Ethereum.
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default FAQ;
