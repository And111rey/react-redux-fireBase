import { authReducer } from "./authReducer"
import { projecthReducer } from "./projectReducer"
import { combineReducers } from "redux"


export const rootReducer = combineReducers({
    auth: authReducer,
    project: projecthReducer
})