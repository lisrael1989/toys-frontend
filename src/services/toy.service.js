import { utilService } from "./util.service.js"
import { storageService } from "./async-storage.service.js"
import { httpService } from "./http.service.js"

// const BASE_URL = "toy/"

const STORAGE_KEY = "toyDB"

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
  getDefaultFilter,
  getDefaultSort,
  getLabels,
}

const labels = [
  "On wheels",
  "Box game",
  "Art",
  "Baby",
  "Doll",
  "Puzzle",
  "Outdoor",
  "Battery Powered",
]

_createToys()

// function query(filterBy, sort) {
//   return httpService.get("toy", { params: { filterBy, sort } })
// }

function query(filterBy, sort) {
  // Structure the params correctly before sending the request
  const params = { ...filterBy, ...sort }
  return httpService.get("toy", { params })
}

function getLabels() {
  return [...labels]
}

function getById(toyId) {
  return httpService.get(`toy/${toyId}`)
}

function remove(toyId) {
  return httpService.delete(`toy/${toyId}`)
}

function save(toy) {
  if (toy._id) {
    return httpService.put(`toy/${toy._id}`, toy)
  } else {
    return httpService.post("toy", toy)
  }
}

function getEmptyToy() {
  return {
    name: "",
    price: "",
    labels: [],
    inStock: "true",
  }
}

function getDefaultFilter() {
  return { name: "", price: "", inStock: "" }
}

function getDefaultSort() {
  return {
    by: "name",
    asc: true,
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(STORAGE_KEY)
  if (!toys || !toys.length) {
    const toys = [
      {
        _id: "t133",
        name: "Talking Doll",
        price: 123,

        labels: ["Doll", "Battery Powered", "Baby"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        _id: "t122",
        name: "lego",
        price: 155,
        labels: ["Doll", "Battery Powered", "Baby"],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        _id: "t111",
        name: "car",
        price: 255,
        labels: ["Doll", "Battery Powered", "Baby"],
        createdAt: 1631031801011,
        inStock: true,
      },
    ]
    utilService.saveToStorage(STORAGE_KEY, toys)
    return toys
  }

  function _createToy(name) {
    const toy = getEmptyToy(name)
    toy.id = utilService.makeId()
    return toy
  }
}
