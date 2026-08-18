import { useDispatch, useSelector } from "react-redux";
import { actionAdd, actionDelete, actionFetch } from "../Store";
import { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionAdd(input));
    setInput("")
  };

  const handleDelete = (index) => {
    dispatch(actionDelete(index));
  }

  const handleFetch = () => {
    dispatch(actionFetch());
  }

  return (
    <div className="w-full bg-black h-screen">
      <div className="w-full max-w-lg bg-white">
        <h1 className="text-3xl font-bold">TODO APP</h1>
        <form onSubmit={handleSubmit} className="w-full border rounded-2xl flex">
          <input
            type="text"
            placeholder="Enter Tasks"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full outline-none"
          />
          <button className="">Add</button>
        </form>
        <button onClick={handleFetch}>Fetch Tasks</button>
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <p>{index + ": " + task}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
