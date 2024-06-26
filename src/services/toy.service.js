import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"
import { httpService } from "./http.service.js"

const BASE_URL = "toy/"

const STORAGE_KEY = "toyDB"

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
export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
  getDefaultFilter,
  getDefaultSort,

  getLabels,
  getDataValues,
}

_createToys()

function query(filterBy, sortBy) {
  return httpService.get("toy/", { params: { filterBy, sortBy } })
}

function getById(toyId) {
  return httpService.get(`toy/${toyId}`)
}

function getLabels() {
  return [...labels]
}

function getDataValues(labels) {
  var newData = []
  for (var i = 0; i < Object.keys(labels).length; i++) {
    newData.push(Object.values(labels)[i])
  }
  return newData
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
    price: utilService.getRandomIntInclusive(100, 500),
    labels: [],
    inStock: "true",
  }
}

function getDefaultFilter() {
  return { txt: "", price: "", inStock: "", labels: [] }
}

function getDefaultSort() {
  return {
    by: "name",
    asc: 1,
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
