// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tspecs from './Pages/Tspecs';
import Compare from './Pages/Compare';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/specs" element={<Tspecs />} />
      <Route path="/compare" element={<Compare />} />
    </Routes>
  );
}

export default App;
