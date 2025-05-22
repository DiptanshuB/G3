import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Features from './components/Features';
import Facts from './components/Facts';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Features />
      <Facts />
      <Sponsors />
    </div>
  );
}

export default App;
