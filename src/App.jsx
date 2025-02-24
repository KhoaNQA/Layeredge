import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, Work } from './components';
import Ecosystem from './components/Ecosystem';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Work /></>} />
        <Route path="/ecosystem" element={<Ecosystem />} />
      </Routes>
    </Router>
  );
};

export default App;
