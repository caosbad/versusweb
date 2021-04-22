export const fetchVersusDrop = `
// This script checks that the accounts are set up correctly for the marketplace tutorial.
//

//emulator
// import NonFungibleToken, Content, Art, Auction, Versus from 0xf8d6e0586b0a20c7

//testnet
import Auction, Versus from 0xbc08417e9d472f2e

/*
  Script used to get the first active drop in a versus 
 */
pub fun main(marketplaceAddress:Address, dropID: UInt64) : Versus.DropStatus {

    let account = getAccount(marketplaceAddress)
    let versusCap=account.getCapability<&{Versus.PublicDrop}>(Versus.CollectionPublicPath)!
    let versus= versusCap.borrow()!
    return versus.getStatus(dropId: dropID)
}
`;

export const fetchVersusArt = `
//testnet
import Art from 0xbc08417e9d472f2e

pub fun main(marketplaceAddress:Address, artId: UInt64) : String? {
  return Art.getContentForArt(address: marketplaceAddress, artId: artId)
}
`;
