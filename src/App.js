import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoListContainer from "./containers/TodoListContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <TodoListContainer />;
    </div>
  );
};

export default App;
