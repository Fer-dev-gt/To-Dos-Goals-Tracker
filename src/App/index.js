import React from 'react';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../ToDoContext';

function App() {                                                            // Esto es un Componente de React, por convención se escriben con mayuscula
  return(
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  )
}

export default App;