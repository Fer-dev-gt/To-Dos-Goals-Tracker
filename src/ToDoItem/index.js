import './ToDoItem.css';
import soundFileCompleted from './task_completed.mp3'
import soundFileDeleted from './task_deleted.mp3'
import { FaCheckCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

// Creamos un nuevo Componente de React, este lo vamos a insertar en el Componente App
function ToDoItem(props) {                                        // Vamos a aplicar las propiedades que vienen de 'props' para desplegar la información correspondiente a cada Componente iterado
  const audioCompleted = new Audio(soundFileCompleted);
  const audioDeleted = new Audio(soundFileDeleted);

  function handleComplete() {
    audioCompleted.play();
    props.onComplete();
  }

  function handleDelete() {
    audioDeleted.play();
    props.onDelete();
  }
  
  return(                                                         // Creamos nuestra estructura JSX
    <li className='ToDoItem'>
      <span 
        className={`Icon Icon-check ${props.
        completed && "Icon-check--active"}`}
        onClick={handleComplete}
      >
        <FaCheckCircle/>
      </span>

      <p className={`ToDoItem-p ${props.
        completed && "ToDoItem-p--complete"}`}>
        {props.text}
      </p>
      
      <span 
        className='Icon Icon-delete'
        onClick={handleDelete}
      >
        <MdDelete/>
      </span>
    </li>
  );
}

export { ToDoItem };