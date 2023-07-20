import React from 'react';
import './ToDoSearch.css';
import searchIcon from "./Assets/search-icon.svg";

function ToDoSearch() {
  const [searchValue, setSearchValue] = React.useState('');                           // Definimos un estado (dentro de un array), el estado no solo se consume tambien se actualiza el estado es inmutable, inicial vació con ''
  
  console.log(`Los usuarios buscan To Do's de ${searchValue}`);

  return(
    <div className='search-container'>
      <input 
      placeholder='Cut onions'
      className='ToDoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
      <img className='search-icon' src={searchIcon} alt='search icon'/>
    </div>
  );
}


export { ToDoSearch };