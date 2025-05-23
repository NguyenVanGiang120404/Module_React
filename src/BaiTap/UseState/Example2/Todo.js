// Todo.jsx
import { useState } from "react";
import TodoForm from "./TodoForm";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h2>Danh sách công việc:</h2>
      {/* ✅ Sửa onAddtask -> onAddTask để đồng bộ tên props */}
      <TodoForm onAddTask={handleAddTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
