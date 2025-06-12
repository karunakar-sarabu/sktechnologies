import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Training from './pages/Training';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
       <ScrollToTop />  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
