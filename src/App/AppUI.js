import React from "react";
import "./style.css";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoBotton } from "../CreateTodoBotton";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
}) {
  return (
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
      <CreateTodoBotton />
    </React.Fragment>
  );
}

export { AppUI };
