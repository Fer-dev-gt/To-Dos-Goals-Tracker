import soundFileCompleted from './task_completed.mp3'
import soundFileDeleted from './task_deleted.mp3'
import { FaCheckCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import './ToDoItem.css';

function ToDoItem(props) {                                                              // Vamos a aplicar las propiedades que vienen de 'props' para desplegar la información correspondiente a cada Componente iterado
  const audioCompleted = new Audio(soundFileCompleted);
  const audioDeleted = new Audio(soundFileDeleted);

  function handleComplete() {                                                           // Función voltea el valor del toDo.completed y reproduce un sonido de completado
    audioCompleted.play();
    props.onComplete();
  }

  function handleDelete() {                                                             // Función que elimina el ToDo seleccionado y reproduce un sonido de eliminado
    audioDeleted.play();
    props.onDelete();                                                                   // 'onDelete' esta definido en el Context, aunque lo mandamos como props en este caso y le cambiamos el nombre, el nombre original es 'deleteToDo'
  }
  
  return(                                                                               // Creamos nuestra estructura JSX
    <li className={`ToDoItem ${props.completed && "ToDoItem--completed"}`} >
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={handleComplete}                                                        // Ejecuta acciones de ToDo completado
      >
        <FaCheckCircle/>
      </span>

      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
      </p>
      
      <span 
        className='Icon Icon-delete'
        onClick={handleDelete}                                                          // Ejecuta funciones para eliminar el ToDo, actualizar el LocalStorage y renderizar Components
      >
        <MdDelete/>
      </span>
    </li>
  );
}

export { ToDoItem };