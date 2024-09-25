// import { createStore } from "redux";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducer";
export const store =createStore(reducers,{},applyMiddleware(thunk))