import React from 'react';
import HeroImg from '../assets/Hero1.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-primary text-white py-32'>
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className='hero-info'>
          <h1 className='text-4xl lg:text-6xl font-bold leading-tight'>
            Hi, <br />
            I am <span className='text-accent'>Thando Baca</span> <br />
            Web Developer
          </h1>

          <p className='py-5 text-lg'>
            I am proficient in React.JS and Tailwind CSS. Let's build something amazing together!
          </p>

          <Link to='/portfolio'>
            <button className='btn bg-accent border-2 border-[#7477FF] text-white px-8 py-3 rounded-lg hover:bg-transparent hover:border-accent'>
              See Projects
            </button>
          </Link>
        </div>

        <div className="hero-img">
          <img src={HeroImg} alt="Developer illustration" className="w-80 md:w-96 ml-auto rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
