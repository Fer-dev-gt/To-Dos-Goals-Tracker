import './CreateToDoButton.css';
import { useContext } from 'react';
import { ToDoContext } from '../ToDoContext';
import { Modal } from '../Modal';

function CreateToDoButton({ setOpenModal }) {
  // const {setOpenModal, openModal} = useContext(ToDoContext);
  return(                                               
    <button className='CreateToDoButton'
      onClick={
        (event) => {
          setOpenModal(state => !state)
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
        }
      }
    >+</button>
  );
}


export { CreateToDoButton };