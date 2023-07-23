import './ToDoList.css'

function ToDoList({ children }) {
  return(
    <ul className='ToDoList'>
      { children }
    </ul>
  );
}


export { ToDoList };