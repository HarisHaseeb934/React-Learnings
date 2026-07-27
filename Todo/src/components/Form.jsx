import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit} className="flex justify-center items-center">
        <div>
          <input className = "bg-white w-sm h-10 rounded-l-full p-4 text-black outline-0"
            type="text"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div className="bg-blue-500 px-3 py-2 rounded-r-full">
          <button type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};