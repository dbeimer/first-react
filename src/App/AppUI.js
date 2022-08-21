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

  const changeColor = () => {
    let mainDocument = window.document.documentElement;
    mainDocument.setAttribute('data-theme', !darkTheme ? 'dark' : 'light')
    setDarkTheme(!darkTheme)
  }

  return (
    <React.Fragment>
      <div className="container header">
        {
          darkTheme ? (
            <svg onClick={changeColor} width="30px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
            : (
              <svg onClick={changeColor} width="30px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )
        }

        <TodoCounter />
        <div></div>
      </div>
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
