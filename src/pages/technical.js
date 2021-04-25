import React from "react";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

const Technical = () => {
  return (
    <Main>
      {() => (
        <>
          <Helmet>
            <title>Technical Information</title>
          </Helmet>

          <div className="py-12 bg-white">
            <div className="container">
              <h1 className="text-4xl font-bold font-lato mt-4 mb-1">
                Versus Technical Information
              </h1>
              <div className="mt-8">
                <p className="mb-4">
                  One thing that we are really proud of is the decentralized
                  nature of Versus.
                </p>
                <br />
                <p className="mb-4">
                  Versus is what we passionately refer to as a SODA. SODA stands
                  for Serverless Onchain-data Distributed Application.
                </p>
                <br />
                <p className="mb-4">
                  The nature of this type of decentralized application allows
                  for censorship resistent onchain NFTs. Since the entirety of
                  an NFT is stored on the Flow blockchain it will never change
                  or lose its image. Versus NFTs are immutable and entirely
                  under the control of it’s owner .
                </p>
                <p className="mb-4">
                  This system also means that the only way to interact with the
                  Versus application and contracts is through the spending of
                  Flow tokens from a third party wallet provider. Versus is
                  currently built to support Blocto, but in the future we should
                  be able to support any other large wallet providers. .
                </p>
                <p className="mb-4">
                  Versus contracts are entirely open-sourced at{" "}
                  <a
                    href="https://github.com/versus-flow/auction-flow-contract"
                    target="_blank"
                    className="underline"
                  >
                    https://github.com/versus-flow/auction-flow-contract
                  </a>
                </p>
                <br />
                <p className="mb-4">
                  A SODA has numerous advantages that will contribute to the
                  longevity of the Versus platform.
                </p>
                <p className="mb-4">
                  Versus should not face the scaling issues that some
                  traditional blockchain dapps have faced. As long as wallet
                  providers and the Flow blockchain are able to accommodate
                  increasing demand Versus will effortlessly scale.
                </p>
                <p className="mb-4">
                  In the future when Versus is stably built out the keys for the
                  accounts that host the Versus contracts can theoretically be
                  discarded, creating a truly immutable system.
                </p>
                <p className="mb-4">
                  As long as the Flow blockchain exists Versus will continue to
                  thrive.
                </p>
                <p className="mb-4">
                  The first version of Versus is a combination of features that
                  we felt necessary for a viable product. We have several ideas
                  on how we can iterate over the concept and make Versus even
                  better:
                </p>
                <ol className="mb-4 list-inside list-decimal pl-6 leading-loose">
                  <li>
                    Add royalities to the art NFTs minted on Versus so that
                    secondary marketplaces can call a method on the NFT to let
                    the original artist claim a part of the total sale.
                  </li>
                  <li>
                    Protect who can instantiate the Versus marketplaces so that
                    only some accounts may do so.
                  </li>
                  <li>
                    Create a VersusClient resource that can be given to admins
                    of Versus allowing them to add new drops or settle older
                    drops.
                  </li>
                  <li>
                    Create a VersusArtistClient resource that can enable trusted
                    artists to self-serve on Versus. They could be able to add
                    their drop to the queue and eventually settle it themselves.
                  </li>
                  <li>
                    Expand Versus to other media apart from only static images
                    (This heavly relies on a solution for on-chain storage that
                    scales better than our current solution).
                  </li>
                  <li>
                    Finalize a system that will artificially limit the amount of
                    time an auction can go on for.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </>
      )}
    </Main>
  );
};

export default Technical;
