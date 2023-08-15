import React from 'react';
import './ToDoSearch.css';
import { ToDoContext } from '../ToDoContext';
import searchIcon from "../Assets/search-icon.svg";

function ToDoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(ToDoContext);

  return(
    <div className='search-container'>
      <input 
        placeholder='Search your To Do'
        className='ToDoSearch'
        value={searchValue}
        onChange={(event) => { setSearchValue(event.target.value) }}                    // Actualiza el State cada vez que se escribe algo en el buscador y hace que se renderizen los componentes que hacen match con el 'search value'
      />
      <img className='search-icon' src={searchIcon} alt='search icon'/>
    </div>
  );
}

export { ToDoSearch };