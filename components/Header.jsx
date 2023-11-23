import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="absolute sm:right-12 max-sm:left-0 max-sm:right-0 top-12 max-sm:block flex justify-between w-fit mx-auto text-xl">
      <div className="flex justify-between max-sm:mb-4">
        <Link
          href={"/#motto"}
          className="underlineeffect hover:text-white sm:ml-12"
        >
          <span className="underlineeffect">
            <span className="text-terminalgreen">01.</span> Motto
          </span>
        </Link>
        <Link
          href={"/#projects"}
          className="underlineeffect hover:text-white ml-12"
        >
          <span className="underlineeffect">
            <span className="text-terminalgreen">02.</span> Projects
          </span>
        </Link>
      </div>
      <div className="flex justify-between">
        <Link
          href={"/#experience"}
          className="underlineeffect hover:text-white sm:ml-12"
        >
          <span className="underlineeffect">
            <span className="text-terminalgreen">03.</span> Experience
          </span>
        </Link>
        <Link
          href={"/#contact"}
          className="underlineeffect hover:text-white ml-12"
        >
          <span className="underlineeffect">
            <span className="text-terminalgreen">04.</span> Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
