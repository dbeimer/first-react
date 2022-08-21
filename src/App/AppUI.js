import React from "react";
import { useState } from "react";
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

  //esto esta genial
  let [darkTheme, setDarkTheme] = useState(false)

  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    uncheckTodo,
    deleteTodos,
    showModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className="container">
        <button onClick={() => {
          let mainDocument = window.document.documentElement;
          mainDocument.setAttribute('data-theme', !darkTheme ? 'dark' : 'light')
          setDarkTheme(!darkTheme)
        }} className="button">{!darkTheme ? 'Dark' : 'Light'}</button>
      </div>


      <TodoCounter />

      <div className="container">
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
              onUncheck={uncheckTodo}
              onDelete={deleteTodos}
            />
          ))}
        </TodoList>
        <CreateTodoBotton />
      </div>
      {showModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };
