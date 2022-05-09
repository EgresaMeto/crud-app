import { ActionTypes } from '../constants/action-types'
const intialState = {
  products: [],
}

export const postsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, products: payload }
    
    default:
      return state
  }
}
