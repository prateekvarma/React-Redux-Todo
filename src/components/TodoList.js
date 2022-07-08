import React from "react";
import TodoItemList from "./TodoItemList";
import NewTodoForm from "./NewTodoForm";

const TodoList = ({ todos = [{ text: "Hello" }] }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo, i) => {
        return <TodoItemList key={i} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
