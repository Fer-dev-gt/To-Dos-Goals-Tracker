import React from 'react';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../ToDoContext';

function App() {                                                            // Esto es un Componente de React, por convención se escriben con mayuscula
  return(                                                                   // Agregamos el 'React Context' al Componente 'AppUI' para poder pasar estados y props con mayor facilidad
    <ToDoProvider>                                                          
      <AppUI />
    </ToDoProvider>
  )
}

export default App;                                                         // Forma de exportar un Component por defecto