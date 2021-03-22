import React from "react";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container py-12 grid grid-cols-5 items-center">
      <div className="col-span-3">
        <h2 className="text-4xl font-lato font-bold">Ready to get started?</h2>
        <h2 className="text-4xl font-ibm font-light tracking-tighter mt-2">
          Sign up or contact us
        </h2>
      </div>
      <div className="col-span-2">
        <form className="relative w-full" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

export default Newsletter;
