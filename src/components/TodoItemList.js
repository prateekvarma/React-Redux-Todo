import React from "react";

const TodoItemList = ({ todo, onRemovePressed }) => {
  return (
    <div>
        <p>{todo.text}</p>
        <button>Mark As Completed</button>
        <button onClick={() => onRemovePressed(todo.text)}>Delete</button>
    </div>
  )
};

export default TodoItemList;
