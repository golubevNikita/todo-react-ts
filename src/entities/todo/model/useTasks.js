import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import tasksAPI from "@/shared/api/tasks";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [disappearingTaskId, setDisappearingTaskId] = useState(null);
  const [appearingTaskId, setАppearingTaskId] = useState(null);

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure about that?");

    if (isConfirmed) {
      tasksAPI.deleteAll(tasks).then(() => setTasks([]));
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (taskId) => {
      tasksAPI.delete(taskId).then(() => {
        setDisappearingTaskId(taskId);
        setTimeout(() => {
          setTasks(tasks.filter((task) => task.id !== taskId));
          setDisappearingTaskId(null);
        }, 400);
      });
    },

    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      tasksAPI.toggleComplete(taskId, isDone).then(() => {
        setTasks(
          tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, isDone };
            }

            return task;
          }),
        );
      });
    },

    [tasks],
  );

  const addTask = useCallback((title) => {
    const newTask = {
      // id: crypto?.randomUUID() ?? Date.now().toString(),
      // id генерит сервер
      title,
      isDone: false,
    };

    tasksAPI.add(newTask).then((addedTask) => {
      setTasks((prevTasks) => [...prevTasks, addedTask]);
      // избавились от обращения к state-переменной tasks,
      // поэтому теперь не нужно указывать tasks в массиве зависимостей
      setNewTaskTitle("");
      setSearchQuery("");

      newTaskInputRef.current.focus();

      setАppearingTaskId(addedTask.id);
      setTimeout(() => {
        setАppearingTaskId(null);
      }, 400);
    });
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();

    tasksAPI.getAll().then(setTasks);
  }, []);

  return {
    tasks,
    filteredTasks,

    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,

    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  };
};

export default useTasks;
