import { actionTypes } from "../contants/actionType";

const initialStates={
    posts:[],
}

export const postsReducer=(state=initialStates,action)=>{
    switch(action.type){
        case actionTypes.SET_POSTS:return {...state,posts:action.payLoad}
        default :return state
    }
}

export const loggedUsersReducer=(state=initialStates,action)=>{
    switch(action.type){
        case actionTypes.LOGGED_USER:return {...state,posts:action.payLoad}
        default :return state
    }
}

export const loggedInReducer=(state=initialStates,action)=>{
    switch(action.type){
        case actionTypes.LOGGED_IN:return {posts:action.payLoad}
        default :return state
    }
}

export const getActiveUser=(state=initialStates,action)=>{
    switch(action.type){
        case actionTypes.ACTIVE_USER:return {...state,posts:action.payLoad}
        default :return state
    }
}