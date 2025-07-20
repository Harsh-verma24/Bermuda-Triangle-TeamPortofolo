import React from "react";
import teamData from "../../data/teamData";
import { Btn } from "../../components";
const Jatin = ({ name }) => {
  const member = teamData.find((user) => user.name === "Jatin Mahour");
  if (!member) {
    return <div>Member not found</div>;
  }
  return (
    <div className="flex flex-row px-10 py-10 place-content-evenly items-center border rounded-2xl border-violet-700">
      <div>
        <img
          src={`/images/${member.image}`}
          alt={name}
          className="w-[400px] h-[400px] rounded-full mx-auto object-cover border-4 border-violet-400 shadow-md"
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
          "You should hire me because I'm a results-driven backend developer
          passionate about crafting robust, scalable solutions. I excel at
          translating complex requirements into efficient code, ensuring your
          systems are performant and reliable, ultimately driving your business
          forward."
        </p>{" "}
        <div className="flex place-content-end mr-6  my-4">
          <Btn cnt="Hire me" />
        </div>
      </div>
    </div>
  );
};
export default Jatin;
