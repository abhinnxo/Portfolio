import Image from "next/image";
import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Tags from "./Tags";

const ProjectCard = ({ image, title, desc, width, height, tags }) => {
  const mouseEnterOnProjectLink = (e) => {
    if (e.target.children[1]) e.target.children[1].classList.remove("hidden");
  };
  const mouseLeaveOnProjectLink = (e) => {
    if (e.target.children[1]) e.target.children[1].classList.add("hidden");
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
          <div
            className="hoverToOpen flex gap-2 p-2 rounded-full emboss-inner cursor-pointer"
            onClick={(e) => console.log("clicked")}
            onMouseEnter={(e) => mouseEnterOnProjectLink(e)}
            onMouseLeave={(e) => mouseLeaveOnProjectLink(e)}
          >
            <BsGithub className="text-3xl" />
            <span className="hidden mt-1">
              Click to open!&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div
            className="hoverToOpen flex gap-2 p-2 rounded-full emboss-inner cursor-pointer"
            onClick={(e) => console.log("clicked")}
            onMouseEnter={(e) => mouseEnterOnProjectLink(e)}
            onMouseLeave={(e) => mouseLeaveOnProjectLink(e)}
          >
            <BsLink45Deg className="text-3xl" />
            <span className="hidden mt-1">
              Click to open!&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
