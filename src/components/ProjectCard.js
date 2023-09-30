// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, desc, img, link }) => {
  return (
    <div className='relative p-4 border rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
      <img src={img} alt={title} className='w-full h-auto' />
      <div className='mt-2'>
        <p className='text-lg font-bold text-white'>
          {title}
        </p>
        <p className='text-gray-300'>
          {desc}
        </p>
      </div>
      <div className="mt-4">
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='px-5 py-2 bg-blue-500 hover:bg-blue-600 font-bold text-white rounded-full'
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
