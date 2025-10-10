const buttonTheme = document.querySelector(".buttonTheme")
const body = document.body

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark")
}

buttonTheme.addEventListener("click", function() {
  body.classList.toggle("dark")

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }
})

const optionsContainer = document.querySelector(".question-box")
const btn = document.getElementById("button")
btn.style.display = "none"

const questions = [
  {
    question: "Де знаходиться протока Босфор?",
    option: ["У Данії", "У Єгипті", "У Турції"],
    correct: 2
  },
  {
    question: "Скільки кордонів має Іспанія?",
    option: ["5", "2", "3"],
    correct: 0
  },
  {
    question: "Яка столиця Ліхтенштейну?",
    option: ["Вадуц", "Кур", "Грац"],
    correct: 0
},
{
    question: "Скільки часових поясів у Китаї?",
    option: ["7", "4", "1"],
    correct: 2
}
,
{
    question: "Яка країна має найбільшу кількість островів?",
    option: ["Швеція", "Індонезія", "Японія"],
    correct: 0
}
]

let currentIndex = 0
let score = 0

const quizContainer = document.querySelector(".question")

function showQuestion() {
  let q = questions[currentIndex]

  quizContainer.querySelector("h2").textContent = q.question

  optionsContainer.innerHTML = ""

for (let i = 0; i < q.option.length; i++) {
    let button = document.createElement("div")
    button.classList.add("que")
    button.textContent = q.option[i]

    button.addEventListener("click", function () {
    checkAnswer(i)
    })

    optionsContainer.appendChild(button)
  }
}

function checkAnswer(i) {
  if (i === questions[currentIndex].correct) {
    score++;
  } else {
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion()
  } else {
    quizContainer.querySelector("h2").textContent = "Тест завершено!"
    const result = document.querySelector("#result h3")
    result.textContent = `Твій результат: ${score} з ${questions.length} правильних відповідей`
    
    optionsContainer.innerHTML = ""
    btn.style.display = "block"
  }
}
showQuestion()