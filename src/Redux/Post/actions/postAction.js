import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../actionTypes"

export const addPost = (post)=>{
    return {
        type: ADD_POST,
        payload: post
    }
}
export const removePost = (id)=>{
    return {
        type: REMOVE_POST,
        payload: {id: id}
    }
}

export const updatePost = (post)=>{
    return {
        type: UPDATE_POST,
        payload: post
    }
}