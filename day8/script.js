const checkboxBtn = document.getElementById('checkbox-btn')
const mainTag = document.querySelector('main')

checkboxBtn.addEventListener('change', () => {
  mainTag.classList.toggle('darkMode')
})