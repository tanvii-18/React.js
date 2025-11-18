import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  return (
    <div className="main">
      <h1>Todo Tasks!</h1>

      <div className="addTodo">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(add(input));
            console.log("inside input", input);
            setInput("");
          }}
        >
          Add Task{" "}
        </button>
      </div>
      {todos.map((task, i) => (
        <div key={i} className="tasks">
          <h3>{task.title}</h3>
          <p>{task.value ? "completed" : "pending"}</p>
          <button>❌</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
