import React from 'react';

function useLocalStorage(itemName, initialValue){                            // Usando la convención al empezar el nombre con 'use' definimos que esto es un "Custom Hook"
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  };

  return [item, saveItem];
}

export { useLocalStorage };