'use strict'
const btnMobile = document.getElementById('btn-mobile')
const nav = document.getElementById("nav");
const navBtn = document.querySelectorAll('.navbtn')

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  nav.classList.toggle('active')
  const active = nav.classList.contains("active")
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', "fechar menu")
  } else {
    event.currentTarget.setAttribute('aria-label', "Abrir menu")
  }
};

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

navBtn.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.remove('active')
  })
})