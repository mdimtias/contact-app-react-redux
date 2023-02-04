import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./actions/rootReducers";

const store = createStore(rootReducers, composeWithDevTools());
export default store;