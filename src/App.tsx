import { ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./types";

function App() {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === "task") {
      setTask(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "deadline") {
      setDeadline(Number(value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      description: description,
      deadLine: deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    setDescription("");
  };

  return (
    <div className="app">
      <div className="input__container">
        <div className="input__wrapper">
          <input
            type="text"
            placeholder="Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (days)"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <button className="add__task" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="todo__list"></div>
    </div>
  );
}

export default App;
