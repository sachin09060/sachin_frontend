import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state,{...action.data, complete:false}];

    case "EDIT":
        return state.map((todo) => todo.id === action.data.id ? { ...todo, title: action.data.title } : todo);

    case "DELETE":
        return state.filter(todo => todo.id !== action.data.id);
 
    case "DELETE ALL":
      return [];
      
    default:
      return state;
  }
};


const Todos = () => {
    const [input, setInput] = useState({})
    const [state, dipatcher] = useReducer(reducer, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>      <button
        onClick={() => {
          dipatcher({ type: "EDIT", data: input });
        }}
      >
        EDIT
      </button>
      <button
        onClick={() => {
          dipatcher({ type: "DELETE", data: input });
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          dipatcher({ type: "DELETE ALL", data: 0 });
        }}
      >
        DELETE ALL
      </button></td>
          </tr>
        </tbody>
      </table>

      <h1>{JSON.stringify(state)}</h1>
      <input
        type="text"
        onChange={(e) => setInput({ ...input, id: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <button
        onClick={() => {
          dipatcher({ type: "ADD", data: input });
        }}
      >
        ADD
      </button>
    </div>
  );
};
export default Todos;
