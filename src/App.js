import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Capabilities from './pages/Capabilities';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
