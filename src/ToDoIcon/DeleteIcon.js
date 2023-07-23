import React from "react";
import { ToDoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };