import React from 'react';
import {TeamCard} from '../components';
import { div, path } from 'framer-motion/client';
import { NavLink, Outlet } from 'react-router-dom';
import teamData from "../data/teamData"

const Team = () => {
  const team = teamData
 return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 via-black to-gray-900 text-white p-8'>
      <div className="min-h-screen bg-transparent px-4 text-center">
      <h2 className="text-4xl font-extrabold text-white mt-20 mb-12">Meet Our Team</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {team.map((member, idx) => (
          <TeamCard key={idx} {...member} />

        ))}
      </div>
       <div className='my-10 w-full '>
        <Outlet />
       </div>
    </div>
    </div>
  );
};

export default Team;
