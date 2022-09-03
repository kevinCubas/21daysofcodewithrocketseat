const generatePasswordBtn = document.querySelector("#generate-btn")
const passwordInput = document.querySelector("#passwordInput")
const copyBtn = document.querySelector("#copy")

generatePasswordBtn.addEventListener("click", passwordGenerator)
copyBtn.addEventListener("click", copyToClipboard)

let timeOut;

function passwordGenerator() {
  const chars = "ABOPQRST1234CDEFGH5UVWXYZabcdeIJKLMN&@_fghijklmnopqr6789-stuvwxyz0+*"
  let password = ""
  for (let i = 0; i < 20; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
    console.log(password)
  }
  passwordInput.value = password
}

function copyToClipboard() {
    clearTimeout(timeOut)
    let text = passwordInput.value
    navigator.clipboard.writeText(text)
    copyBtn.innerHTML = "Copied"
    timeOut = setTimeout(() => {
      copyBtn.innerHTML = "Copy"
    }, 2000);
}