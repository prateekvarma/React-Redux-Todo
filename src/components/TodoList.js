import React from "react";
import TodoItemList from "./TodoItemList";

const TodoList = ({ todos = [{ text: "Hello" }] }) => { //passing dummy prop
  return todos.map((todo) => {
    return (
      <div>
        <h4>This is it</h4>
        <TodoItemList key={todo} todo={todo} />
      </div>
    );
  });
};

export default TodoList;
