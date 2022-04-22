import { actionTypes } from "../contants/actionType"

export const setPosts=(posts)=>{
    return{
        type:actionTypes.SET_POSTS,
        payLoad:posts
    }
}

export const loggedUsers=(users)=>{
    return{
        type:actionTypes.LOGGED_USER,
        payLoad:users
    }
}

export const loggedIn=(value)=>{
    return {
        type:actionTypes.LOGGED_IN,
        payLoad:value
    }
}

export const setActiveUser=(user)=>{
    return{
        type:actionTypes.ACTIVE_USER,
        payLoad:user
    }
}