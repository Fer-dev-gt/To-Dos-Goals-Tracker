import React from "react";
import { ToDoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <ToDoIcon
      type="check"
      color={completed ? 'green' : 'gray'}              // Si el valor de 'comleted' es true, el color del check va a ser verde, si es false será gris
      onClick={onComplete}                              // Cada vez que se la haga click va a cambiar el valor de 'completed', funciona como un toggle
    />
  );
}

export { CompleteIcon };

