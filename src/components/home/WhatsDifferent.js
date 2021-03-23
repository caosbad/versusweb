import React from "react";
import { map } from "lodash";

import graytriangle from "../../images/graytriangle.png";

const features = [
  {
    image: "",
    title: "Morbi ipsum lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
  },
  {
    image: "",
    title: "Morbi ipsum lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
  },
  {
    image: "",
    title: "Morbi ipsum lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
  },
  {
    image: "",
    title: "Morbi ipsum lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adpiscing elit.",
  },
];

const WhatsDifferent = () => {
  return (
    <div className="bg-white relative">
      <img src={graytriangle} className="absolute" />
      <div className="container grid sm:grid-cols-2 py-36 relative z-10">
        <div className="w-10/12">
          <h2 className="text-4xl font-lato font-bold">
            What&apos;s{" "}
            <span className="font-ibm font-light tracking-tighter">
              different?
            </span>
          </h2>
          <h3 className="mt-6 leading-6 w-10/12 max-w-full font-sourceSansPro text-xl">
            Request early access to be included in our inaugural drop.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-12">
          {map(features, (f, index) => (
            <div key={`feature-${index}`}>
              <div className="bg-black-50 h-16 w-16 rounded-full"></div>
              <div className="mt-3">
                <h4 className="font-bold">{f.title}</h4>
                <div className="my-2 w-20 h-px bg-black-500" />
                <p className="text-black-300">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsDifferent;
