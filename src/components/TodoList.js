import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItemList todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
