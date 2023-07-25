import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDosLoading } from '../ToDoLoading';
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoContext } from '../ToDoContext';

function AppUI() {
  const {
    loading, 
    error,
    searchedToDos,
    completeToDo, 
    deleteToDo,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext);

  return (                                                                  // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <>     
      <ToDoCounter />
      <ToDoSearch />
        
      <ToDoList>
        { loading && (
          <>
            <ToDosLoading/>
            <ToDosLoading/>
            <ToDosLoading/>
          </>
        )}
        { error && <ToDosError/> }
        { (!loading && searchedToDos.length === 0) && <EmptyToDos/> }

        { searchedToDos.map(toDo => (
          <ToDoItem 
            key={ toDo.text } 
            text={ toDo.text }
            completed={ toDo.completed }
            onComplete={ () => completeToDo(toDo.text) }
            onDelete={ () => deleteToDo(toDo.text) }
          />
        ))}
      </ToDoList>

      <CreateToDoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
      <Modal>
        La funcionalidad de agregar ToDo
      </Modal>
      )}
    </>
  );
}

export { AppUI };