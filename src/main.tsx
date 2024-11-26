/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Envolvendo com Router
import App from './App.tsx';  // O seu componente App
import './index.css';  // O estilo, se necessário

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Envolva o App com o BrowserRouter
root.render(
  <Router>
    <App />
  </Router>
);


