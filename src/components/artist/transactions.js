import * as fcl from "@onflow/fcl";

export const fetchVersusDrop = `
// This script checks that the accounts are set up correctly for the marketplace tutorial.
//

//emulator
// import NonFungibleToken, Content, Art, Auction, Versus from 0xf8d6e0586b0a20c7

//testnet
import Auction, Versus from 0xCONTRACT

/*
  Script used to get the first active drop in a versus 
 */
pub fun main(dropID: UInt64) : Versus.DropStatus {
		return Versus.getDrop(dropID)!
}
`;

export const fetchVersusArt = `
//testnet
import Versus from 0xCONTRACT

pub fun main(dropId: UInt64) : String {
  return Versus.getArtForDrop(dropId)!
}
`;

export const fetchMyArt = `
/*
  This script will check an address and print out its FT, NFT and Versus resources
 */
import Art from 0xCONTRACT

pub fun main(address:Address) : [Art.ArtData] {
    return Art.getArt(address: address)
}
`;

export const fetchOneArt = `
import Versus, Art from 0xCONTRACT

pub fun main(address:Address, artId:UInt64) : String? {
  return Art.getContentForArt(address: address, artId: artId)
}`;

export const fetchOneUser = `
import FungibleToken from 0xFungibleToken

/*
  This script will check an address and print out its FT, NFT and Versus resources
 */
pub fun main(address:Address) : UFix64 {
    // get the accounts' public address objects
    let account = getAccount(address)
    let balance = 0.0
    
    if let vault= account.getCapability(/public/flowTokenBalance).borrow<&{FungibleToken.Balance}>() {
       return vault.balance
    }

    return balance

}
`;

export const connectArtCollection = `
import NonFungibleToken from 0xNonFungibleToken
import Art from 0xCONTRACT

//This transaction will setup a drop in a versus auction
transaction() {
    prepare(account: AuthAccount) {
        account.save<@NonFungibleToken.Collection>(<- Art.createEmptyCollection(), to: Art.CollectionStoragePath)
        account.link<&{Art.CollectionPublic}>(Art.CollectionPublicPath, target: Art.CollectionStoragePath)
    }

}
`;

export const checkForArtConnection = `
import Art from 0xCONTRACT

pub fun main(address: Address): Bool {
  let account = getAccount(address)
  var collectionCap = account.getCapability<&{Art.CollectionPublic}>(Art.CollectionPublicPath)
  return collectionCap.check()
}
`;
