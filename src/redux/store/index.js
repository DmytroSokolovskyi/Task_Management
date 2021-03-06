import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk";
import {reducer} from "../reducers";

export const store = createStore(reducer, applyMiddleware(ReduxThunk));
