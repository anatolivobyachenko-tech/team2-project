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