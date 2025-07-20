import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Instagram, Linkedin } from 'lucide-react';
const TeamCard = ({ name, role, image,skill,github,linkedin,instagram,path }) => {

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 text-center w-60 hover:scale-105 transition-transform duration-300 border-t-4 border-violet-500">
      <img
        src={`/images/${image}`}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-violet-400 shadow-md"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-violet-600 font-medium">{role}</p>
      
      <div className='flex place-content-evenly py-1'>
        <NavLink className="text-black" to={github}><Github /></NavLink>
        <NavLink className="text-black" to={linkedin}><Linkedin /></NavLink>
        <NavLink className="text-black" to={instagram}><Instagram /></NavLink>

      </div>
      
      <div>
        <NavLink to={path}><button onClick={()=>{console.log(name)}} name={name} className='bg-violet-800 w-30 px-2 py-1 my-1 rounded cursor-pointer'>More Info</button></NavLink>
      </div>
    </div>
  );
};

export default TeamCard;