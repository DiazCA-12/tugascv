import React from 'react';
import '../css/Projects.css'; 
import P1 from '../images/P1.png'; 
import P2 from '../images/P2.png'; 
const Projects = () => {
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-item">
        <img src={P1} alt="My Portrait" className="p1" />
          <h3>Aplikasi Food Yummy</h3>
          <p>Sebuah aplikasi mobile yang menampilkan semua jenis makanan yang ada di sekitar lokasi pengguna.</p>
        </div>
        <div className="project-item">
        <img src={P2} alt="My Portrait" className="p2" />
          <h3>Aplikasi Calm Music</h3>
          <p>Sebuah aplikasi yang menampilkan musik yang populer pada billboard musik dunia.</p>
        </div>
             
      </div>
    </div>
  );
};

export default Projects;
