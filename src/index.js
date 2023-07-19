import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';                                            // Importamos el Componente App del archivo 'App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));  // Creamos un Root para React
root.render(<App />);                                               // Reenderisamos el Componente App dentro del 'root' que creamos
