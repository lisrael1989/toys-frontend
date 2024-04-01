import { userService } from "../../services/user.service.js"

//* Count
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const CHANGE_BY = "CHANGE_BY"

//* User
export const SET_USER = "SET_USER"
export const SET_USER_SCORE = "SET_USER_SCORE"
export const SET_USERS = "SET_USERS"

const initialState = {
  loggedInUser: userService.getLoggedinUser(),
  users: [],
}

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    //* User
    case SET_USER:
      return {
        ...state,
        loggedInUser: action.user,
      }
    case SET_USER_SCORE:
      const loggedInUser = { ...state.loggedInUser, score: action.score }
      return { ...state, loggedInUser }
    case SET_USERS: // Handle setting the users list
      return {
        ...state,
        users: action.users,
      }
    default:
      return state
  }
}
