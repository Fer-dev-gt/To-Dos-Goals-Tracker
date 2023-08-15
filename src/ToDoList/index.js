import './ToDoList.css'

function ToDoList({ children }) {
  return(
    <ul className='ToDoList'>         {/* Muesta en formato de 'unordered list' los ToDoItem que corresponden mostrar, cual sea esos ToDoItem vendran dentro de 'children' */}
      { children }
    </ul>
  );
}


export { ToDoList };