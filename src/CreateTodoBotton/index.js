import React from "react";

function CreateTodoBotton() {
  const onClickButton = (msg) => {
    alert(msg);
  }

  return (
    <button
      className="AddButton"
      onClick={() => onClickButton("Aqui debería ir el modal")}
    >+</button>
  );
}

export {CreateTodoBotton};
