import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="input__container">
        <div className="input__wrapper">
          <input type="text" placeholder="Task" />
          <input type="text" placeholder="Description" />
          <input type="number" placeholder="Deadline (days)" />
          <button className="add__task">Add Task</button>
        </div>
      </div>
      <div className="todo__list"></div>
    </div>
  );
}

export default App;
