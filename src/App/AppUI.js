import React from 'react';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';
import { CreateToDoButton } from '../CreateToDoButton';
import { EmptyToDos } from '../EmptyToDos';
import { Footer } from '../Footer';
import { Modal } from '../Modal';
import { ToDoContext } from '../ToDoContext';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoForm } from '../ToDoForm';
import { ToDoItem } from '../ToDoItem';
import { ToDoList } from '../ToDoList';
import { ToDoSearch } from '../ToDoSearch';
import { ToDosError } from '../ToDosError';
import { ToDosLoading } from '../ToDoLoading';
import { useToDos } from '../ToDoContext/useToDos';

function AppUI() {
  const {
    loading, 
    error,
    searchedToDos,
    completeToDo, 
    deleteToDo,
    openModal,
    setOpenModal,
    validatingToDo,
    totalToDos,
    sincronizedToDos
  } = React.useContext(ToDoContext);                                            // Importamos los States y props que vamos a usar en la lógica de la UI

  return (                                                                      // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <>                                                                        { /* Forma mas corta de envolver varios componentes y reederizarlos juntos */ }
      <h1>To-Do's Goals</h1>
      {!!totalToDos && <ToDoCounter />}
      {!!totalToDos && <ToDoSearch />}
      
      <ToDoList>
        { loading && (
          <>
            <ToDosLoading/>
            <ToDosLoading/>
            <ToDosLoading/>
          </>
        )}

        { error && <ToDosError/> }
        { (!loading && !totalToDos ) && <EmptyToDos setOpenModal={setOpenModal}/> }   { /* Mostramos un mensaje donde decimos que no hay ningun ToDo creado, se muestra si no estamos en estado de 'loading' y 'searchedToDos es igual a 0' */ }

        {!loading && searchedToDos.map(toDo => (                              // Retorna y muestra los ToDos que fueron buscados en el buscador, si el buscador esta vacío muestra todo los ToDos guardados
          <ToDoItem 
            key={ toDo.text } 
            text={ toDo.text }                                                // Muestra el texto del ToDo correspondiente
            completed={ toDo.completed }                                   
            onComplete={ () => completeToDo(toDo.text) }                      // Guardamos la función que ejecutará el completado de un ToDo, recibe como parámetro el texto del ToDo para poder ubicarlo en el Array de Object
            onDelete={ () => deleteToDo(toDo.text) }                          // Guardamos la función que ejecutará la elinación de un Todo, recibe como parámetro el texto del ToDo para poder ubicarlo en el Array de Object
          />
        )) }
      </ToDoList>

      {!!totalToDos && <CreateToDoButton setOpenModal={setOpenModal} />}    
      
      {openModal && (                                                         // Si el valor de 'openModal' es true renderizamos el componente 'Modal' que tiene adentro el 'ToDoForm' para agregar un nuevo ToDo
        <Modal>
          <ToDoForm validatingToDo={ validatingToDo } />
        </Modal>
      )}

      <ChangeAlertWithStorageListener 
        sincronize={sincronizedToDos}
      />
      <Footer totalToDos={totalToDos}/>
    </>
  );
}

export { AppUI };