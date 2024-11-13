import React from 'react';
import { FaUser, FaCog, FaCertificate, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import '../css/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">My Portfolio</div>
      <a href="/"><FaUser className="icon" /> About Me</a>
      <a href="/capabilities"><FaCog className="icon" /> Capabilities</a>
      <a href="/certificates"><FaCertificate className="icon" /> Certificates</a>
      <a href="/education"><FaGraduationCap className="icon" /> Education</a>
      <a href="/projects"><FaProjectDiagram className="icon" /> Projects</a>
    </div>
  );
};

export default Navbar;
