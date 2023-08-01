import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';
import man from './man.png';
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
  const audioAdded = new Audio(soundFileAdded);
  
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
    audioAdded.play();
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
    validatingToDo(event.target.value)
  };

  return(
    <>
      <form onSubmit={onSubmit}>
        <label>Write a new To Do here</label>
        <textarea
          placeholder='Cut onions for lunch'
          value={newToDoValue}
          onChange={onChange}
          required
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