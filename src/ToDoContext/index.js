import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error
  } = useLocalStorage('ToDos_V1', []);   

  const [searchValue, setSearchValue] = React.useState('');                 // Definimos un estado (dentro de un array), el estado no solo se consume tambien se actualiza el estado es inmutable, inicial vació con ''
  const [openModal, setOpenModal] = React.useState(false);
  
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;     // Usamos el método filter y lenght (con doble !! para que sean boolenas) para obtener el número de To Do's completadas
  const totalToDos = toDos.length;            
  
  const searchedToDos = toDos.filter(toDo => 
    toDo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addToDo = (text) => {
    const newToDos = [...toDos];                                            
    newToDos.push({
      text,
      completed: false,
    });
    saveToDos(newToDos);
  };

  const completeToDo = (text) => {                                          // Función que cambia el State de 'toDos' en el apartado de 'completed' de false a true
    const newToDos = [...toDos];                                            // Creamos una copia del Array 'ToDos' usando destructuración [...]
    const toDoIndex = newToDos.findIndex( (toDo) =>                         // Encontramos el index del elemento del Array de ToDos que queremos cambiar
      toDo.text === text 
    );
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {                                            // Función que crea un nuevo Array de los toDos sin el ToDos que le dimos X para eliminar
    const newToDos = [...toDos];                                            
    const toDoIndex = newToDos.findIndex( (toDo) =>
      toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);                                          // Quitamos el ToDo seleccionado con la X del Array de ToDos que luego va a actualizar el estado
    saveToDos(newToDos);
  };  


  return (
    <ToDoContext.Provider value={{
      loading, 
      error,
      completedToDos, 
      totalToDos, 
      searchValue,
      setSearchValue,
      searchedToDos, 
      addToDo,
      completeToDo, 
      deleteToDo,
      openModal,
      setOpenModal
    }}>
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };