import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="hero" className="flex py-32 min-h-[100vh] w-[100%]">
      <div className="mx-auto my-auto z-10 sm:px-10">
        <h3 className="max-2xl:text-center text-xl font-bold -mb-6 text-terminalgreen">
          Hi, my name is
        </h3>
        <h1 className="max-2xl:text-center max-sm:text-8xl font-black text-9xl mt-6">
          Abhinn Krishn.
        </h1>
        <h2 className="max-2xl:text-center font-bold max-sm:text-4xl px-4 text-5xl opacity-50 mt-6">
          I&apos;m a Frontend Web Developer.
        </h2>
        <a
          id="resume"
          className="glow-on-hover max-2xl:mx-auto w-fit px-4 py-2 mt-12 flex justify-around font-bold text-md"
          href="/ABHINN_KRISHN_RESUME.pdf"
          download="ABHINN_KRISHN_RESUME.pdf"
        >
          <span className="my-auto font-bold text-md">
            <BsDownload style={{ fontWeight: "900" }} />
          </span>
          <span className="mt-1.5">Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
