import { ActionTypes } from '../constants/action-types'
const intialState = {
  posts: [],
  selectedPost: {
    title: "",
    body: "",
    userId: 1,
  }
}

export const postsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: [...payload] }
    case ActionTypes.DELETE_POST:
      let newData = state.posts.filter((el) => el.id !== payload);
      return {...state, posts: newData}
      case ActionTypes.SET_SELECTED_POST:
        return {...state, selectedPost: payload}
        case ActionTypes.UPDATE_POST:
          let index = state.posts.findIndex((el)=>el.id === payload.id);
          let data = state.posts;
          data[index] = payload;
          return {...state, posts: data}
          case ActionTypes.CREATE_POST:
            return {...state, posts: [...state.posts, payload]}
    default:
      return state
  }
}
