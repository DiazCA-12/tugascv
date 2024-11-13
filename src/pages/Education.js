import React from 'react';
import '../css/Education.css'; 

const Education = () => {
  return (
    <div className="page-container">
      <h1>Education</h1>
      <div className="education-item">
        <div className="details">
          <h3>Sekolah Menengah Atas</h3>
          <p>Sma N 8 Muaro Jambi 2018-2021</p>
          <p>Disini saya memilih, jurusan IPA dan mengikuti banyak sekali ekstrakulikuler di Sekolah hampir semua saya ikuti.</p>
        </div>
        <div className="year">2021</div>
      </div>
      <div className="education-item">
        <div className="details">
          <h3>Universitas</h3>
          <p>Universitas Dinamika Bangsa Jambi 2021-now</p>
          <p>Disini saya mengambil jurusan Sistem Informasi.</p>
        </div>
        <div className="year">2024</div>
      </div>
      
    </div>
  );
};

export default Education;
