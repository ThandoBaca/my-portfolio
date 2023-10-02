import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 md:py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-300 text-lg md:text-xl font-bold mb-2 md:mb-4">Thando Baca</div>
        <div className="flex space-x-3 md:space-x-4">
          <a
            href="https://twitter.com/thando_baca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/thando-baca-51249913b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/ThandoBaca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
