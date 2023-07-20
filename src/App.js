import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from 'react';
import './App.css';


const defaultToDos = [                                    // Vamos a 'Reederizar' Arrays que van a ser insertados el Componente 'ToDoList', cada elemento del Array tiene que ser un Objeto
  { text: 'Cut Onion', completed: true },
  { text: 'Take React introduction course', completed: false },
  { text: 'Cry with the "Llorona"', completed: false },
  { text: 'Lalalalala', completed: true },
];


function App() {                                          // Esto es un Componente de React, por convención se escriben con mayuscula
  return (                                                // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <React.Fragment>     

      <ToDoCounter completed={16} total={25} />
      <ToDoSearch />

      <ToDoList>
        { defaultToDos.map(toDo => (
          <ToDoItem 
          key={ toDo.text } 
          text={ toDo.text }
          completed={ toDo.completed }
          />
        )) }
      </ToDoList>

      <CreateToDoButton/>
    </React.Fragment>
  );
}


export default App;