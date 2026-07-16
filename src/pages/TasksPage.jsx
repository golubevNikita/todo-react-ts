import { TasksProvider } from "../context/TasksProvider";
import Todo from "../components/Todo";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default TasksPage;
