import React from 'react';
import '../css/AboutMe.css';
import foto from '../images/foto.jpg'; 
import { FaEnvelope, FaInstagram, FaGithub, FaPhone } from 'react-icons/fa'; 

const AboutMe = () => {
  return (
    <div className="about-me">
      
      <img src={foto} alt="My Portrait" className="foto" />
      <p>Halo, saya Diaz Candra Ardana. Saat ini, saya sedang melanjutkan pendidikan saya di Universitas Dinamika Bangsa Jambi. Saya sangat tertarik dengan dunia pengembangan perangkat lunak dan desain aplikasi. Dalam keseharian saya, saya lebih sering menggunakan beberapa teknologi seperti Laravel untuk membangun aplikasi backend, Figma untuk desain antarmuka, Flutter untuk pengembangan aplikasi mobile, dan tentu saja React JS untuk membangun aplikasi web interaktif.</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>diazardana631@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaInstagram className="icon" />
          <span>diyz_0</span>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <span>@DiazCA-12</span>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <span>085769868803</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
