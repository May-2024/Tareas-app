import React from 'react';
import { ToDoCounter } from '../ToDoCounter/Todo-Counter';
import {ToDoSearch} from '../ToDoSearch/Todo-Search';
import {ToDoList} from '../TodoList/Todo-List';
import {ToDoItem} from '../ToDoItem/Todo-Item';
import {TodosLoading} from '../TodosLoading/TodosLoading';
import {TodosError} from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import {CreateToDoButton} from '../CreateTodoButton/CreateTodo-Button';
import {TodoForm} from '../TodoForm/Todo-Form'
import { Modal } from '../Modal/Modal';

import { TodoContext } from '../TodoContext/Todo-Context';



function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext (TodoContext);
  
   
    return (
        <>
          <ToDoCounter />
          <ToDoSearch />
          <TodoContext.Consumer>
          {() => (
            <ToDoList>
            
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0)&& <EmptyTodos/>} 
      
      
              {searchedTodos.map(todo =>(
                <ToDoItem 
                key={todo.text}
                text={todo.text}
                completed = {todo.completed}
                //dentro de onCompleted va una funcion que haga el calculo
                // esto para no ponerlo dentro del componente todo-Item
                onComplete={()=>completeTodo(todo.text)}//ponemos una funcion dentro de otra
                //asi no aparece el error de to many re renders
                onDelete={()=>deleteTodo(todo.text)}
                />
              ))}
              
            </ToDoList>
          )}
          </TodoContext.Consumer>
          
    
          <CreateToDoButton
          setOpenModal ={setOpenModal}
          />

          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </>
      )
}
export {AppUI}

