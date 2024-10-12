
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


const date = new Date();
year.innerHTML = date.getFullYear();


let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;


const hamButton = document.querySelector(".ham-button");
const menu = document.querySelector("nav");

hamButton.addEventListener("click", () =>
{
    hamButton.classList.toggle("active");
    menu.classList.toggle("active");
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Montevideo Uruguay",
        location: "Carrasco, Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-temple-lds-83476-wallpaper.jpg",
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1853, February, 14",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Columbia, South Carolina",
        location: "Hopkins, South Carolina, United States",
        dedicated: "1998, December, 5",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/400x250/columbia-temple-768161-wallpaper.jpg"
    },
  
];

function templeCardsTemplate(temple) {
    return `<div class="cards">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>   
            <img src="${temple.imageUrl}" alt="picture of the ${temple.templeName} temple in ${temple.location}" loading="lazy" width="400" height="200">     
    </div>`
};

const templeCards = temples.map(templeCardsTemplate);
document.querySelector("#temples-list").innerHTML = templeCards.join("");


const navHome = document.querySelector("#home");
const navOld = document.querySelector("#old");
const navNew = document.querySelector("#new");
const navLarge = document.querySelector("#large");
const navSmall = document.querySelector("#small");
const pageTitle = document.querySelector("#page-title");

function filterTemples(templesList, filter = "home") {
    let filteredTemples = templesList;

    if (filter === "old") {
        filteredTemples = templesList.filter((temple) =>
            parseInt(temple.dedicated.slice(0, 4)) < 1900
        );
    } else if (filter === "new") {
        filteredTemples = templesList.filter((temple) =>
            parseInt(temple.dedicated.slice(0, 4)) > 2000
        );
    } else if (filter === "large") {
        filteredTemples = templesList.filter((temple) => temple.area > 90000);
    } else if (filter === "small") {
        filteredTemples = templesList.filter((temple) => temple.area < 10000);
    }

    
    pageTitle.innerText = filter.toUpperCase();

    const filteredTempleCards = filteredTemples.map(templeCardsTemplate);
    document.querySelector("#temples-list").innerHTML = filteredTempleCards.join("");
}

navHome.addEventListener("click", function () {
    filterTemples(temples);
});
navOld.addEventListener("click", function () {
    filterTemples(temples, "old");
});
navNew.addEventListener("click", function () {
    filterTemples(temples, "new");
});
navLarge.addEventListener("click", function () {
    filterTemples(temples, "large");
});
navSmall.addEventListener("click", function () {
    filterTemples(temples, "small");
});