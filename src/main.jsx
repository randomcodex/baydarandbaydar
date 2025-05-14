// Main entry point for the Baydar & Baydar React application
// Sets up the React application with BrowserRouter and renders it to the DOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './global.css'; // Updated to reflect the renamed file

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wraps the application in BrowserRouter for client-side routing
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
