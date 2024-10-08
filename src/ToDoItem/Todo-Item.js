import './Todo-Item.css';

function ToDoItem(props) {
    return(
      <li className= "ToDoItem"> 
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
        ☑︎ 
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className= "Icon Icon-delete"
        onClick={props.onDelete}>
        ✖︎
        </span>
      </li>
    );
  }

  export { ToDoItem };