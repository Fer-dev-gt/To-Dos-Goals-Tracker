import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from 'react';


const defaultToDos = [                                                      // Vamos a 'Reederizar' Arrays que van a ser insertados el Componente 'ToDoList', cada elemento del Array tiene que ser un Objeto
  { text: 'Cut Onions', completed: true },
  { text: 'Take React introduction course', completed: false },
  { text: 'Cry with the "Llorona"', completed: true },
  { text: 'Lalalalala', completed: false },
  { text: 'Lalalaladla', completed: true },
];


function App() {                                                            // Esto es un Componente de React, por convención se escriben con mayuscula
  const [searchValue, setSearchValue] = React.useState('');                 // Definimos un estado (dentro de un array), el estado no solo se consume tambien se actualiza el estado es inmutable, inicial vació con ''
  const [toDos, setToDos] = React.useState(defaultToDos);                   // Creamos otro estado con valor inicial de los array con los To Do's hechos y no hechos
  
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;     // Usamos el método filter y lenght (con doble !! para que sean boolenas) para obtener el número de To Do's completadas
  const totalToDos = toDos.length;            
  
  const filteredToDos = defaultToDos.filter(toDo => 
    toDo.text.toLowerCase().includes(searchValue.toLowerCase()));

  console.log(`Los usuarios buscan To Do's de ${searchValue}`);

  return (                                                                  // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <>     
      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        { filteredToDos.map(toDo => (
          <ToDoItem 
          key={ toDo.text } 
          text={ toDo.text }
          completed={ toDo.completed }
          />
        )) }
      </ToDoList>

      <CreateToDoButton/>
    </>
  );
}


export default App;