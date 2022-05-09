import { ActionTypes } from '../constants/action-types'
const intialState = {
  posts: [],
}

export const postsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload }
    
    default:
      return state
  }
}
