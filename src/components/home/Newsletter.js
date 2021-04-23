import React, { useRef, useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Newsletter = () => {
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
        setStatus("There has been an unknown error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (e) {
      setStatus("There has been an unknown error");
      setTimeout(() => setStatus(""), 5000);
    }
  };
  return (
    <div className="container py-12 md:grid md:grid-cols-5 flex flex-col items-center">
      <div className="md:col-span-3 text-center md:text-left">
        <h2 className="text-3xl lg:text-4xl font-lato font-bold">
          Ready to get started?
        </h2>
        <h2 className="text-3xl lg:text-4xl font-ibm font-light tracking-tighter mt-2">
          Sign up or contact us
        </h2>
      </div>
      <div className="mt-6 md:mt-0 max-w-lg w-full md:max-w-none md:col-span-2">
        <form className="relative w-full" onSubmit={handleSubmit} ref={form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="placeholder-black-200 w-full text-lg bg-white text-black-500 font-semibold rounded-full border-none px-8 py-3 outline-none"
          />
          <input
            type="submit"
            className="standard-button absolute right-0 h-full px-6 text-lg"
            value="Sign Up"
          />
          <span className="absolute top-full left-0 w-full text-center mt-2">
            {status}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
