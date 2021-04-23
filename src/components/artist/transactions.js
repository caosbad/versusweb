export const fetchVersusDrop = `
// This script checks that the accounts are set up correctly for the marketplace tutorial.
//

//emulator
// import NonFungibleToken, Content, Art, Auction, Versus from 0xf8d6e0586b0a20c7

//testnet
import Auction, Versus from 0xe193e719ae2b5853

/*
  Script used to get the first active drop in a versus 
 */
pub fun main(dropID: UInt64) : Versus.DropStatus {
		return Versus.getDrop(dropID)!
}
`;

export const fetchVersusArt = `
//testnet
import Versus from 0xe193e719ae2b5853

pub fun main(dropId: UInt64) : String? {
  return Versus.getArtForDrop(dropId)
}
`;
