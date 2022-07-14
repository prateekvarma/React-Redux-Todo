import React from "react";
import { connect } from "react-redux";
import TodoItemList from "./TodoItemList";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, markTodoAsCompleted } from "../actions";

const TodoList = ({ todos, onRemovePressed, onCompletedPressed }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo, i) => {
        return (
          <TodoItemList
            key={i}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemovePressed: (text) => {
      return dispatch(removeTodo(text));
    },
    onCompletedPressed: (text) => {
      return dispatch(markTodoAsCompleted(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
