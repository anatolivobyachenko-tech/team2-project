const optionsContainer = document.querySelector(".question-box")

const questions = [
 {
    question: "Скільки буде 8 × 8?",
    option: ["98", "64", "48"],
    correct: 1
  },
  {
    question: "Скільки буде √25?",
    option: ["25", "15", "5"],
    correct: 2
  },
  {
    question: "Скільки буде 40 ÷ 3?",
    option: ["13", "20", "17"],
    correct: 0
},
{
    question: "Скільки буде 63 + 77?",
    option: ["162", "137", "140"],
    correct: 2
}
,
{
    question: "Скільки буде 386 - 133?",
    option: ["253", "129", "136"],
    correct: 0
}
];

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
    checkAnswer(i);
    });

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
    optionsContainer.innerHTML = `Твій результат: ${score} з ${questions.length} правельні віповіді`
}
}
showQuestion()