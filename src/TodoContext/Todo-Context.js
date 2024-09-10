import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({
    children
}) {
    const {
        loading,
        error,
        item:todos,
        saveItem: saveTodos,
      }
       = useLocalStorage('TODOS_V1',[]);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
    //Estados derivados
    //son calculos a partir de un estado
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos= todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchtext = searchValue.toLocaleLowerCase();
          return todoText.includes(searchtext);
        }
      );
    


      const addTodo =(text) =>{
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
      }
    //creamos la nueva variable que sera igual a una funcion
      const completeTodo = (text) => {
        const newTodos = [...todos];//... sgnfca copia de todos
        const todoIndex = newTodos.findIndex(
          (todo)=> todo.text ==text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;//debemos encontrar el todoIndex
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo)=> todo.text ==text
        );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,

        }}>
            {/*encapsulamos un componentedentro del provider */}
            {children} 
        </TodoContext.Provider>
    );
    }



export {TodoContext, TodoProvider}






//  localStorage.removeItem('TODOS_V1');

//  const defaultTodos = [
//    {text: 'Cortar cebolla', completed: true},
//    {text: 'Tomar el Curso de React.js', completed: false},
//    {text: 'Llorar con la Llorona', completed: false},
//    {text: 'Amar a mi bebelin', completed: false},
//    {text: 'Paseito con mi bebelin', completed: true},
//  ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));