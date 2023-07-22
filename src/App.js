import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from 'react';


// const defaultToDos = [                                                      // Vamos a 'Reederizar' Arrays que van a ser insertados el Componente 'ToDoList', cada elemento del Array tiene que ser un Objeto
//   { text: 'Cut Onions', completed: true },
//   { text: 'Take React introduction course', completed: false },
//   { text: 'Cry with the "Llorona"', completed: true },
//   { text: 'Lalalalala', completed: false },
//   { text: 'canción', completed: true },
// ];

// localStorage.setItem('ToDos_V1', JSON.stringify(defaultToDos));
// localStorage.removeItem('ToDos_V2');

function App() {                                                            // Esto es un Componente de React, por convención se escriben con mayuscula
  const localStorageToDos = localStorage.getItem('ToDos_V1');
  let parsedToDos;

  if (!localStorageToDos) {
    localStorage.setItem('ToDos_V1', JSON.stringify([]));
    parsedToDos = [];
  } else {
    parsedToDos = JSON.parse(localStorageToDos);
  }


  const [searchValue, setSearchValue] = React.useState('');                 // Definimos un estado (dentro de un array), el estado no solo se consume tambien se actualiza el estado es inmutable, inicial vació con ''
  const [toDos, setToDos] = React.useState(parsedToDos);                    // Creamos otro estado con valor inicial de los array con los To Do's hechos y no hechos
  
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;     // Usamos el método filter y lenght (con doble !! para que sean boolenas) para obtener el número de To Do's completadas
  const totalToDos = toDos.length;            
  
  const searchedToDos = toDos.filter(toDo => 
    toDo.text.toLowerCase().includes(searchValue.toLowerCase()));


  const saveToDos = (newToDos) => {
    localStorage.setItem('ToDos_V1', JSON.stringify(newToDos))
    setToDos(newToDos)
  }


  const completeToDo = (text) => {                                          // Función que cambia el State de 'toDos' en el apartado de 'completed' de false a true
    const newToDos = [...toDos];                                            // Creamos una copia del Array 'ToDos' usando destructuración [...]
    const toDoIndex = newToDos.findIndex( (toDo) =>                         // Encontramos el index del elemento del Array de ToDos que queremos cambiar
      toDo.text == text );
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
    saveToDos(newToDos);
  };


  const deleteToDo = (text) => {                                            // Función que crea un nuevo Array de los toDos sin el ToDos que le dimos X para eliminar
    const newToDos = [...toDos];                                            
    const toDoIndex = newToDos.findIndex( (toDo) =>
      toDo.text == text);
    newToDos.splice(toDoIndex, 1);                                          // Quitamos el ToDo seleccionado con la X del Array de ToDos que luego va a actualizar el estado
    saveToDos(newToDos);
  };  


  return (                                                                  // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <>     
      <ToDoCounter completed={completedToDos} total={totalToDos}/>
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        { searchedToDos.map(toDo => (
          <ToDoItem 
          key={ toDo.text } 
          text={ toDo.text }
          completed={ toDo.completed }
          onComplete={ () => completeToDo(toDo.text) }
          onDelete={ () => deleteToDo(toDo.text) }
          />
        )) }
      </ToDoList>

      <CreateToDoButton/>
    </>
  );
}


export default App;