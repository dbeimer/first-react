import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";
function TodoForm() {
  const { setShowModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onCancel = () => {
    setShowModal(false);
  };

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setShowModal(false);
  };

  return (
    <form onSubmit={onAdd}>
      <div className="TodoForm">
        <h2>Add your new TODO!!</h2>
        <textarea
          onChange={(event) => setNewTodoValue(event.target.value)}
          value={newTodoValue}
          placeholder="the new Todo..."
        ></textarea>
        <div>
          <button className="primary-button">Add</button>
          <button className="button" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export { TodoForm };
