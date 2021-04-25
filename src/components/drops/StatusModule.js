import React from "react";

import Logo from "../../assets/vslogo.svg";
import Loading from "../general/Loading";

const StatusModule = ({ status, close }) => {
  const { msg, subtext, allowClose } = status;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black-500 bg-opacity-20" />
      <div className="rounded bg-cream-500 max-w-md w-full text-center relative z-50 py-12 px-6 max-h-screen">
        <div className="flex justify-center relative mb-8">
          <Logo />
        </div>
        <div className="text-3xl font-bold">{msg}</div>
        <div className="font-thin mt-4 w-10/12 mx-auto">{subtext}</div>
        <div className="mt-8">
          {allowClose ? (
            <button className="standard-button long-button" onClick={close}>
              Done
            </button>
          ) : (
            <Loading className="status-module-loader" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusModule;
