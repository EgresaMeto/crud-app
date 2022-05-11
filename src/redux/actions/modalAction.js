import { ActionTypes } from '../constants/action-types'

export const toggleModal = (value) => {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: value,
  }
}