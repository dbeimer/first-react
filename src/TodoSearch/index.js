import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      value={searchValue}
      placeholder="Buscar..."
    />
  );
}

export { TodoSearch };
