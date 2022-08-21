import React from "react";
import {TodoProvider} from "../TodoContext";
import {AppUI} from "./AppUI";
import 'feathercss/dist/feather.css'

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
