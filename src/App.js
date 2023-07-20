import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';


const defaultToDos = [                                                // Vamos a 'Reederizar' Arrays que van a ser insertados el Componente 'ToDoList', cada elemento del Array tiene que ser un Objeto
  { text: 'Cut Onion', completed: true },
  { text: 'Take React introduction course', completed: false },
  { text: 'Cry with the "Llorona"', completed: true },
  { text: 'Lalalalala', completed: false },
];


function App() {                                                      // Esto es un Componente de React, por convención se escriben con mayuscula
  return (                                                            // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <>     
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
    </>
  );
}


export default App;