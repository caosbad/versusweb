import React, { useRef, useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import NotifBar from "../general/NotifBar";

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
        setStatus({
          type: "success",
          text: "Thanks! You have now been subscribed",
        });
        setTimeout(() => setStatus(null), 10000);
      } else {
        setStatus({ type: "error", text: "Please enter a valid email" });
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (e) {
      setStatus({ type: "error", text: "Please enter a valid email" });
      setTimeout(() => setStatus(null), 5000);
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
          <div className="flex flex-col sm:block relative w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="placeholder-black-200 w-full text-lg bg-white text-black-500 font-semibold rounded-full border-none px-8 py-3 outline-none"
            />
            <input
              type="submit"
              className="standard-button border-button absolute right-0 h-full px-6 text-lg"
              value="Sign Up"
            />
          </div>
          {status && <NotifBar text={status.text} type={status.type} />}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
