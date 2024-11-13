import React from 'react';
import { FaJs, FaGit, FaFigma, FaLaravel, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si'; 
import '../css/Capabilities.css'; 

const Capabilities = () => {
  return (
    <div className="capabilities">
   
      <div className="icons">
        <div className="icon-wrapper">
          <FaJs title="JavaScript" />
          <span className="icon-label">JavaScript</span>
        </div>
        <div className="icon-wrapper">
          <FaGit title="Git" />
          <span className="icon-label">Git</span>
        </div>
        <div className="icon-wrapper">
          <FaFigma title="Figma" />
          <span className="icon-label">Figma</span>
        </div>
        <div className="icon-wrapper">
          <FaLaravel title="Laravel" />
          <span className="icon-label">Laravel</span>
        </div>
        <div className="icon-wrapper">
          <FaHtml5 title="HTML" />
          <span className="icon-label">HTML</span>
        </div>
        <div className="icon-wrapper">
          <FaCss3Alt title="CSS" />
          <span className="icon-label">CSS</span>
        </div>
        <div className="icon-wrapper">
          <SiFlutter title="Flutter" />
          <span className="icon-label">Flutter</span>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
