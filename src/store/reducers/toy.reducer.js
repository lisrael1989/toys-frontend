import { toyService } from "../../services/toy.service.js"

export const SET_TOYS = "SET_TOYS"
export const REMOVE_TOY = "REMOVE_TOY"
export const ADD_TOY = "ADD_TOY"
export const UPDATE_TOY = "UPDATE_TOY"
export const SET_FILTERBY = "SET_FILTERBY"
export const SET_SORTBY = "SET_SORTBY"

//* Shopping cart
export const TOGGLE_CART_IS_SHOWN = "TOGGLE_CART_IS_SHOWN"
export const ADD_CAR_TO_CART = "ADD_CAR_TO_CART"
export const REMOVE_CAR_FROM_CART = "REMOVE_CAR_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"
// export const SET_IS_LOADING = "SET_IS_LOADING"

const initialState = {
  toys: [],
  // isLoading: false,
  filterBy: toyService.getDefaultFilter(),
  sortBy: toyService.getDefaultSort(),
}

export function toyReducer(state = initialState, action = {}) {
  let toys
  switch (action.type) {
    case SET_TOYS:
      return { ...state, toys: action.toys }

    case SET_FILTERBY:
      return {
        ...state,
        filterBy: { ...state.filterBy, ...action.filterBy },
      }

    case SET_SORTBY:
      return {
        ...state,
        sortBy: { ...state.sortBy, ...action.sortBy },
      }

    case REMOVE_TOY:
      toys = state.toys.filter((toy) => toy._id !== action.toyId)
      return { ...state, toys }

    case ADD_TOY:
      return (toys = [...state.toys, action.toy])
    case UPDATE_TOY:
      toys = state.toys.map((toy) => (toy._id === action.toy._id ? action.toy : toy))
      return { ...state, toys }

    // case SET_IS_LOADING:
    //   return {
    //     ...state,
    //     isLoading: action.isLoading,
    //   }

    //* Shopping cart
    case TOGGLE_CART_IS_SHOWN:
      return { ...state, isCartShown: !state.isCartShown }

    case ADD_CAR_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.car],
      }

    case REMOVE_CAR_FROM_CART:
      const shoppingCart = state.shoppingCart.filter((car) => car._id !== action.carId)
      return { ...state, shoppingCart }

    case CLEAR_CART:
      return { ...state, shoppingCart: [] }

    default:
      return state
  }
}
