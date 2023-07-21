import React from 'react';
import './ToDoSearch.css';
import searchIcon from "./Assets/search-icon.svg";

function ToDoSearch({ searchValue, setSearchValue }) {
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