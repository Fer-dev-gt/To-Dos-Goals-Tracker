import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';

function ToDoForm() {
  const {
    addToDo,
    setOpenModal,
    validationToDo,
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
    validationToDo(newToDoValue)
    setNewToDoValue(event.target.value);
  };

  return(
    <form onSubmit={onSubmit}>
      <label>Write your new To Do Here</label>
      <textarea
        placeholder='Cut onions for lunch'
        value={newToDoValue}
        onFocus={validationToDo(newToDoValue)}
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