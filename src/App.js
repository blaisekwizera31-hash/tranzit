import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TeamConnect from './components/TeamConnect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <TeamConnect />
      <Footer />
    </div>
  );
}

export default App;
