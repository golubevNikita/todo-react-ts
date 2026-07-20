import { memo, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.scss";

const TodoList = () => {
  const { tasks, filteredTasks } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className={styles.emptyMessage}>There are no tasks yet</div>;
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className={styles.emptyMessage}>Tasks not found</div>;
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        // <TodoItem className="todo__item" key={task.id} {...task} />
        <TodoItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
