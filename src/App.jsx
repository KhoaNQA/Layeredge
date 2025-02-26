import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, Work } from './components';
import Ecosystem from './components/Ecosystem';
import Banner from './components/Banner';
import What from './components/What';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Work /><Banner /><What /><Blog /> </>} />
        <Route path="/ecosystem" element={<Ecosystem />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
