import React from 'react';
import '../css/Certificates.css'; 
import cv from '../images/cv.jpg'; 
const Certificates = () => {
  return (
    <div className="page-container">
      <h1>Certificates</h1>
      <div className="certificate-item">
      <img src={cv} alt="My Portrait" className="cv" />
        <p>Certificate P.Mobile - disini saya mendapatkan penghargaan sebagai aplikasi mobile terbaik dalam segi code pada aplikasi Calm Music </p>
      </div>
      </div>
  );
};

export default Certificates;
