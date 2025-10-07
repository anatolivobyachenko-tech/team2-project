let checkBox = document.querySelectorAll(".checkBox input[type=checkbox]")
for (let i = 0; i < checkBox.length; i++)
checkBox[i].addEventListener("change", function(){
let tdElements = this.closest ("td.checkBox")

if (this.checked) {
    tdElements.style.textDecoration = "line-through"
}
else {
    tdElements.style.textDecoration = "none"
}
})