import { useReducer, useState } from "react";
import BasicExample from "./TodoTable";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (state.some((todo) => todo.id === action.data.id)) {
        return state;
      }
      return [...state, { ...action.data, complete: false }];

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.data.id
          ? { ...todo, title: action.data.title }
          : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.data.id);

    case "DELETEALL":
      return [];

    default:
      return state;
  }
};

const Todos = () => {
  const [input, setInput] = useState({});
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <h1>TODO APP</h1>
      <BasicExample todos={state} dispatch={dispatch} />
      <input
        type="text"
        onChange={(e) => setInput({ ...input, id: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "ADD", data: input })}>ADD</button>
      <button onClick={() => dispatch({ type: "EDIT", data: input })}>EDIT</button>
      <button onClick={() => dispatch({ type: "DELETEALL", data : 0 })}>CLEAR TABLE</button>
    </div>
  );
};

export default Todos;
