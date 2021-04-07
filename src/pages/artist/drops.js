import React from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import * as sdk from "@onflow/sdk";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";
import DropModule from "../../components/drops/DropModule";
import { fetchVersusDrop } from "./transactions";

const Drops = () => {
  //   useEffect(() => {
  //     async function fetchDrop() {
  //       const response = await fcl.send([
  //         fcl.script(fetchVersusDrop),
  //         sdk.args([sdk.arg(marketplaceAccount, t.Address)]),
  //       ]);
  //       const dropResponse = await fcl.decode(response);
  //  //     console.log(dropResponse)
  //       handleDrop(dropResponse);
  //       handleBidTransaction(null); //we mark that the current transaction has been taken into account
  //     }
  //     if (drop == null || bidTransaction != null) {
  //       fetchDrop();
  //     }
  //   }, [drop, marketplaceAccount, bidTransaction]);
  return (
    <Main>
      <ArtistHeader />
      <DropModule />
      <ArtistSocial />
    </Main>
  );
};

export default Drops;
