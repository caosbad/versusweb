import React, { useRef, useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";
import hero3 from "../../images/hero3.png";
import hero4 from "../../images/hero4.png";
import hero5 from "../../images/hero5.png";
import hero6 from "../../images/hero6.png";
import bigv from "../../images/bigv.png";

const Landing = () => {
  const [status, setStatus] = useState("");
  const form = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const { email } = form.current;
    try {
      const result = await addToMailchimp(email.value);
      if (result.result === "success") {
        setStatus("Thanks! You have now been subscribed");
        setTimeout(() => setStatus(""), 10000);
      } else {
        setStatus("Please enter a valid email");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (e) {
      setStatus("Please enter a valid email");
      setTimeout(() => setStatus(""), 5000);
    }
  };
  return (
    <div className="relative">
      <img src={bigv} className="bigv" />
      <div className="container grid md:grid-cols-2 py-36 relative z-10">
        <div className="flex flex-col justify-center w-full sm:w-10/12">
          <h1 className="text-7xl font-lato font-bold">
            Versus.{" "}
            <span className="font-ibm font-light tracking-tighter">
              Better for art.
            </span>
          </h1>
          <h3 className="mt-6 leading-6 w-full sm:w-10/12 max-w-full font-sourceSansPro text-xl">
            Request early access to be included in our inaugural drop.
          </h3>
          <form
            className="flex flex-col sm:block mt-6 relative w-full"
            onSubmit={handleSubmit}
            ref={form}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="bg-white border-none font-semibold outline-none placeholder-black-200 px-8 py-3 rounded-full text-black-500 text-lg w-full"
            />
            <input
              type="submit"
              className="standard-button absolute right-0 h-full px-6 text-lg"
              value="Sign Up"
            />
            <span className="absolute bottom-full left-0 w-full text-right mb-2 text-xs sm:text-sm">
              {status}
            </span>
          </form>
          <span className="mt-3 text-sm">
            *By entering your details you are signing up to our privacy policy
          </span>
        </div>
        <div className="hidden grid-flow-col grid-rows-5 grid-cols-2 sm:grid-cols-3 gap-4 h-96 mt-12 md:mt-0">
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
