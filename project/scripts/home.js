const hamButton = document.querySelector(".ham-button");
const menu = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    menu.classList.toggle("active");
});
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();
year.innerHTML = date.getFullYear();

let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;