import { ITask } from "../types";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props): JSX.Element => {
  return (
    <div className="task">
      <div className="task__content">
        <h2>{task.taskName}</h2>
        <h3>{task.description}</h3>
      </div>
      <div className="task__buttons">
        <h4>{task.deadLine}</h4>
        <button onClick={() => completeTask(task.taskName)}>X</button>
      </div>
    </div>
  );
};

export default TodoTask;
