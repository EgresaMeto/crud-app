import { ActionTypes } from '../constants/action-types'
const intialState = {
  showModal: false,
}

export const modalReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
        debugger
      return { ...state, showModal: payload }
   
    default:
      return state;
  }
}