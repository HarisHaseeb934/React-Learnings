import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="bg-white text-black w-sm flex p-3 justify-between m-1">
      <span className={`${checked ? "line-through" : "none"}`}>{data}</span>
      <div>
      <button className="bg-green-400 p-1 rounded-full mx-2" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="bg-red-400 p-1 rounded-full mx-2" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
      </div>
    </li>
  );
};