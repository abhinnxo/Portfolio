import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div>
      <div id="projects" className="text-scaryblack bg-greywhite py-24 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between ">
            <h1 className="text-6xl font-bold mb-20">Projects</h1>
            <Link href="/" className="h-fit">
              <BsArrowLeft className="text-4xl cursor-pointer mt-5" />
            </Link>
          </div>
          <ProjectCard
            image={"/BOB-Mockup.png"}
            title={"Battle of Brains"}
            desc={
              "In this web-based multiplayer board game, players can form teams and collaborate to achieve a common goal. The objective for each team is to deduce as many words as possible, guided by hints provided by their respective team leaders. Accumulating points for correct guesses is the key to success, with the team amassing the highest number of points emerging as the victor at the game's conclusion."
            }
            tags={["ReactJS", "ExpressJS", "Bootstrap", "Socket.io", "Axios"]}
            width={500}
            height={500}
            links={[
              "https://github.com/abhinnxo/BOB-frontend",
              "https://battleofbrains.netlify.app/",
            ]}
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
            links={[
              "https://github.com/abhinnxo/thedukaandar",
              "https://thedukaandar.netlify.app/",
            ]}
          />{" "}
          <ProjectCard
            image={"/roll-a-dice-Mockup.png"}
            title={"Roll A Dice"}
            desc={"Roll upto Three dices at once, all in your phone"}
            tags={["Java", "XML"]}
            width={500}
            height={0}
            links={[
              "https://github.com/abhinnxo/Roll-a-Dice.",
              "https://play.google.com/store/apps/details?id=com.abhinnkrishn.honey1.mysnakes&hl=en&gl=US",
            ]}
          />
          <ProjectCard
            image={"/chat-room-Mockup.png"}
            title={"Chat Room"}
            desc={
              "A Group chat where multiple people can join the conversatin after Logging in with their Google account."
            }
            tags={["ReactJS", "Firebase Google Auth", "Firestore", "Bootstrap"]}
            width={500}
            height={500}
            links={[
              "https://github.com/abhinnxo/chat-room.",
              "https://react-chat-app-21.web.app/",
            ]}
          />
          <ProjectCard
            image={"/chat-room-Mockup.png"}
            title={"Astrominia"}
            desc={
              "Every time you open a new tab in your Chrome browser, you're greeted with a fresh image and an inspiring quote sourced from NASA's API for captivating visuals a Quotes API for thought-provoking wisdom."
            }
            tags={["HTML", "CSS", "APIs"]}
            width={500}
            height={500}
            links={[
              "https://github.com/abhinnxo/Astrominia-Chrome-Extension.",
              "https://chromewebstore.google.com/detail/new-tab-by-astrominia/ophifjbfjhcmphoigfhmbmcbemlmbgej",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
