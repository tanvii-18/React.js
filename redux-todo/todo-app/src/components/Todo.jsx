import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from "../features/todoSlice";
import { AiFillCheckCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { GoCircle } from "react-icons/go";

function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  // const [toggle,setToggle] = useState

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(add(input));
      setInput("");
    } else {
      alert("Please enter a task before adding!");
    }
  };

  return (
    <div className="main">
      <h1>Todo Tasks!</h1>

      <div className="addTodo">
        <input
          type="text"
          value={input}
          placeholder="Add new task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      {todos.map((task, i) => (
        <div key={i} className="tasks">
          <p
            onClick={() =>
              dispatch(
                update({
                  index: i,
                  title: task.title,
                  value: !task.value,
                })
              )
            }
          >
            {task.value ? <AiFillCheckCircle /> : <GoCircle />}
          </p>
          <h3>{task.title}</h3>
          <button
            onClick={() => {
              const newTitle = prompt("Edit task:", task.title);
              if (newTitle) {
                dispatch(
                  update({
                    index: i,
                    title: newTitle,
                    value: task.value,
                  })
                );
              }
            }}
          >
            Edit
          </button>
          <button onClick={() => dispatch(remove(i))}>
            <CiCircleRemove />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
