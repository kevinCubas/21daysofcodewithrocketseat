// const nextElm = document.getElementById("next");
// const prevElm = document.getElementById("prev");
// const imageContainer = document.querySelector(".image-container");
// const images = document.querySelectorAll("img")

// let currentImg = 1
// let timeOut;

// const updateimg = () => {
//   if (currentImg > images.length) {
//     currentImg = 1
//   } else if(currentImg < 1) {
//     currentImg = images.length
//   }
//   imageContainer.style.transform = `translateX(-${(currentImg - 1) * 300}px)`
//   timeOut = setTimeout(() => {
//     currentImg++
//     updateimg()
//   }, 3000);
// }

// nextElm.addEventListener("click", () => {
//   console.log("work")
//   currentImg++
//   updateimg()
//   clearTimeout(timeOut)
// })

// prevElm.addEventListener("click", () => {
//   console.log("work")
//   currentImg--
//   updateimg()
//   clearTimeout(timeOut)
// })

// updateimg()

const characterContainer = document.querySelector(".characters-container")
const inputSearch = document.querySelector("#search")

const allCharacters = []

async function fetchData() {
  const response = await fetch("https://rickandmortyapi.com/api/character")
  const data = await response.json()
  const results = await data.results
  displayCharacter(results)
  allCharacters.push(...results)
}

function displayCharacter(data) {
  const allCharactersCard = data.map((character) => {
    return `
    <article class="character-card">
    <div class="image-container">
      <img class="thumbnail" src="${character.image}" alt="">
    </div>
    <div class="character-info">
      <h2 id="title">
        ${character.name}
      </h2>
      <div class="status-species">
        <span class="status">${character.status}</span>
        <span class="species">${character.species}</span>
      </div>
      <span class="gender">Gender: ${character.gender}</span>
      <div>
        <span class="lastknown">Last known location: <br><span class="location">${character.origin.name}</span></span>
      </div>
    </div>
  </article>
    `
  }).join('')

  characterContainer.innerHTML = allCharactersCard
}

function filterByname(event) {
  event.preventDefault()
  const name = event.target.value
  if (name.length >= 2) {
    const filteredCharacters = allCharacters.filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase())
    })
    displayCharacter(filteredCharacters)
  } else {
    displayCharacter(allCharacters)
  }
}

inputSearch.addEventListener("input", (event) => {
  filterByname(event)
})

// filterByname()
fetchData()