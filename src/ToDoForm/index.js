import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';
import star from './star.png';
import soundFileAdded from './added.mp3'

function ToDoForm() {
  const {
    addToDo,
    setOpenModal,
    validatingToDo,
    newToDoValue,
    setNewToDoValue,
  } = React.useContext(ToDoContext);

  const audioAdded = new Audio(soundFileAdded);                         // Audio para cuando se agrega un nuevo ToDo
  
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);                                              // Ejecutamos la función que agregar el nuevo ToDo al LocalStorage
    setOpenModal(false);
    audioAdded.play();
  };

  const onCancel = () => {                                              // Función que cierra el formulario para ingresar nuevo ToDO al cambiar el State a false del 'setOpenModal'
    setOpenModal(false);
  };

  const onChange = (event) => {                                         // Validamos cada vez que se escribe en el TextArea
    setNewToDoValue(event.target.value);                                // Actualizamo cada vez que se escribe para tener listo el valor cuando se de en guardar ToDo
    validatingToDo(event.target.value)                                  // Validamos constantemente que el valor escrito no este repetido (Puede generar bugs ya que es muy estricto)
  };

  return(
    <>
      <form onSubmit={onSubmit}>
        <label>Write a new To Do here</label>
        <textarea
          placeholder='Cut onions for lunch'
          value={newToDoValue}
          onChange={onChange}
          required                                                      // Obliga a tener texto en el TextArea para poder hacer Submit
        />
        <div className='ToDoForm-buttonContainer'>
          <button 
            type=''
            className='ToDoForm-button ToDoForm-button--cancel'
            onClick={onCancel}
          >Cancel</button>
          <button 
            type='submit'
            className='ToDoForm-button ToDoForm-button--add'
          >Add</button>
        </div>
      </form>
      <img className="star" src={star} alt="TaskBudy"/>
      <span className='emoji'>🤓</span>
    </>
  )
}

export { ToDoForm };