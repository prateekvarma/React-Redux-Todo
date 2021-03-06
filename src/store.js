import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { todos } from "./reducers";

const reducers = {
  todos: todos,
};

//This is just an object that defines how and where to save the persisted data
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configStore = () => createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  ); //persistedReducer instead of rootReducer when configuring for persistance
