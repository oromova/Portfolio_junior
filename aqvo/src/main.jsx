import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Home/index.jsx';
import './index.css';
import './component/Home/i18n.jsx';
import { BgImg } from './component/BgImg/index.jsx';
import { SocialMedia } from './component/SocialMedia/index.jsx';
import Carusel from './component/Carusel/index.jsx';
import Sliders from './component/Sliders/index.jsx';
import { ContactUs } from './component/ContactUs/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <BgImg />
    <Carusel />
    <SocialMedia />
    <Sliders />
    <ContactUs />
  </React.StrictMode>,
);
