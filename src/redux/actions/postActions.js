import { ActionTypes } from '../constants/action-types'

export const setPosts = (posts) => {
  debugger
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  }
}
