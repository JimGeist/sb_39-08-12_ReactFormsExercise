import React from "react";
import TodoList from "./src_Todos/TodoList";
import BoxList from "./src_ColorBox/BoxList";

import './App.css';

function App() {

  return (
    <div className="App">

      <BoxList />
      <TodoList />

    </div>
  );
}

export default App;
