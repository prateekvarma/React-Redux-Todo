export const createTodo = (text) => {
  return {
    type: "CREATE_TODO",
    payload: { text },
  };
};

export const removeTodo = (text) => {
  return {
    type: "REMOVE_TODO",
    payload: { text },
  };
};
