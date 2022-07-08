import { createStore, combineReducers } from "redux";
import { todos } from "./reducers";

const reducers = {
  todos: todos,
};

const rootReducer = combineReducers(reducers);

export const configStore = () => createStore(rootReducer);
