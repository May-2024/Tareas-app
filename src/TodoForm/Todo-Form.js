import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext/Todo-Context';

function TodoForm() {
    const{
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext);
    //creamos un estado LOCAL
    const [newTodoValue, setNewTodoValue] =React.useState('')

    const onSubmit =(event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel =() => {
        
        setOpenModal(false);
    };

    const onChange =(event) => {
        setNewTodoValue(event.target.value)
    };

    return(
        <form onSubmit={onSubmit}>
        <label>Escribe tu nueva Tarea </label>
        <textarea 
        placeholder='Bañarse las orejas'
        value={newTodoValue}
        onChange={onChange}/>
            
        <div className='TodoForm-buttonContainer'>
        <button 
        type='button'
        className='TodoForm-button TodoForm-button--cancel'
        onClick={onCancel}>
        Cancelar
        </button>
        <button
        className='TodoForm-button TodoForm-button--add'>
        Añadir
        </button>
        </div>
        </form>
    )

}
export{TodoForm}