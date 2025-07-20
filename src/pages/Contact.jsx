import React from "react";
import { Btn, SectionWrapper, TeamCard } from "../components";
import teamData from "../data/teamData";
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";
const Contact = () => {
  const team = teamData;
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 via-black to-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto px-4 py-20 ">
          <h2 className="text-3xl font-bold text-white mb-6">📬 Contact Us</h2>
          <p className="text-gray-300 text-lg">
            We’d love to hear from you! Whether you have questions about the
            Bermuda Triangle, feedback on our project, or just want to connect —
            feel free to reach out
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">🏫 College</h2>
          <img
            className="lg:w-[600px] object-cover md:w-[400px] w-[200px]"
            src="/images/College.jpeg"
            alt="college"
          />
          <h2 className="text-2xl font-bold text-white mb-6">
            University School of Information and Communication Technology
            (USICT)
          </h2>
          <h2 className="text-xl font-bold text-white mb-6">
            GGSIPU, Delhi, India
          </h2>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            🧑‍💻 Connect with Team Members
          </h2>
          <div className="flex flex-col gap-10 justify-center">
            {team.map((member, idx) => {
             return (<div key={idx} className="flex flex-col md:flex-row border border-violet-700 p-10 rounded-2xl gap-10 m-10 items-center">
                <div>
                  <img src={`/images/${member.image}`} alt=""
                   className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-[50%] object-cover" />
                </div>
                <div>
                  <h1 className="text-white text-4xl my-2 ">{member.name}</h1>
                  <h2 className="text-white text-2xl my-2 ">{member.role}</h2>
                  <h2 className="text-white text-xl my-2 ">{member.skill}</h2>

                  <div className="flex place-content-end flex-col">
                    <div className="flex place-content-evenly bg-violet-700 max-w-[200px]  py-2 text-black rounded-2xl my-2">
                    <NavLink className="hover:text-white" to={member.github}>
                      <Github />
                    </NavLink>
                    <NavLink className="hover:text-white" to={member.linkedin}>
                      <Linkedin />
                    </NavLink>
                    <NavLink className="hover:text-white" to={member.instagram}>
                      <Instagram />
                    </NavLink>
                  </div>
                  <div><Btn cnt="Hire Me"/></div>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
