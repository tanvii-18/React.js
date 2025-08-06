import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch()

  return (
    <div className="main">
      <h1>Todo Tasks!</h1>

      <div className="addTodo">
        <input type="text" />
        <button onClick={()=> dispatch(add())}>Add Task </button>
      </div>
      {todos.map((task, i) => (
        <div key={i} className="tasks">
          <h3>{task.title}</h3>
          <p>{task.value ? "completed" : "pending"}</p>
        </div>
      ))}
    </div>
  );
}

export default Todo;
