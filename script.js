// function toggleMenu() {
//     const menu = document.getElementById('sideMenu');
//     menu.classList.toggle('open');
// }


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


const days = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четверг",
  "П'ятниця",
  "Субота"
]

const toDay = new Date()
const dayIndex = toDay.getDay()
const dayName = days[dayIndex]
document.getElementById("daySwitch").textContent = `Сьогодні ${dayName}`