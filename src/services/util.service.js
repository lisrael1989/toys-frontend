export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  loadFromStorage,
  saveToStorage,
  animateCSS,
  debounce,
  getEmptyReview,
}

function makeId(length = 6) {
  var txt = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function getEmptyReview() {
  return {
    txt: "",
  }
}

function makeLorem(size = 1) {
  var words = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Spider-Man",
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Wolverine",
    "The Flash",
    "Green Lantern",
    "Aquaman",
    "Black Panther",
    "Doctor Strange",
    "Deadpool",
    "Ant-Man",
    "Daredevil",
    "Green Arrow",
    "The Punisher",
    "Captain Marvel (Shazam)",
    "Jean Grey",
    "Cyclops",
    "Storm",
    "Nightcrawler",
    "Rogue",
    "Gambit",
    "Luke Cage",
    "Iron Fist",
    "Jessica Jones",
    "Hawkeye",
    "Scarlet Witch",
    "Quicksilver",
    "Vision",
    "Hawkman",
    "Hawkgirl",
    "Martian Manhunter",
    "The Atom",
    "Zatanna",
    "The Spectre",
    "Green Hornet",
    "The Shadow",
    "The Phantom",
    "The Spirit",
    "The Tick",
    "Spawn",
    "Hellboy",
    "Witchblade",
    "Invincible",
    "The Rocketeer",
    "The Crow",
    "The Tick",
    "Savage Dragon",
    "The Maxx",
    "V for Vendetta",
    "Rorschach",
    "Doctor Manhattan",
    "Nite Owl",
    "Silk Spectre",
    "Ozymandias",
    "Swamp Thing",
    "Constantine",
    "Blue Beetle",
    "Booster Gold",
    "Plastic Man",
    "The Question",
    "Red Tornado",
    "Firestorm",
    "Martian Manhunter",
    "Batwoman",
    "Batgirl",
    "Batwing",
    "Catwoman",
    "Huntress",
    "Oracle",
    "Supergirl",
    "Superboy",
    "Power Girl",
    "Hawkwoman",
    "Starfire",
    "Raven",
    "Cyborg",
    "Beast Boy",
    "Static Shock",
    "Blue Beetle",
    "Atom Smasher",
    "Sandman",
    "Death",
    "Dream (Morpheus)",
    "Lucifer",
    "Starman",
    "Jonah Hex",
    "Green Lantern (Alan Scott)",
    "Green Lantern (Jessica Cruz)",
    "Blue Devil",
    "Captain Atom",
    "Doctor Fate",
    "Etrigan the Demon",
    "The Creeper",
    "Plastic Man",
    "Ragman",
    "The Question (Renee Montoya)",
    "Black Canary",
    "Mr. Miracle",
    "Big Barda",
    "The Ray",
    "Elongated Man",
    "Fire",
    "Ice",
    "Animal Man",
  ]
  var txt = ""
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ""
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function makeLabel(size = 3) {
  var words = [
    "On wheels",
    "Box game",
    "Art",
    "Baby",
    "Doll",
    "Puzzle",
    "Outdoor",
    "Battery Powered",
  ]
  var word = ""
  let labels = []
  while (size > 0) {
    size--
    word = words[Math.floor(Math.random() * words.length)] + ""
    labels.push(word)
  }
  return labels
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

// In our utilService
function animateCSS(el, animation) {
  const prefix = "animate__"
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`

    el.classList.add(`${prefix}animated`, animationName)

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation()
      el.classList.remove(`${prefix}animated`, animationName)
      resolve("Animation ended")
    }
    el.addEventListener("animationend", handleAnimationEnd, { once: true })
  })
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function makeImage(size = 1) {
  const toyIcons = [
    "🧸",
    "🚗",
    "🎨",
    "🎆",
    "🌞",
    "☔",
    "⚡",
    "🎌",
    "🗼",
    "🗽",
    "🛴",
    "🛵",
    "🚍",
    "🚋",
    "🦼",
    "🚖",
    "🚜",
    "🦽",
    "🕋",
    "🚲",
    "⛑",
    "🏈",
    "🎱",
    "⛳",
    "💎",
    "👑",
    "⚽",
    "👓",
    "🏏",
    "🤿",
    "🎣",
    "🏐",
    "🏀",
    "🥎",
    "🏉",
    "🎲",
    "🎮",
    "🎯" /* Add more toy icons here */,
  ]
  var icon = ""
  while (size > 0) {
    size--
    icon = toyIcons[Math.floor(Math.random() * toyIcons.length)] + ""
  }
  return icon
}
