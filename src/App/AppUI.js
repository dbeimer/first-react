import React from "react";
import "./style.css";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoBotton } from "../CreateTodoBotton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    showModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Algo salio mal</p>}
        {loading && <p>Estamos cargando no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>!Crea tu primer todo!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeTodos}
            onDelete={deleteTodos}
          />
        ))}
      </TodoList>
      {showModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoBotton />
    </React.Fragment>
  );
}

export { AppUI };
