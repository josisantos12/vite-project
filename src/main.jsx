import { createRoot } from 'react-dom/client';
import App from './Componentes/App';
import './index.css';
import React from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);