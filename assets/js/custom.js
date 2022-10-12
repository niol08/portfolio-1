const typedTextSpan = document.querySelector(".typed-text")
const cursorSpan = document.querySelector(".cursor")
const intro = document.querySelector(".introductory")
const nugget = document.querySelector(".nugget-parent")
const doNotClick = document.querySelector(".clickable")
const grid = document.querySelector(".grid")
const nuggetArray = [
  "Welcome to my website 😇.",
  "well, don't forget to stay hydrated.",
  "Get some sleep 😴.",
  "You! yes, excercise and sweat.",
  "You are the best. Don't forget that.",
  "Eat healthy 😋🥦🍲.",
  "Smile 😎.",
  "Make someone happy today.",
  "Read a book 🤓.",
  "Try something new.",
  "Listen to music! 🎵.",
  "Call bae ❤️, it's perfect if you don't have one ✨.",
  "Stay Safe 😊✨.",
]

const textArray = ["ENIOLA OLADEJO", "a developer", "a student", "a freelancer"]
// const fontColor = ["#00FFFF", "#00FF00", "#FFFF00", "#FF00FF"]
const work = [
  {
    name: "Rest country api",
    link: " https://niol-show-projects.github.io/rest-country-api/",
    image: "../images/rest-country-api-img.png",
    description:
      "This is a responsive website created with HTML, CSS, Vanilla JS and an API.",
    features: [
      "See all countries on the homepage",
      "Search for a country in the input field",
      "Filter countries by region",
      "Click on a country to see more detailed information on a separate page",
      "Toggle the color scheme between light and dark mode",
    ],
    repo: "https://github.com/niol-show-projects/rest-country-api",
  },
  {
    name: "space expo",
    link: "https://space-tourism-expo.netlify.app/",
    image: "../images/space-expo-img.png",
    description:
      "This is a full fledged website on space tourism. It is built with React.JS, Swiper.JS and SASS. ",
    features: ["Responsive", "Hover states", "Slider effects"],
    repo: "https://github.com/niol08/space-expo",
  },
  {
    name: "todo app",
    link: " https://niol08.github.io/TODO__APP/",
    image: "../images/todo-app-img.png",
    description:
      "This is a useful todo application created with HTML, CSS, Vanilla JS, Local storage API and a polyfill(to listen to drag events on mobile).",
    features: [
      "Responsive",
      "Add new todos to the list",
      "Mark todos as complete",
      "Toggle light and dark mode",
      "Todos doesn't delete on refresh",
      "Drag and drop to reorder items on the list",
      "Delete todos from the list",
      "Clear all completed todos",
      "Filter by all/active/complete todos",
    ],
    repo: "https://github.com/niol08/TODO__APP",
  },
  {
    name: "order summary card",
    link: "https://niol08.github.io/Order-summary-card-/",
    image: "../images/order-summary-card-img.png",
    description: "This is a simple project created with just HTML and SASS",
    features: ["Responsive", "Hover states for interactive elements"],
    repo: "https://github.com/niol08/Order-summary-card-",
  },
  {
    name: "Advice generator",
    link: "https://advice-gen-app-08.netlify.app/",
    image: "../images/advice-gen-app-img.png",
    description:
      "This is an advice generator app created with React.JS, SASS, and an API. ",
    features: [
      "Responsive",
      "Hover states",
      "Generates new advice on clicking the die icon ",
    ],
    repo: "https://github.com/niol08/advice-generator-app",
  },
  {
    name: "Huddle landing page",
    link: "https://niol08.github.io/huddle-landing-page/",
    image: "../images/huddle-page-img.png",
    description:
      "This is a landing  page of an hypothetical website. It was built with just HTML and SASS",
    features: ["Responsve", "Hover states", "Curved background"],
    repo: "https://github.com/niol08/huddle-landing-page",
  },
]
const typingDelay = 200
const erasingDelay = 100
const newTextDelay = 2000 // Delay between current and next text
let textArrayIndex = 0
let charIndex = 0

const portfolio = () => {
  work.forEach((item) => {
    const { name, description, features, repo, link, image } = item
    const element = document.createElement("div")
    element.classList.add("card")
    element.innerHTML = `<figure class="img-parent">
                <img src="${image}" alt="${name}-screenshot" />
              </figure>
              <h3 class="name">${name}</h3>
              <div class="desc">${description}</div>
              <div>
              <div class="feature-txt">Features</div>
              <ul class="features"></ul>
              </div>
              <div class="links"><a href="${link}">visit website</a><a href="${repo}">check repo</a></div>`
    const newElement = element.querySelector(".features")
    features.forEach((item) => {
      const element = document.createElement("li")
      element.innerText = item
      newElement.append(element)
    })
    grid.append(element)
  })
}

const displayNugget = () => {
  let max = nuggetArray.length
  let arrIndex = Math.floor(Math.random() * max)
  // nugget.textContent = nuggetArray[arrIndex]
  let newArr = nuggetArray.map((item) => {
    return `<div class="item">${item}</div>`
  })
  nugget.innerHTML = newArr[arrIndex]
  nugget.classList.add("nuggets")
  doNotClick.disabled = true
  const item = document.querySelector(".item")

  setTimeout(() => {
    nugget.removeChild(item)
    nugget.classList.remove("nuggets")
    doNotClick.disabled = false
  }, 3000)
}
const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      // typedTextSpan.style.color = fontColor[textArrayIndex]
      cursorSpan.classList.add("typing")
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingDelay)
  } else {
    cursorSpan.classList.remove("typing")
    setTimeout(erase, newTextDelay)
  }
}

const erase = () => {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing")
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    )
    charIndex--
    setTimeout(erase, erasingDelay)
  } else {
    cursorSpan.classList.remove("typing")
    textArrayIndex++
    if (textArrayIndex >= textArray.length) textArrayIndex = 0
    setTimeout(type, typingDelay + 1100)
  }
}
// ####### Event listeners #######
document.addEventListener("DOMContentLoaded", () => {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250)
})
doNotClick.addEventListener("click", displayNugget)
document.addEventListener("DOMContentLoaded", portfolio)
