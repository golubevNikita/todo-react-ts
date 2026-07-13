import { useRef } from "react";

const useIncompleteTaskScroll = (tasks) => {
  const fifirstIncompleteTaskRef = useRef(null);
  const fifirstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  return {
    fifirstIncompleteTaskRef,
    fifirstIncompleteTaskId,
  };
};

export default useIncompleteTaskScroll;
