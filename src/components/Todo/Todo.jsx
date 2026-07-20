import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

import AddTaskForm from "../AddTaskForm/AddTaskForm";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoList from "../TodoList/TodoList";
import Button from "../Button/Button";

import styles from "./Todo.module.scss";

const Todo = () => {
  const { fifirstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>

      <AddTaskForm />

      <SearchTaskForm />

      <TodoInfo />

      <Button
        onClick={() =>
          fifirstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Show first incomplete task
      </Button>

      <TodoList />
    </div>
  );
};

export default Todo;
