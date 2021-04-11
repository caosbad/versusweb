import React from "react";
import { Link } from "gatsby";
import { map } from "lodash";

import artist1 from "../../images/artist1.jpg";
import artist2 from "../../images/artist2.jpg";
import artist3 from "../../images/artist3.jpg";
import artist4 from "../../images/artist4.jpg";

const artists = [
  {
    image: artist1,
    firstName: "Ekaitza",
    handle: "@ekaitza_",
    text:
      "Ekaitza creates detailed cryptoart that draws inspiration from his past as well as a vision for a digital future. He collects and advises on some of the most monumental projects in NFTs. We could not be more excited to have the ability to work with such an influence in the space.",
    link: "",
  },
  {
    image: artist2,
    firstName: "Mankind",
    handle: "@rhett",
    text: `Mankind is an award winning digital artist with an eminent background in branding, digital art and advertising. He has been educating others of Crypto Art for several years. After a near death experience, a mental existential struggle began that he found echoed the pages of 'Confession' by Leo Tolstoy: “Since death is inevitable, what is the meaning of life?" He found the answer of hope through exploring, creating and sharing.`,
    link: "",
  },
  {
    image: artist3,
    firstName: "Han",
    handle: "@hanrgb",
    text: `Years of thought on how to express the inexpressible has led Han down the path of Crypto and Digital Art. When asked about the inspiration behind his simplistic designs, he responds that he does it to show "All that I can't say"`,
    link: "",
  },
  {
    image: artist4,
    firstName: "Vincent",
    lastName: "Kamp",
    handle: "@vincekamp",
    text:
      "Vince has made a name for himself in the traditional art world through painting tattoed underworld figures and gangsters. He has never before launched an artwork on a NFT platform, and we look forward to seeing what he brings to his gensis drop! If the unique side wins Vincent’s auction the winnner will have the option to receive Vince’s physical painting",
    link: "",
  },
];

const MeetTheArtists = () => {
  return (
    <div className="bg-lightGrey relative">
      <div className="py-36 container">
        <h2 className="text-4xl font-lato font-bold">
          Meet{" "}
          <span className="font-ibm font-light tracking-tighter">
            the artists
          </span>
        </h2>
        <div className="mt-9 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {map(artists, (a, index) => (
            <div key={`artist-${index}`} className="h-full flex flex-col">
              <div className="w-full h-48 rounded-t">
                <img
                  src={a.image}
                  className="w-full h-full object-cover rounded-t"
                  alt={`${a.firstName} photo`}
                />
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between rounded-b">
                <div className="pb-4">
                  <h3 className="text-2xl font-lato font-bold">
                    {a.firstName}{" "}
                    {a.lastName && (
                      <span className="font-ibm font-normal tracking-tighter">
                        {a.lastName}
                      </span>
                    )}
                  </h3>
                  <p className="font-bold font-lato">{a.handle}</p>
                  <p className="mt-3 leading-relaxed">{a.text}</p>
                </div>
                <Link to={a.link} className="font-bold underline">
                  View Profile &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheArtists;
