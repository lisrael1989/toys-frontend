import { toyService } from "../../services/toy.service.js"
import { showSuccessMsg } from "../../services/event-bus.service.js"
import {
  ADD_TOY,
  REMOVE_TOY,
  SET_FILTERBY,
  SET_TOYS,
  UPDATE_TOY,
  SET_SORTBY,
} from "../reducers/toy.reducer.js"
import { store } from "../store.js"

export async function loadToys() {
  // console.log('filterBy', filterBy)
  try {
    const { filterBy } = store.getState().toyModule
    const toys = await toyService.query(filterBy)
    store.dispatch({ type: SET_TOYS, toys })
  } catch (err) {
    console.log("toy action -> Cannot load toys", err)
    throw err
  }
}

export async function removeToy(toyId) {
  try {
    await toyService.remove(toyId)
    store.dispatch({ type: REMOVE_TOY, toyId })
  } catch (err) {
    console.log("toy action -> Cannot remove toy", err)
    throw err
  }
}

export async function saveToy(toy) {
  try {
    const type = toy._id ? UPDATE_TOY : ADD_TOY
    const toyToSave = await toyService.save(toy)
    store.dispatch({ type, toy: toyToSave })
    return toyToSave
  } catch (err) {
    console.log("toy action -> Cannot save toy", err)
    throw err
  }
}

export function setFilterBy(filterBy = toyService.getDefaultFilter()) {
  store.dispatch({ type: SET_FILTERBY, filterBy })
}

export function setSortBy(sortBy = toyService.getDefaultSort()) {
  store.dispatch({ type: SET_SORTBY, sortBy })
}
