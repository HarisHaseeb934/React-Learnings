import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearTasks, removeTask } from "../Store/slice";
import { useLocalStorage } from "./localStorage";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [store, setLocal, setlocalupdate, clearAllLocal] = useLocalStorage('todo' ,[]);
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length === 0) return;
    dispatch(addTask(input));
    setLocal(input);
    console.log(input);
    setInput("");
  }

  function handleClear() {
    dispatch(clearTasks());
    clearAllLocal();
  }

  function handleRemove(id) {
    dispatch(removeTask(id));
    setlocalupdate(id);
  }
  return (
    <section className="bg-black w-full h-screen">
      <div className="max-w-xl bg-white m-auto rounded-2xl flex flex-col justify-center items-center gap-6 inset-shadow-sm/30 p-5">
        <h1 className="bg-black text-white font-bold p-2 px-4 rounded-3xl">
          TODO APP
        </h1>
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            name="task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Tasks"
            className=" p-2 outline-none border w-[230px] sm:w-sm"
          />
          <button
            type="submit"
            className="p-[9px] bg-black text-white rounded-r-2xl"
          >
            Add
          </button>
        </form>
        <button
          onClick={handleClear}
          className="bg-black p-2 px-4 rounded-3xl text-white"
        >
          Clear All
        </button>
        <ul>
          {store.map((curr, index) => {
            return (
              <li
                key={index}
                className="flex inset-shadow-sm/30 rounded-2xl w-[230px] sm:w-sm mt-5"
              >
                <p className="text-start w-xs p-2">{curr}</p>
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 p-2 rounded-r-2xl"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
