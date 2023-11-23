import React from "react";
import Image from "next/image";

const Motto = () => {
  return (
    <div
      id="motto"
      className="flex bg-darkgreen pt-24 py-40 px-6 min-h-[100vh]"
    >
      <div className="container mx-auto my-auto">
        <Image
          src="/flower.png"
          id="flower"
          width={100}
          height={100}
          alt="flower"
        />
        <p id="about__heading" className="text-3xl">
          Motto
        </p>
        <h1
          id="about__para"
          className="font-abril text-6xl mt-20 leading-normal"
        >
          I aim to create jaw-dropping user{" "}
          <span className="text-furfle ">UIs</span> that captivate and mesmerize
          with the enchanting power of{" "}
          <span className="text-bloodred">ReactJS</span>. I strive to elevate my{" "}
          <span className="text-zestyorange">designs</span> to new heights and
          leave users spellbound with my{" "}
          <span className="text-turtle">creations</span>.
        </h1>
      </div>
    </div>
  );
};

export default Motto;

import React from "react";
import Image from "next/image";

const Motto = () => {
  return (
    <div
      id="motto"
      className="flex bg-darkgreen pt-24 py-40 px-6 min-h-[100vh]"
    >
      <div className="container mx-auto my-auto">
        <Image
          src="/flower.png"
          id="flower"
          width={100}
          height={100}
          alt="flower"
        />
        <p id="about__heading" className="text-3xl">
          Motto
        </p>
        <h1
          id="about__para"
          className="font-abril text-6xl mt-20 leading-normal"
        >
          I aim to create jaw-dropping user{" "}
          <span className="text-furfle ">UIs</span> that captivate and mesmerize
          with the enchanting power of{" "}
          <span className="text-bloodred">ReactJS</span>. I strive to elevate my{" "}
          <span className="text-zestyorange">designs</span> to new heights and
          leave users spellbound with my{" "}
          <span className="text-turtle">creations</span>.
        </h1>
      </div>
    </div>
  );
};

export default Motto;
