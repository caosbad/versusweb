import React from "react";

import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";
import hero3 from "../../images/hero3.png";
import hero4 from "../../images/hero4.png";
import hero5 from "../../images/hero5.png";
import hero6 from "../../images/hero6.png";
import bigv from "../../images/bigv.png";

const Landing = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative">
      <img src={bigv} className="bigv" />
      <div className="container grid md:grid-cols-2 py-36 relative z-10">
        <div className="flex flex-col justify-center w-10/12">
          <h1 className="text-7xl font-lato font-bold">
            Versus.{" "}
            <span className="font-ibm font-light tracking-tighter">
              Better for art.
            </span>
          </h1>
          <h3 className="mt-6 leading-6 w-10/12 max-w-full font-sourceSansPro text-xl">
            Request early access to be included in our inaugural drop.
          </h3>
          <form className="mt-6 relative w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="placeholder-black-200 w-full text-lg bg-white text-black-500 font-semibold rounded-full border-none px-8 py-3 outline-none"
            />
            <input
              type="submit"
              className="standard-button absolute right-0 h-full px-6 text-lg"
              value="Sign Up"
            />
          </form>
          <span className="mt-3 text-sm">
            *By entering your details you are signing up to our privacy policy
          </span>
        </div>
        <div className="grid grid-flow-col grid-rows-5 grid-cols-2 sm:grid-cols-3 gap-4 h-96 mt-12 md:mt-0">
          <div className="rounded row-span-3">
            <img src={hero1} className="object-cover h-full w-full rounded" />
          </div>
          <div className="rounded row-span-2">
            <img src={hero4} className="object-cover h-full w-full rounded" />
          </div>
          <div className="rounded row-span-2">
            <img src={hero2} className="object-cover h-full w-full rounded" />
          </div>
          <div className="rounded row-span-3">
            <img src={hero5} className="object-cover h-full w-full rounded" />
          </div>
          <div className="rounded row-span-3 hidden sm:block">
            <img src={hero3} className="object-cover h-full w-full rounded" />
          </div>
          <div className="rounded row-span-2 hidden sm:block">
            <img src={hero6} className="object-cover h-full w-full rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
