import * as fcl from "@onflow/fcl";

// import * as fcl from "@onflow/fcl"

fcl
  .config()
  //  .put("accessNode.api", "http://localhost:8080") // local Flow emulator
  //  .put("challenge.handshake", "http://localhost:8701/flow/authenticate") // local dev wallet
  .put("accessNode.api", "https://access-testnet.onflow.org") // Flow testnet
  .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn") // Blocto testnet wallet
  .put("env", "testnet");

// fcl
//   .config()
//   .put("accessNode.api", process.env.REACT_APP_ACCESS_NODE) // Flow testnet
//   .put("discovery.wallet", "http://localhost:3000/fcl/authn")
//   .put("challenge.handshake", process.env.REACT_APP_WALLET_DISCOVERY) // Blocto testnet wallet
//   .put("env", "testnet");

// .put("0xFungibleToken", process.env.REACT_APP_CONTRACT_FUNGIBLE_TOKEN)
// .put("0xNonFungibleToken", process.env.REACT_APP_CONTRACT_NON_FUNGIBLE_TOKEN)
// .put("0xKibble", process.env.REACT_APP_CONTRACT_KIBBLE)
// .put("0xKittyItemsMarket", process.env.REACT_APP_CONTRACT_KITTY_ITEMS_MARKET)
// .put("0xKittyItems", process.env.REACT_APP_CONTRACT_KITTY_ITEMS)
// 0xCONTRACT
// 0xMARKETPLACE
