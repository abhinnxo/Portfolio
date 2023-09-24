import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Motto from "../components/Motto";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Experience from "@/components/Experience";

const index = () => {
  return (
    <div className="text-offwhite">
      <Head>
        <title>Abhinn Krishn</title>
        <link rel="icon" href="/swiggly-black.png" sizes="any" />
      </Head>
      <Header />
      <Hero />
      <Motto />
      <Projects />
      <Features />
      <Experience />
      <Contact />
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Abril Fatface", cursive;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default index;
