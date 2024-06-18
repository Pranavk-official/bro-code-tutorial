import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["some task", "hi"]);
  const [newTasks, setNewTasks] = useState("");

  const handleInputChange = (e) => {
    setNewTasks(e.target.value);
  };

  const addTask = () => {
    if (newTasks.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTasks]);
      setNewTasks("");
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          name="task"
          id=""
          placeholder="Enter a task..."
          value={newTasks}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={`${task}-${index}`}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
