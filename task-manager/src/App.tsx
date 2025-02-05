import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <h1>Gestor de Tareas ✅</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
