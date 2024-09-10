import React from 'react';
import './Todo-Counter.css'
import { TodoContext } from '../TodoContext/Todo-Context';

//Los componentes no reciben parametros sino props
function ToDoCounter() {
  const {
    completedTodos,
    totalTodos,
  }= React.useContext(TodoContext);

  return(
    <h1 className= "ToDoCounter" >
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas
    </h1>
  );
}

export { ToDoCounter} // Hacemos un export nombrado