import { combineReducers } from "redux";
import ui from "./reducer.ui";
import tasks from "./reducer.tasks";

export default combineReducers({
  ui,
  tasks
});
