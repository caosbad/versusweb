import React from "react";

import Logo from "../../assets/vslogo.svg";
import Loading from "../general/Loading";

const StatusModule = ({ status, close }) => {
  const { msg, allowClose } = status;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black-500 bg-opacity-20" />
      <div className="rounded bg-white w-96 max-w-full text-center relative z-50 py-16 px-6 max-h-screen">
        <div className="h-64 pt-2 flex justify-center items-center relative">
          {allowClose ? "" : <Loading className="status-module-loader" />}
          <Logo className="absolute" />
        </div>
        <div className="text-xl">{msg}</div>
        {allowClose && (
          <button className="mt-4 standard-button" onClick={close}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default StatusModule;
