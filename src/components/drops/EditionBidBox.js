import React from "react";

const EditionBidBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-cream-500 text-center p-8 relative w-full rounded-lg flex flex-col sm:h-120">
      <div className="flex-1">
        <div className="mb-6">
          <span className="text-xl font-light text-mediumGrey">? / 25</span>
          <h3 className="text-2xl font-bold">Own the Edition</h3>
          <p className="mt-2">Mint number randomized</p>
          <span className="text-mediumGrey text-sm">
            Winners recieve a randomly
            <br /> generated numbered edition
          </span>
        </div>
        <div className="mt-8">
          <p className="text-xl text-mediumGrey opacity-60">25 bids of:</p>
          <p className="text-3xl font-bold">$400</p>
          <p className="text-lg">
            (Combined total: <span className="font-bold">$10,000</span>)
          </p>
        </div>
      </div>
      <div className="mt-12 sm:mt-0">
        <form
          className="relative w-full uppercase flex flex-col sm:block"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            placeholder="$400 Bid"
            className="placeholder-black-200 w-full bg-white text-black-500 font-semibold rounded-full border-none px-8 py-3 outline-none"
          />
          <input
            type="submit"
            className="standard-button small-button mt-2 sm:mt-0 sm:absolute right-0 h-full px-6"
            value="Place Bid"
          />
        </form>
      </div>
    </div>
  );
};

export default EditionBidBox;