import {createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { todosReducers } from "./reducers/todosReducer";
import { TabReducers } from "./reducers/TabReducers";

const reducer = combineReducers(
    {
        todos: todosReducers,
        currentTab: TabReducers
    }
)
const middleWare = [thunk];

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleWare)))
export default store;