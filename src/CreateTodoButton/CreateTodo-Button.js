import "./CreateTodo-Button.css";

function CreateToDoButton({setOpenModal}) {
  return (
    <button
      className="CreateToDoButton"
      onClick={
        () =>{
          setOpenModal(state => !state);
          //llamamos al actualizador del estado y le enviamos una funcion 
          //que recibe un estado y este recibe una negacion
        }
        
      }
    >
      +
    </button>
  );
}

export { CreateToDoButton };


// onClick={() => console.log("le diste click")