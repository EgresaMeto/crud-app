import { ActionTypes } from '../constants/action-types'

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  }
}

export const deletePostAction = (id) => {
  return {
    type: ActionTypes.DELETE_POST,
    payload: id,
  }
}

export const setSelectedPost = (value) => {
  return {
    type: ActionTypes.SET_SELECTED_POST,
    payload: value,
  }
}

export const updatePostAction = (value) => {
  return {
    type: ActionTypes.UPDATE_POST,
    payload: value,
  }
}

export const createPostAction = (value) => {
  return {
    type: ActionTypes.CREATE_POST,
    payload: value,
  }
}