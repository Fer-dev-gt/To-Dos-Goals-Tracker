import './ToDoCounter.css';                                             // Importamos el "style sheet", archivo de CSS para este Componente

function ToDoCounter({ total, completed }) {                            // Destructuramos la importacion de los 'props', 'props' es un Objeto que tiene distintas propiedades
  return(
    <h1 className='ToDoCounter'>
      You have completed <span>{ completed }</span> of <span>{ total }</span> To Do's             {/* Agregamos los valores de las tareas hechas y el total usando notación JavaScipt con {}, de esta forma es más dinámico */}
    </h1>
  );
}


// Hacemos un "export nombrado" usando '{}' en vez de hacer un "default export"
export { ToDoCounter };