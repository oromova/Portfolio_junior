import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Home/index.jsx';
import './index.css';
import './component/Home/i18n.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/AboutUs/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
