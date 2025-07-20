import React from "react";
import { SectionWrapper } from "../components";
import Team from "./Team";
import teamData from "../data/teamData";
import { TeamCard } from "../components";

const About = () => {
  const team = teamData;
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 via-black to-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto px-4 my-5 py-20 ">
          <h2 className="text-3xl font-bold text-white mb-6">About Us</h2>
          <p className="text-gray-300 text-2xl italic">
            We are Team Bermuda Triangle, a dynamic trio of tech innovators from
            the University School of Information and Communication Technology
            (USICT). Our team is united by a shared passion for mystery,
            creativity, and technology. Through this project, we aim to blend
            fact with curiosity as we explore the unexplained events and
            theories surrounding the infamous Bermuda Triangle. Our team members
            bring together a unique mix of skills:
          </p>
          <div className="flex flex-wrap gap-10 my-15 justify-center">
            {team.map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
          <p className="text-gray-300 text-2xl italic">
            Together, we’ve built more than just a project—we’ve created a
            digital space where users can explore the myths, stories, and
            scientific theories behind the Bermuda Triangle, all while
            demonstrating our abilities in modern web development and design.
            This project reflects not only our technical capabilities but also
            our ability to collaborate, innovate, and tell stories that
            captivate and inform.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
