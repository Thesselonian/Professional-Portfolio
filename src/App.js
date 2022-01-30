import React, { useState } from 'react';
import Navbar from './components/Nav/index';
import Body from './components/Body/index';
import Footer from './components/Footer/index';
import './App.css';

function App() {

  const [navigationItems] = useState([
    'About Me',
    'Portfolio',
    'Contact',
    'Resume'
  ])
  const [currentNavigationItem, setCurrentNavigationItem] = useState(navigationItems[0]);

  return (
    <>
      <Navbar 
        navigationItems={navigationItems}
        currentNavigationItem={currentNavigationItem}
        setCurrentNavigationItem={setCurrentNavigationItem}
        />
      <Body />
      <Footer />
    </>
  );
}

export default App;
