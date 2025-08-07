import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../features/todoSlice";
import { AiFillCheckCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { GoCircle } from "react-icons/go";

function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  // const [toggle,setToggle] = useState

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
          <p>{task.value ? <AiFillCheckCircle /> : <GoCircle />}</p>
          <h3>{task.title}</h3>
          <button onClick={() => dispatch(remove(i))}>
            <CiCircleRemove />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
