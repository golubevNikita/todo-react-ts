import { TasksProvider } from "./context/TasksProvider";

import Todo from "./components/Todo";

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default App;
