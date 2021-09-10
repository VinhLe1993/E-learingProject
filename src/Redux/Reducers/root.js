import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import CourseReducer from "./course";
import UserReducer from "./user"

const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer,
    account: accountReducer
});

export default RootReducer;
