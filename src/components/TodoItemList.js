import React from "react";

const TodoItemList = ({ todo }) => {
  return (
    <div>
        <p>{todo.text}</p>
        <button>Mark As Completed</button>
        <button>Delete</button>
    </div>
  )
};

export default TodoItemList;
