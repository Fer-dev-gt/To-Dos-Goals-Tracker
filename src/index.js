// Este es el Entry Point de la aplicación, va a mostrar los componentes en el div 'root'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';                                            // Importamos el Componente 'App' del archivo 'App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));  // Creamos un Root para React
root.render(<App />);                                               // Renderizamos el Componente 'App' dentro del 'root' que creamos
