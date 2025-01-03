import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Home/index.jsx';
import './index.css';
import './component/Home/i18n.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
