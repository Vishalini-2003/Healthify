import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Homepage} from './Homepage';
import Login from './Login';
import Product from './Product';
import Bloodbank from './Bloodbank';
import Assistant from './Assistant';






function App() {
  
  return (
    
    
    
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Product" element={<Product />} />
        <Route path="Bloodbank" element={<Bloodbank />} />
        <Route path="Assit" element={<Assistant />} />
      </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
