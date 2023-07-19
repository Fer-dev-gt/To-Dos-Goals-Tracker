import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import './App.css';

function App() {                                          // Esto es un Componente de React, por convención se escriben con mayuscula
  return (                                                // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <div className="App">     

      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        <ToDoItem />                                         
        <ToDoItem />
        <ToDoItem/>
      </ToDoList>

      <CreateToDoButton/>
      
    </div>
  );
}



export default App;
