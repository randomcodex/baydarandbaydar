// Main entry point for the Baydar & Baydar React application
// Sets up the React application with HashRouter and renders it to the DOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wraps the application in HashRouter for client-side routing
  <HashRouter>
    <App />
  </HashRouter>
);
