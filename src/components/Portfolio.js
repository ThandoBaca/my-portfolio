import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectImg1 from '../assets/weather.jpeg';
import ProjectImg2 from '../assets/calculator.jpeg';
import ProjectImg3 from '../assets/qoute generator.jpeg';


const Portfolio = () => {
  const projects = [
    {
      title: 'Weather App',
      desc: 'A weather app that displays the current weather of a city',
      img: ProjectImg1,
      link: 'https://thandobaca.github.io/weather-app/',
    },
    {
      title: 'Calculator',
      desc: 'A calculator that performs basic arithmetic operations',
      img: ProjectImg2,
      link: 'https://thandobaca.github.io/calculator/',
    },
    {
      title: 'Quote Generator',
      desc: 'A quote generator that generates a random quote',
      img: ProjectImg3,
      link: 'https://thandobaca.github.io/Quote-Generator/',
    },
  ];

 
  return (
    <section className='bg-secondary text-white py-20'>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-10 border-b-4 border-indigo-600 pb-2">
          Portfolio
        </h1>
        <p className='text-xl mb-10'>
          These are some of my projects. I have built these using HTML, CSS, JavaScript, and ReactJS.
        </p>
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
