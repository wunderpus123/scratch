import { combineReducers } from "redux";

// import all reducers here
import tasksReducer from "./tasksReducer";

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  tasks: tasksReducer
});

// make the combined reducers available for import
export default reducers;
