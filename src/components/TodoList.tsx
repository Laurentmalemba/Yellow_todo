// /src/components/TodoList.tsx
'use client';
import React, { useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;
    const newTask: Todo = { id: Date.now().toString(), text: task, completed: false };
    setTodos([...todos, newTask]);
    setTask("");
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 border rounded-l-md"
        />
        <button
          onClick={addTask}
          className="bg-secondary text-primary px-4 py-2 rounded-r-md font-semibold"
        >
          Add
        </button>
      </div>
      <ul className="bg-white p-4 rounded shadow-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button
              onClick={() => deleteTask(todo.id)}
              className="text-red-500 font-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;