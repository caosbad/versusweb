import * as fcl from "@onflow/fcl";

// this is for testnet
// import FungibleToken from 0x9a0766d93b6608b7
// import NonFungibleToken from 0x631e88ae7f1d7c20
// import Art, Auction, Versus from 0xCONTRACT

// below is for emulator
// import FungibleToken from 0xee82856bf20e2aa6
// import Art, Auction, Versus, NonFungibleToken from 0xf8d6e0586b0a20c7

export const bidTransaction = `
import FungibleToken from 0x9a0766d93b6608b7
import NonFungibleToken from 0x631e88ae7f1d7c20
import Art, Auction, Versus from 0xd5ee212b0fa4a319
/*
    Transaction to make a bid in a marketplace for the given dropId and auctionId
 */
transaction(marketplace: Address, dropId: UInt64, auctionId: UInt64, bidAmount: UFix64) {
    // reference to the buyer's NFT collection where they
    // will store the bought NFT
    let vaultCap: Capability<&{FungibleToken.Receiver}>
    let collectionCap: Capability<&{Art.CollectionPublic}> 
    // Vault that will hold the tokens that will be used
    // to buy the NFT
    let temporaryVault: @FungibleToken.Vault
    prepare(account: AuthAccount) {
        // get the references to the buyer's Vault and NFT Collection receiver
        var collectionCap = account.getCapability<&{Art.CollectionPublic}>(Art.CollectionPublicPath)
        // if collection is not created yet we make it.
        if !collectionCap.check() {
            // store an empty NFT Collection in account storage
            account.save<@NonFungibleToken.Collection>(<- Art.createEmptyCollection(), to: Art.CollectionStoragePath)
            // publish a capability to the Collection in storage
            account.link<&{Art.CollectionPublic}>(Art.CollectionPublicPath, target: Art.CollectionStoragePath)
        }
        self.collectionCap=collectionCap
        
        self.vaultCap = account.getCapability<&{FungibleToken.Receiver}>(/public/flowTokenReceiver)
                   
        let vaultRef = account.borrow<&FungibleToken.Vault>(from: /storage/flowTokenVault)
            ?? panic("Could not borrow owner's Vault reference")
        // withdraw tokens from the buyer's Vault
        self.temporaryVault <- vaultRef.withdraw(amount: bidAmount)
    }
    execute {
        // get the read-only account storage of the seller
        let seller = getAccount(marketplace)
        // get the reference to the seller's sale
        let versusRef = seller.getCapability(Versus.CollectionPublicPath)
                         .borrow<&{Versus.PublicDrop}>()
                         ?? panic("Could not borrow seller's sale reference")
        versusRef.placeBid(dropId: dropId, auctionId: auctionId, bidTokens: <- self.temporaryVault, vaultCap: self.vaultCap, collectionCap: self.collectionCap)
    }
}`;

const noop = async () => {};

export const tx = async (mods = [], opts = {}) => {
  const onStart = opts.onStart || noop;
  const onSubmission = opts.onSubmission || noop;
  const onUpdate = opts.onUpdate || noop;
  const onSuccess = opts.onSuccess || noop;
  const onError = opts.onError || noop;
  const onComplete = opts.onComplete || noop;
  try {
    onStart();
    var txId = await fcl.send(mods).then(fcl.decode);
    console.info(
      `%cTX[${txId}]: ${fvsTx(await fcl.config().get("env"), txId)}`,
      "color:purple;font-weight:bold;font-family:monospace;"
    );
    onSubmission(txId);
    var unsub = await fcl.tx(txId).subscribe(onUpdate);
    var txStatus = await fcl.tx(txId).onceSealed();
    unsub();
    console.info(
      `%cTX[${txId}]: ${fvsTx(await fcl.config().get("env"), txId)}`,
      "color:green;font-weight:bold;font-family:monospace;"
    );
    await onSuccess(txStatus);
    return txStatus;
  } catch (error) {
    console.log("foo");
    console.error(
      `TX[${txId}]: ${fvsTx(await fcl.config().get("env"), txId)}`,
      error
    );
    onError(error);
  } finally {
    await onComplete(txStatus);
  }
};

const fvsTx = (env, txId) => `https://flow-view-source.com/${env}/tx/${txId}`;
