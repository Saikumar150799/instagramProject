import { combineReducers } from "redux";

import { postsReducer, loggedUsersReducer,loggedInReducer,getActiveUser } from "./instgramReducer";

const reducers = combineReducers({
    allPosts: postsReducer,
    loggedUser: loggedUsersReducer,
    loggedIn:loggedInReducer,
    activeUser:getActiveUser,
    
})

export default reducers