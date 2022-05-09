import { ActionTypes } from '../constants/action-types'

export const setPosts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}
