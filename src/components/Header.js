import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoImg from "../assets/logo-1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between items-center px-5 py-2 bg-primary text-white fixed w-full z-10">
      {/* Logo */}
      <a href="/" className="logo text-2xl font-bold text-accent">
        <img src={LogoImg} alt="Logo" className="w-10" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <Link to="/about">
          <NavItem to="/about">About</NavItem>
          </Link>
          <Link to="/portfolio">
          <NavItem to="/portfolio">Portfolio</NavItem>
          </Link>
          <Link to="/contact">
          <NavItem to="/contact">Contact</NavItem>
          </Link>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${!toggle ? "-left-full" : "left-0"}`}>
        <ul className="flex flex-col">
          <Link to="/about">
          <NavItem to="/about">About</NavItem>
          </Link>
          <Link to="/portfolio">
          <NavItem to="/portfolio">Portfolio</NavItem>
          </Link>
          <Link to="/contact">
          <NavItem to="/contact">Contact</NavItem>
          </Link>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
    </header>
  );
};

// Reusable navigation item component
const NavItem = ({ href, children }) => (
  <li>
    <a href={href} className="text-white">
      {children}
    </a>
  </li>
);

export default Header;
