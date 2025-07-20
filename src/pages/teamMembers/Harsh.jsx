import React from "react";
import teamData from "../../data/teamData";
import { Btn } from "../../components";
const Harsh = ({ name }) => {
  const member = teamData.find((user) => user.name === "Harsh Verma");
  if (!member) {
    return <div>Member not found</div>;
  }
  return (
    <div className="flex lg:flex-row flex-col md:flex-row px-10 place-content-evenly items-center border rounded-2xl border-violet-700">
      <div>
        <img
          src={`/images/${member.image}`}
          alt={name}
          className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-full mx-auto object-cover border-4 border-violet-400 shadow-md"
        />
      </div>
      <div className="flex flex-col px-5 py-3 w-[600px]">
        <div className="py-4 ">
          <h1 className="text-5xl italic">{member.name}</h1>
          <h1 className="text-2xl italic">{member.role}</h1>
        </div>
        <p className="text-xl italic my-2 p4">{`Skills : ${member.skill}`}</p>
        <h1 className="text-3xl italic">💬 Why Hire Me</h1>
        <p className="text-xl italic my-2 p4">
          I bring strong passion for creating clean responsive and user friendly
          interfaces using modern web technologies like React JS Tailwind CSS
          and JavaScript. I have hands on experience in building real world
          projects collaborating in teams and following best coding practices.
          What sets me apart is my eye for design attention to detail and
          ability to turn complex UI UX ideas into fully functional web
          applications. I continuously learn new tools and frameworks and I am
          confident in working with APIs optimizing performance and creating
          scalable frontends. In short I am not just a developer I care about
          how things look how they feel and how they perform.
        </p>
        <div className="flex place-content-end mr-6  my-4">
          <Btn cnt="Hire me" />
        </div>
      </div>
    </div>
  );
};

export default Harsh;
