import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Counter() {
  const [value, setValue] = React.useState();
  const [todo, setTodo] = React.useState([]);

  return (
    <div>
      <h1>Todo</h1>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodo([...todo, { title: value, id: uuidv4() }]);
          setValue("");
        }}
      >
        Add Todo
      </button>

      {todo.map((e) => {
        return (
          <div className="todoRender">
            <h3>{e.title}</h3>
            <button
              onClick={() => {
                setTodo(
                  todo.filter((event) => {
                    return event.id !== e.id;
                  })
                );
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
