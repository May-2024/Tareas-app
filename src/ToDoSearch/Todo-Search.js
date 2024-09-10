import "./Todo-Search.css";
import React from 'react';
import { TodoContext } from "../TodoContext/Todo-Context";

function ToDoSearch() {
  const {
    searchValue, 
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input 
      placeholder="Buscar  Tarea"
      className="ToDoSearch" 
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { ToDoSearch }; // Hacemos un export nombrado


     // console.log('Escribiste en el TodoSearch')
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
