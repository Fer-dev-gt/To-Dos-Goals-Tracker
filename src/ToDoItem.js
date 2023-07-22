import './ToDoItem.css';
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import { FaCheckCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

// Creamos un nuevo Componente de React, este lo vamos a insertar en el Componente App
function ToDoItem(props) {                                        // Vamos a aplicar las propiedades que vienen de 'props' para desplegar la información correspondiente a cada Componente iterado
  return(                                                         // Creamos nuestra estructura JSX
    <li className='ToDoItem'>
      <span 
        className={`Icon Icon-check ${props.
        completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaCheckCircle/>
      </span>

      <p className={`ToDoItem-p ${props.
        completed && "ToDoItem-p--complete"}`}>
        {props.text}
      </p>
      
      <span 
        className='Icon Icon-delete'
        onClick={props.onDelete}
      >
        <MdDelete/>
      </span>
    </li>
  );
}

export { ToDoItem };