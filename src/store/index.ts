import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./reducers/tasks";
import filterReducer from "./reducers/filter";

const store = configureStore({
  reducer: {
    tasks: TaskReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
