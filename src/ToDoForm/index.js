import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';

function ToDoForm() {
  const {
    addToDo,
    setOpenModal,
  } = React.useContext(ToDoContext);
  
  const[newToDoValue, setNewToDoValue] = React.useState('');                                // State local para que solo se use el valor final a enviar y no letra por letra

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