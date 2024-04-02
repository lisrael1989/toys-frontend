import { combineReducers, compose, legacy_createStore as createStore } from "redux"
import { toyReducer } from "./reducers/toy.reducer.js"
import { userReducer } from "./reducers/user.reducer.js"
import { reviewReducer } from "../store/reducers/review.reducer.js"
import { systemReducer } from "../store/reducers/system.reducer.js"

const rootReducer = combineReducers({
  toyModule: toyReducer,
  userModule: userReducer,
  systemModule: systemReducer,
  reviewModule: reviewReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store

// store.subscribe(() => {
//   console.log("**** Store state changed: ****")
//   console.log("storeState:\n", store.getState())
//   console.log("*******************************")
// })
