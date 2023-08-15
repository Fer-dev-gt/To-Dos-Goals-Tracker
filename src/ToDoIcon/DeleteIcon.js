import React from "react";
import { ToDoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="delete"
      color="gray"
      onClick={onDelete}                    // Cada vez que se le haga click se va a borrar el ToDoItem
    />
  );
}

export { DeleteIcon };