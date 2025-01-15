import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-bl from-sky-950 to-blue-400">
      <div className="max-w-6xl mx-auto py-8 p-2 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold  text-white text-center md:text-start">
          GAVIN <span className=" text-orange-500">STEWART</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xs text-center">
            ©All right reserved{" "}
            <span className="uppercase ">gavin stewart</span>2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
