const optionsContainer = document.querySelector(".question-box")

const questions = [
  {
    question: "Який переклад слова “Reason”?",
    option: ["Причіна", "Можливість", "Почуття"],
    correct: 0
  },
  {
    question: "Який переклад слова “Sundae”?",
    option: ["Торт", "Пломбір", "Цукерка"],
    correct: 1
  },
  {
    question: "Який переклад слова “Desire”?",
    option: ["Мрія", "Побажання", "Почуття"],
    correct: 1
},
{
    question: "Який переклад слова “Whale”?",
    option: ["Медуза", "Дельфін", "Кит"],
    correct: 2
}
,
{
    question: "Який переклад слова “Brave”?",
    option: ["Сміливий", "Страшний", "Хворий"],
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
