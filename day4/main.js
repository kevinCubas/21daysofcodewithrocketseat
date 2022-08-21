const result = document.getElementById('result')
const clearBtn = document.getElementById('clearbtn')
const buttons = document.querySelectorAll(".btn")
const equalBtn = document.getElementById('equal')

const clearResult = () => {
  result.value = "0"
}

const updateResult = (value) => {
  if(result.value == "0") {
    result.value = value
  } else {
    result.value += value
  }
}
const calculate = () => {
  if(result.value != "0") {
    let operationResult = eval(result.value)
    result.value = operationResult;
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    updateResult(btn.innerHTML)
  })
})

equalBtn.addEventListener('click', calculate)

clearBtn.addEventListener('click', clearResult)