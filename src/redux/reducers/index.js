import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { postsReducer } from './productsReducer'

const reducers = combineReducers({
  allPosts: postsReducer,
  
})
export default reducers
