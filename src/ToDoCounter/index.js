import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';                                             

function ToDoCounter() {                                                                          // Destructuramos la importacion de los 'props', 'props' es un Objeto que tiene distintas propiedades
  const {
    completedToDos,
    totalToDos,
  } = React.useContext(ToDoContext);

  const progressPercent = totalToDos > 0 ? Math.round(completedToDos / totalToDos * 100) : 0;     // Calculamos el porcentage de los ToDos que se han completado

  return(
    completedToDos === totalToDos ?                                                               // Si completamos todos los ToDos renderizamos un mensaje de felicitacion
    <div className='ToDoCounter'>
      <span className='bold'>You've completed all <br></br>🥳 your ToDo'S 🥳</span>
      <div className="bar">
        <div className="progress" style={{width: `${progressPercent}%`}}></div>
      </div>
    </div>
    :                                                                                             // Si todavia faltan ToDos por completar mostramos el avance que tiene el usuario
    <div className="ToDoCounter">                                                                 
      <span>You have completed </span>
      <span className='bold'>{completedToDos} / {totalToDos}</span> 
      <span> To Do's</span>
      <div className="bar">
        <div className="progress" style={{width: `${progressPercent}%`}}></div>
      </div>
    </div>
  );
}

export { ToDoCounter };                                                                           // Hacemos un "export nombrado" usando '{}' en vez de hacer un "default export"