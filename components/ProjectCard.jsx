import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Tags from "./Tags";
import Link from "next/link";

const ProjectCard = ({ image, title, desc, width, height, tags, links }) => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const router = useRouter();

  const handleMouseEnterGithub = () => {
    setIsGithubHovered(true);
  };

  const handleMouseLeaveGithub = () => {
    setIsGithubHovered(false);
  };

  const handleMouseEnterLink = () => {
    setIsLinkHovered(true);
  };

  const handleMouseLeaveLink = () => {
    setIsLinkHovered(false);
  };

  const handleClick = (url) => {
    console.log("link Clicked");
    window.open(url, "_blank");
  };

  return (
    <div className="emboss-inner relative flex max-md:block justify-around bg-greywhite text-scaryblack px-10 py-10 mb-10 rounded-2xl">
      <div className="text-center">
        <Image
          alt="mockup image"
          src={image}
          className="mx-auto"
          height={height}
          width={width}
        />
      </div>
      <div className="sm:w-[500px] max-md:mx-auto max-md:mt-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p id="project__desc" className="text-lg mt-4">
          {desc}
        </p>
        <div className="flex gap-1 flex-wrap mt-4">
          {tags && tags.map((tag, index) => <Tags key={index} text={tag} />)}
        </div>
        <div className="lg:absolute bottom-10 flex gap-6 mt-6">
          <Link href={links[0]} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div
                className={`hoverToOpen flex gap-2 p-2 rounded-full emboss-inner cursor-pointer unselectable ${
                  isGithubHovered ? "expanded" : ""
                }`}
                onMouseEnter={handleMouseEnterGithub}
                onMouseLeave={handleMouseLeaveGithub}
              >
                <BsGithub className="text-3xl" />
                <span
                  className={`mt-1 ${isGithubHovered ? "visible" : "hidden"}`}
                >
                  Click to open!&nbsp;&nbsp;&nbsp;
                </span>
              </div>
            </a>
          </Link>
          <Link href={links[1]} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div
                className={`hoverToOpen flex gap-2 p-2 rounded-full emboss-inner cursor-pointer unselectable ${
                  isLinkHovered ? "expanded" : ""
                }`}
                onMouseEnter={handleMouseEnterLink}
                onMouseLeave={handleMouseLeaveLink}
              >
                <BsLink45Deg className="text-3xl" />
                <span
                  className={`mt-1 ${isLinkHovered ? "visible" : "hidden"}`}
                >
                  Click to open!&nbsp;&nbsp;&nbsp;
                </span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
