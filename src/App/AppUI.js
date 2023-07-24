import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';

function AppUI({ loading, error, completedToDos, totalToDos, searchValue,
  setSearchValue, searchedToDos, completeToDo, deleteToDo }) {
  return (                                                                  // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <>     
      <ToDoCounter completed={completedToDos} total={totalToDos}/>
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        { loading && <p>Loading Data...</p>}
        { error && <p>There was an error at loading!</p>}
        {(!loading && searchedToDos.length === 0) && <p>Create your firt To Do!</p>}
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

export { AppUI };