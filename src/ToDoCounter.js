import './ToDoCounter.css';                                             // Importamos el "style sheet", archivo de CSS para este Componente

function ToDoCounter({ total, completed}) {                            // Destructuramos la importacion de los 'props', 'props' es un Objeto que tiene distintas propiedades
  return(
    completed == total ?
    <h1 className='ToDoCounter'>You've completed all your ToDo'S 🥳</h1>
    :
    <h1 className='ToDoCounter'>You've completed <span>{ completed }
    </span> of <span>{ total }</span> To Do's             
    </h1>
  );
}


// Hacemos un "export nombrado" usando '{}' en vez de hacer un "default export"
export { ToDoCounter };