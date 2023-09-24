import React from "react";
import { ImEye } from "react-icons/im";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="bg-greywhite py-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-scaryblack">Projects</h1>
        <div className=" mx-auto w-[100%] mt-20">
          <ProjectCard
            image={"/BOB-Mockup.png"}
            title={"Battle of Brains"}
            desc={
              "In this web-based multiplayer board game, players can form teams and collaborate to achieve a common goal. The objective for each team is to deduce as many words as possible, guided by hints provided by their respective team leaders. Accumulating points for correct guesses is the key to success, with the team amassing the highest number of points emerging as the victor at the game's conclusion."
            }
            tags={["ReactJS", "ExpressJS", "Bootstrap", "Socket.io", "Axios"]}
            width={500}
            height={500}
          />
          <ProjectCard
            image={"/dukaan-Mockup.png"}
            title={"The Dukaandar Store"}
            desc={
              "An aesthetically pleasing e-commerce website, meticulously crafted using ReactJS, Bootstrap, Firebase Google Authentication, and JSON integration, seamlessly navigated with React Router. This website offers an array of features, including a user-friendly search bar, a seamlessly integrated cart system, and elegantly designed product search and display pages that provide an exceptional shopping experience."
            }
            tags={["ReactJS", "Firebase Google Auth", "JSON", "Bootstrap"]}
            width={500}
            height={500}
          />
          <Link
            id="view-all-projects"
            className="glow-on-hover max-2xl:mx-auto w-fit px-4 py-2 mt-12 flex justify-around font-bold text-md"
            href="/projects"
          >
            <span className="my-auto font-bold text-md">
              <ImEye style={{ fontWeight: "900" }} />
            </span>
            <span className="mt-1.5">View all Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
