import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';

function ToDoForm() {
  const {
    addToDo,
    setOpenModal,
    validatingToDo,
    newToDoValue,
    setNewToDoValue,
  } = React.useContext(ToDoContext);
  
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
    validatingToDo(event.target.value)
  };

  return(
    <form onSubmit={onSubmit}>
      <label>Write your new To Do Here</label>
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
  )
}

export { ToDoForm };