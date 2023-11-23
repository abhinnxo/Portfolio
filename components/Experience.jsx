import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-offwhite min-h-[100vh] text-scaryblack py-16 md:py-56 px-4"
    >
      <div className="md:container mx-auto">
        <h1 className="text-6xl font-bold mb-20">Experience</h1>
        {/* second job */}
        <div className="md:flex mb-10">
          <div className="w-[250px]">
            <p className="font-semibold border-l-4 border-terminalgreen md:pl-4 pl-2 max-md:mb-2 max-md:text-grey-500 max-md:text-sm">
              Aug 2023 - Present
            </p>
          </div>
          <div id="exp__company" className="w-fit">
            <h3 className="font-bold text-xl">Doorpix</h3>
            <h6 className="font-medium text-lg opacity-75 mb-6">
              Frontend Web Developer
            </h6>
            <div className="max-w-[900px]">
              <li>
                Leveraging the power of ReactJS and NextJS I create responsive
                front-end interfaces. This involves utilizing React components,
                managing application states efficiently with hooks for superior
                user experiences across diverse platforms and browsers.
              </li>
              <li>
                Incorporating libraries like chartJS, Tailwind CSS, Bootstrap,
                etc.
              </li>
              <li>Making APIs talk to the server.</li>
              <li>
                Modernizing Legacy User Interfaces (UIs) by applying
                contemporary design pattern and integrating responsive design
                principles.
              </li>
            </div>
          </div>
        </div>
        {/* Job One */}
        <div className="md:flex mb-10">
          <div className="w-[250px]">
            <p className="font-semibold border-l-4 border-terminalgreen md:pl-4 pl-2 max-md:mb-2 max-md:text-grey-500 max-md:text-sm">
              Aug 2021 - Oct 2021
            </p>
          </div>
          <div id="exp__company" className="w-fit">
            <h3 className="font-bold text-xl">Madiee Games</h3>
            <h6 className="font-medium text-lg opacity-75 mb-6">
              Frontend Web Developer Intern
            </h6>
            <div className="max-w-[900px]">
              <li>
                Developed a web-based multiplayer board game enabling multiple
                players to join and participate in teams.
              </li>
              <li>
                Translated high-fidelity designs into responsive front-end using
                ReactJS and Bootstrap.
              </li>
              <li>
                Established API endpoints and integrated Web Sockets for
                seamless communication between the frontend and backend.
              </li>
              <li>
                Played a pivotal role in constructing the server using ExpressJS
                and contributed to shaping key aspects of the game logic.
              </li>
              <li>
                Successfully deployed the project&apos;s frontend and server on
                Vercel/Heroku for optimal accessibility and performance.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
