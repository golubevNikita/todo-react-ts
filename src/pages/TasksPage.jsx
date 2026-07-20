import { TasksProvider } from "../context/TasksProvider";
import Todo from "../components/Todo/Todo";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default TasksPage;
