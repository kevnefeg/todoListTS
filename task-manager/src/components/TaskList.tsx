import { useTaskStore } from "../store/taskStore";

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useTaskStore();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => toggleTask(task.id)}>{task.title}</span>
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
