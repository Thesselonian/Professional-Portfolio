import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects';
import Footer from './components/Footer/index';
import Resume from './components/Resume';
import './App.css';

function App() {

  const [navigationCategory] = useState([
    'Projects',
    'Resume',
    'Contact',
    'About'
  ])

  const [selectedCategory, setSelectedCategory] = useState('About');

  return (
    <>
      <Navbar
        navigationCategory={navigationCategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory === 'About' && <About />}
      {selectedCategory === 'Projects' && <Projects />}
      {selectedCategory === 'Resume' && <Resume />}
      {selectedCategory === 'Contact' && <Contact />}
      <Footer />
    </>
  );
}

export default App;
