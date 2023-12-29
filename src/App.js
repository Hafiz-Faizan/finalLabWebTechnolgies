// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rocket from './component/Rocket';
import Groups from './component/Groups';

import NavbarMenu from './component/NavbarMenu';


function App() {
  return (
    <Router>
      <div>
        <NavbarMenu/>
        <Routes>
          
          <Route path="/Rocket" element={<Rocket />} />
          <Route path="/Group" element={<Groups/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
