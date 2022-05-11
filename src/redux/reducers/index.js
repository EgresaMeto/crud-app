import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { modalReducer } from './modalReducer'
import { postsReducer } from './postsReducer'

const reducers = combineReducers({
  allPosts: postsReducer,
  modal: modalReducer,
})
export default reducers
