
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();
year.innerHTML = date.getFullYear();

let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;

const data = {
    area: "377,973 km²",
    population: "125.1 million (2022)",
    capital: "Tokyo",
    languages: "Japanese",
    currency: "Japanese Yen",
    timeZone: "UTC-10",
    callingCode: "+808",
    internetTld: ".us"
}

let dataSection = document.querySelector("#data-table");
let weatherSection = document.querySelector("#weather-table");

for (const key in data) {
    dataSection.innerHTML += `<tr><th>${key}: </th><td>${data[key]}</td></tr>`;
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
};

const wcf = document.querySelector('#wcf');

function calculatewindChill(temp, speed) {
    return (
        13.12 + 
        0.6215 * temp - 
        11.37 * Math.pow(speed, 0.16) + 
        0.3965 * tempC * Math.pow(speed, 0.16)
    ); 
}

let tempC = 10;
let speed = 4;
if (tempC <= 10 && speed > 4.8) {
    wcf.textContent = calculatewindChill(tempC, speed).toFixed(1);
} else {
    wcf.textContent = "N/A";
}
