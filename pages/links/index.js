import Link from "next/link";
import React from "react";
import {
  BsDownload,
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
const Card = ({ icon, text, link }) => {
  return (
    <a href={link} target="_blank" className="cards">
      <div className="flex mx-auto min-w-[300px] w-[25%] bg-white px-8 mb-10 py-4 rounded-lg cursor-pointer">
        <div className="flex justify-start my-auto font-bold w-[100px]">
          {icon}
        </div>
        <div className="flex justify-end pl-4 mt-1.5">{text}</div>
      </div>
    </a>
  );
};

const index = () => {
  return (
    <div className="min-h-[100vh] pb-32 bg-offwhite">
      <h1 className="text-scaryblack text-7xl py-32 text-center font-bolder">
        Abhinn&apos;s Links
      </h1>
      <div>
        <Card
          icon={<BsDownload style={{ fontWeight: "900" }} />}
          text={"Download Resume"}
          link={"/Abhinn-Krishn-Resume.pdf"}
        />
        <Card
          icon={<BsInstagram style={{ fontWeight: "900" }} />}
          text={"Instagram"}
          link={"https://www.instagram.com/abhinnxo/"}
        />
        <Card
          icon={<BsTwitter style={{ fontWeight: "900" }} />}
          text={"Twitter"}
          link={"https://twitter.com/abhinnxo/"}
        />{" "}
        <Card
          icon={<BsLinkedin style={{ fontWeight: "900" }} />}
          text={"Linkedin"}
          link={"https://www.linkedin.com/in/abhinnkrishn/"}
        />{" "}
        <Card
          icon={<BsGithub style={{ fontWeight: "900" }} />}
          text={"Github"}
          link={"https://github.com/abhinnxo/"}
        />{" "}
        <Card
          icon={<MdAlternateEmail style={{ fontWeight: "900" }} />}
          text={"abhinnk21@gmail.com"}
          link={"mailto:abhinnk21@gmail.com"}
        />
      </div>
    </div>
  );
};

export default index;
