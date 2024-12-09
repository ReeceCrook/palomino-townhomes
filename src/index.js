import React from 'react';
import "./index.css"
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeedInsights />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
