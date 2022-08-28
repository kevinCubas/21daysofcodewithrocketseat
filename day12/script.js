const nextElm = document.getElementById("next");
const prevElm = document.getElementById("prev");
const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll("img")

let currentImg = 1
let timeOut;

const updateimg = () => {
  if (currentImg > images.length) {
    currentImg = 1
  } else if(currentImg < 1) {
    currentImg = images.length
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
  timeOut = setTimeout(() => {
    currentImg++
    updateimg()
  }, 3000);
}

nextElm.addEventListener("click", () => {
  console.log("work")
  currentImg++
  updateimg()
  clearTimeout(timeOut)
})

prevElm.addEventListener("click", () => {
  console.log("work")
  currentImg--
  updateimg()
  clearTimeout(timeOut)
})

updateimg()