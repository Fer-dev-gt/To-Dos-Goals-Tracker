import React from 'react';
import './ToDoForm.css';

function ToDoForm() {
  return(
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <label>Write your new To Do Here</label>
      <textarea
        placeholder='Cut onions for lunch'
      />
      <div className='ToDoForm-buttonContainer'>
        <button 
          type=''
          className='ToDoForm-button ToDoForm-button--cancel'
        >Cancel
        </button>
        <button 
          type='submit'
          className='ToDoForm-button ToDoForm-button--add'
        >Add
        </button>
      </div>
    </form>
  )
}

export { ToDoForm };