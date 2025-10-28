const dObjeck = document.querySelector(".block")
document.addEventListener("mousemove", function(e){
    let dX = e.pageX - window.innerWidth / 3
    let dY = e.pageY - window.innerHeight / 3
    let angleX = 30 * dX / window.innerWidth / 3
    let angleY = 30 * dY / window.innerHeight / 3
    dObjeck.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`
})

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