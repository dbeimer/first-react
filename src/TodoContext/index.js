import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  let searchedTodos = todos;

  let totalTodos = searchedTodos.length;
  let completedTodos = searchedTodos.filter((todo) => !!todo.completed).length;

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    });

    totalTodos = searchedTodos.length;
    completedTodos = searchedTodos.filter((todo) => !!todo.completed).length;
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const uncheckTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = false;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        uncheckTodo,
        deleteTodos,
        showModal,
        setShowModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
