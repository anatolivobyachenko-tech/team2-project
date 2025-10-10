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

window.onload = function() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        let name = "checkbox" + i + "=";
        let cookies = document.cookie.split("; ");
        for (let j = 0; j < cookies.length; j++) {
            if (cookies[j].indexOf(name) === 0) {
                let value = cookies[j].substring(name.length);
                checkboxes[i].checked = value === "true";
            }
        }

        checkboxes[i].addEventListener("change", function() {
            saveCheckboxState();
        });
    }
};

function saveCheckboxState() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        let name = "checkbox" + i;
        let value = checkboxes[i].checked;
        document.cookie = name + "=" + value + "; path=/";
    }
}
