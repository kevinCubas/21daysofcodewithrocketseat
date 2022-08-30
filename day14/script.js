// https://opentdb.com/api.php?amount=1
const questionTitle = document.getElementById('question')
const quizzAlternatives = document.getElementById('quizz-alternatives')
const result = document.getElementById('result')

const parseStringToHTML = (string) => {
  const parser = new DOMParser().parseFromString(string, "text/html");
  return parser.documentElement.textContent;
}

async function fetchData() {
  const url = 'https://opentdb.com/api.php?amount=1&type=multiple'
  const response = await fetch(`${url}`);
  const data = await response.json();
  console.log(data.results)
  showQuestion(data.results[0])
}

function showQuestion(data) {
  questionTitle.innerText = parseStringToHTML(data.question);
  const correctAnswer = data.correct_answer
  const incorrectAnswers = data.incorrect_answers
  const alternatives = [correctAnswer, ...incorrectAnswers]
  alternatives.sort()

  quizzAlternatives.innerHTML = `
    ${alternatives.map((alternative) => `
    <li class="alternative">${alternative}</li>
    `
  ).join('')}
  `

  const allAlternatives = document.querySelectorAll('.alternative')

  allAlternatives.forEach((alternative) => {
    alternative.addEventListener('click', () => {
      this.checkAnswer(alternative, correctAnswer)
      setTimeout(() => {
        fetchData()
        result.innerText = ''
      }, 1000)
    })
  })
}

function checkAnswer(alternative, answer) {
  if (alternative.innerText === answer) {
    alternative.classList.add("correct")
    result.innerText = "CORRECT"
  } else {
    alternative.classList.add("incorrect")
    result.innerText = 'INCORRECT'
  }
}

fetchData()