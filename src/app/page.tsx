"use client";
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const [task, setTask] = useState([{}]);
  const reference = useRef();
  // let value = ""
  const handlerAdd = () => {
    // console.log(value);
    let referenceValue = reference.current.value;
    // console.log(referenceValue);

    setTask([{ title: referenceValue, id: nanoid() }, ...task]);
    if (true) {
      reference.current.value = "";
    }
  };
  // const handlerChange = (event) => {
  //   value = event.target.value;
  //   console.log(value);

  // }
  const onKeyDown = (my_key) => {
    if (my_key.key === "Enter") {
      handlerAdd();
    }
  };

  const deleteTask = (e: string) => {
    let newTask = task.filter((elem) => elem.id !== e);
    setTask(newTask);
  };
  return (
    <div className="flex gap-x-3  flex-col ">
      <div className="text-2xl bg-black text-white h-12 text-center mb-4">
        <h1>Task Manager</h1>
      </div>
      <input
        ref={reference}
        onKeyDown={onKeyDown}
        className="border-2 p-2 m-4  font-semibold border-gray-700 rounded-lg"
        placeholder="Add a task"
      />
      <button
        onClick={handlerAdd}
        className="bg-blue-500 text-yellow-500 rounded-lg px-2 py-1"
      >
        Add task
      </button>

      <ul className="">
        {task.length === 0 ? (
          <h1 className="bg-gray-400">No task</h1>
        ) : (
          task.map((elem, index) => {
            return (
              <div className="flex justify-between bg-gray-400 items-center">
                <li className="" key={elem.id}>
                  {index + 1}
                  {elem.title}
                </li>
                <button
                  onClick={() => deleteTask(elem.id)}
                  className="bg-red-500 text-white rounded-lg px-2 py-1 m-2"
                >
                  Delete
                </button>
              </div>
            );
          })
        )}
      </ul>
      <ToastContainer />
    </div>
  );
}
// hum is case me useState ki jagah useRef ka use kar rahe hai kyuki hume input field ka value chahiye tha jo ki hume useRef se mil jata hai.
// useState hum is lye use nahi ker rahe hain kyuke useState me her change ke bad value re-render hoti hai
// useRef me esa nahi hota hai, useRef value ka reference deta hai lakin jab hum clicked kerte hai toh woh value ko render kerta hai
