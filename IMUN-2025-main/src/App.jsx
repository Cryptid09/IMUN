import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Scroll from './components/Scroll.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Participate from './pages/Participate.jsx';
import Committee from './pages/Committee.jsx';
import Photowall from './pages/Photowall.jsx';
import Secretariat from './pages/Secretariat.jsx';
import Contactus from './pages/Contactus.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Scroll />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/photowall" element={<Photowall />} />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
