import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';                                             // Importamos el "style sheet", archivo de CSS para este Componente

function ToDoCounter() {                                                // Destructuramos la importacion de los 'props', 'props' es un Objeto que tiene distintas propiedades
  const {
    completedToDos,
    totalToDos
  } = React.useContext(ToDoContext);

  return(
    completedToDos === totalToDos ?
    <h1 className='ToDoCounter'>You've completed all your ToDo'S 🥳</h1>
    :
    <h1 className='ToDoCounter'>You've completed <span>{completedToDos}
    </span> of <span>{ totalToDos }</span> To Do's             
    </h1>
  );
}


// Hacemos un "export nombrado" usando '{}' en vez de hacer un "default export"
export { ToDoCounter };