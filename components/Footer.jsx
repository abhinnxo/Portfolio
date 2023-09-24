import React from "react";
import Image from "next/image";
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-darkgreen py-16 ">
      <div className="mx-auto max-w-md">
        <Image
          className="mx-auto"
          src="/swiggly.png"
          height={150}
          width={150}
          alt="Swiggly"
        />
        <div className="sm:flex justify-around">
          <p className="mt-1.5 text-center pb-4">@2023, Abhinn Krishn</p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:abhinnk21@gmail.com">
              <MdAlternateEmail className="text-3xl cursor-pointer" />
            </a>
            <Link href="https://github.com/abhinnxo/" passHref legacyBehavior>
              <a target="_blank">
                <BsGithub className="text-3xl cursor-pointer" />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abhinnkrishn/"
              passHref
              legacyBehavior
            >
              <a target="_blank">
                <BsLinkedin className="text-3xl cursor-pointer" />
              </a>
            </Link>
            <Link href="https://twitter.com/abhinnxo/" passHref legacyBehavior>
              <a target="_blank">
                <BsTwitter className="text-3xl cursor-pointer" />
              </a>
            </Link>
            <Link
              href="https://instagram.com/abhinnxo/"
              passHref
              legacyBehavior
            >
              <a target="_blank">
                <BsInstagram className="text-3xl cursor-pointer" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
