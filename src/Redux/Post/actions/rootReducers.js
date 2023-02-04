import { combineReducers } from "@reduxjs/toolkit";
import PostReducer from "../PostReducer";

const rootReducers = combineReducers({
    posts: PostReducer
})
export default rootReducers;