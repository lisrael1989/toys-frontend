import { userService } from "../../services/user.service.js"

//* Count
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const CHANGE_BY = "CHANGE_BY"
export const SET_WATCHED_USER = "SET_WATCHED_USER"

//* User
export const SET_USER = "SET_USER"
export const SET_USERS = "SET_USERS"
export const SET_SCORE = "SET_SCORE"
export const SET_USER_SCORE = "SET_USER_SCORE"

const initialState = {
  loggedInUser: userService.getLoggedinUser(),
  users: [],
  watchedUser: null,
}

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    case "DECREMENT":
      return { ...state, count: state.count - 1 }
    case "CHANGE_BY":
      return { ...state, count: state.count + action.diff }
    //* User
    case SET_USER:
      return {
        ...state,
        loggedInUser: action.user,
      }
    case SET_USER_SCORE:
      const loggedInUser = { ...state.loggedInUser, score: action.score }
      return { ...state, loggedInUser }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case SET_WATCHED_USER:
      return { ...state, watchedUser: action.user }
    default:
      return state
  }
}
