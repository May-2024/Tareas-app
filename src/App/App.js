import { AppUI } from './AppUI';
import React from 'react';
import {useLocalStorage} from './useLocalStorage';
import { TodoProvider } from '../TodoContext/Todo-Context';

function App() {

 return (
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
  
 );
}

export default App;


 // //LocalStorage
  // localStorage.getItem("rol") // Asi accedemos a los valores de los elementos del localStorage
  // localStorage.setItem("nalga", "kaka") // Asi guardamos elementos en el localStorage


// loading={loading}
    // error={error}
    // completeTodo={completeTodo}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    // searchedTodos={searchedTodos}
    // completedTodos={completedTodos}
    // deleteTodo={deleteTodo}


  