export const fetchVersusDrop = `
// This script checks that the accounts are set up correctly for the marketplace tutorial.
//

//emulator
// import NonFungibleToken, Content, Art, Auction, Versus from 0xf8d6e0586b0a20c7

//testnet
import Auction, Versus from 0xd5ee212b0fa4a319

/*
  Script used to get the first active drop in a versus 
 */
pub fun main(dropID: UInt64) : Versus.DropStatus {
		return Versus.getDrop(dropID)!
}
`;

export const fetchVersusArt = `
//testnet
import Versus from 0xd5ee212b0fa4a319

pub fun main(dropId: UInt64) : String {
  return Versus.getArtForDrop(dropId)!
}
`;

export const fetchMyArt = `
/*
  This script will check an address and print out its FT, NFT and Versus resources
 */
import Art from 0xd5ee212b0fa4a319

pub fun main(address:Address) : [Art.ArtData] {
    return Art.getArt(address: address)
}
`;

export const fetchOneArt = `
import Versus, Art from 0xd5ee212b0fa4a319

pub fun main(address:Address, artId:UInt64) : String? {
  return Art.getContentForArt(address: address, artId: artId)
}`;
