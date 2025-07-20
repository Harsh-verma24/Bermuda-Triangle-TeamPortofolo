import React from "react";
import teamData from "../../data/teamData";
import { Btn } from "../../components";
const JatinKumar = ({ name }) => {
  const member = teamData.find((user) => user.name === "Jatin Kumar Verma");
  if (!member) {
    return <div>Member not found</div>;
  }
  return (
    <div className="flex flex-row px-10 place-content-evenly items-center border rounded-2xl border-violet-700">
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
          You should hire me as a UI/UX designer because I have a strong
          understanding of how to blend user needs with clean, functional
          design. I know HTML and have a foundation in programming, which helps
          me communicate effectively with developers.I also stay updated with
          design trends and tools like Figma and Adobe XD. I'm confident I can
          contribute to building interfaces that are not only visually appealing
          but also user-friendly and effective."
        </p>{" "}
        <div className="flex place-content-end mr-6  my-4">
          <Btn cnt="Hire me" />
        </div>
      </div>
    </div>
  );
};

export default JatinKumar;
