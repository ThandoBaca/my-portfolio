import React from 'react';
import HeroImg from '../assets/Hero1.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <motion.section
      className='bg-gradient-to-b from-[#001529] via-[#00204E] to-[#7477FF] text-white min-h-screen flex flex-col md:flex-row items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between p-8 rounded-lg bg-neumorphism">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='hero-info text-center md:text-left p-6 bg-neumorphism-dark rounded-lg'
        >
          <h1 className='text-4xl lg:text-6xl font-bold leading-tight'>
            Hi, <br />
            I am <span className='text-accent'>Thando Baca</span> <br />
            Web Developer
          </h1>

          <p className='py-5 text-lg'>
            I am proficient in React.JS and Tailwind CSS. Let's build something amazing together!
          </p>

          <div className="flex space-x-4 mt-2 h-40"> {/* Adjusted spacing */}
            <a
              href="https://twitter.com/your_twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
            <a
              href="https://linkedin.com/in/your_linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
            <a
              href="https://github.com/your_github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 transition"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
          </div>

          <Link to='/portfolio' className='mt-8'> {/* Adjusted spacing */}
            <button className='btn bg-accent border-2 border-[#7477FF] text-white px-8 py-3 rounded-lg hover:bg-transparent hover:border-accent'>
              See Projects
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-img order-first md:order-last mt-6 md:mt-0"
        >
          <img src={HeroImg} alt="Developer illustration" className="w-full md:w-96 mx-auto md:mx-0 rounded-lg shadow-lg filter brightness-110"/>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
