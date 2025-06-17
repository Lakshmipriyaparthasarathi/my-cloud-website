import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './home';
import {About} from './about';
import {Contact} from './contact';


export const Myrouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
      
   
  );
}


