import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';                                             // Importamos el "style sheet", archivo de CSS para este Componente

function ToDoCounter() {                                                // Destructuramos la importacion de los 'props', 'props' es un Objeto que tiene distintas propiedades
  const {
    completedToDos,
    totalToDos,
    loading
  } = React.useContext(ToDoContext);

  const progressPercent = totalToDos > 0 ? Math.round(completedToDos / totalToDos * 100) : 0;

  return(
    completedToDos === totalToDos ?
    <div className='ToDoCounter'>You've completed all <br></br>your ToDo'S 🥳
      <div className="bar">
        <div className="progress" style={{width: `${progressPercent}%`}}></div>
      </div>
    </div>
    :
    <div className="ToDoCounter">
      <span>You have completed </span>
      <span>{completedToDos} / {totalToDos} To Do's</span>
      <div className="bar">
        <div className="progress" style={{width: `${progressPercent}%`}}></div>
      </div>
    </div>
  );
}


// Hacemos un "export nombrado" usando '{}' en vez de hacer un "default export"
export { ToDoCounter };