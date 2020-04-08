import React, { useCallback } from "react";
// import { useRedux } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
// import { changeInput, insert, toggleCheck, remove } from "../modules/todos";
import { CHANGE_INPUT, INSERT, TOGGLE_CHECK, REMOVE } from "../modules/todos";
import TodoList from "../components/TodoList";

let id = 0;
const TodoListContainer = () => {
  const { input, todos } = useSelector((state) => state, []);
  //   const [
  // { input, todos },
  // [onChangeInput, onInsert, onToggle, onRemove],
  //   ] = useRedux((state) => state.todos, [
  // changeInput,
  // insert,
  // toggleCheck,
  // remove,
  //   ]);
  const dispatch = useDispatch();
  //   const onChange = useCallback((e) => onChangeInput(e.target.value), [
  // onChangeInput,
  //   ]);
  //   const onSubmit = useCallback(
  // (e) => {
  //   e.preventDefault();
  //   onInsert(input);
  //   onChangeInput("");
  // },
  // [input, onChangeInput, onInsert]
  //   );

  const onChange = useCallback(
    (e) => {
      dispatch({ type: CHANGE_INPUT, payload: e.target.value });
      // onChangeInput(e.target.value);
    },
    // [onChangeInput]
    [dispatch]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: INSERT,
        payload: {
          id: ++id,
          text: input,
        },
      });
      dispatch({ type: CHANGE_INPUT, payload: "" });
      // onInsert(input);
      // onChangeInput('');
    },
    // [input, onChangeInput, onInsert]
    [input, dispatch]
  );

  const onToggle = (id) => {
    dispatch({ type: TOGGLE_CHECK, payload: id });
  };

  const onRemove = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };

  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;
