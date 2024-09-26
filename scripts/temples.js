const hamButton = document.querySelector(".ham-button");
const menu = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    menu.classList.toggle("active");
});
document.querySelector('#year').textContent = new Date().getFullYear();
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;