import './ToDoSearch.css'
import searchIcon from "./Assets/search-icon.svg";

function ToDoSearch() {
  return(
    <div className='search-container'>
      <input 
      placeholder='Cut onions'
      className='ToDoSearch'
      />
      <img className='search-icon' src={searchIcon} alt='search icon'/>
    </div>
  );
}


export { ToDoSearch };