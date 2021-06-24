import { combineReducers } from "redux";
import counter from "./app/todos/duck";

const rootReducer=combineReducers({
    todos: counter,
});

export default rootReducer