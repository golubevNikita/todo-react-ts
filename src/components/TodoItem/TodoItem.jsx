import { memo, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import RouterLink from "../RouterLink/RouterLink";

import styles from "./TodoItem.module.scss";

const TodoItem = (props) => {
  const {
    // className = "",
    id,
    title,
    isDone,
  } = props;

  const {
    fifirstIncompleteTaskRef,
    fifirstIncompleteTaskId,
    deleteTask,
    toggleTaskComplete,
  } = useContext(TasksContext);

  return (
    <li
      // className={`todo-item ${className}`}
      className={styles.todoItem}
      ref={id === fifirstIncompleteTaskId ? fifirstIncompleteTaskRef : null}
    >
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={(event) => toggleTaskComplete(id, event.target.checked)}
      />

      <RouterLink
        className={styles.label}
        to={`/tasks/${id}`}
        aria-label="Task detail page"
      >
        {title}
      </RouterLink>

      <label className="visually-hidden" htmlFor={id}>
        {title}
      </label>

      <button
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTask(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default memo(TodoItem);
