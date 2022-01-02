import React from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoBotton() {
  const { setShowModal } = React.useContext(TodoContext);

  return (
    <button className="AddButton" onClick={() => setShowModal(true)}>
      +
    </button>
  );
}

export { CreateTodoBotton };
