import { createStore, combineReducers } from "redux";
import { reducer as form } from "redux-form";


const reducer = combineReducers({ form });
export default createStore( reducer );
