import React from "react";

const TodoItemList = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div>
      <p>{todo.text}</p>
      {todo.isCompleted ? null : (
        <button onClick={() => onCompletedPressed(todo.text)}>
          Mark As Completed
        </button>
      )}

      <button onClick={() => onRemovePressed(todo.text)}>Delete</button>
    </div>
  );
};

export default TodoItemList;
