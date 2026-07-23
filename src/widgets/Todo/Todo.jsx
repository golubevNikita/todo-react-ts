import { useContext } from "react";

import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import TodoInfo from "@/features/stats";

import { TodoList } from "@/entities/todo";
import { TasksContext } from "@/entities/todo";

import Button from "@/shared/ui/Button";

import styles from "./Todo.module.scss";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>

      <AddTaskForm />

      <SearchTaskForm />

      <TodoInfo />

      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({
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
