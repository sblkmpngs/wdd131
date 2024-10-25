const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();
year.innerHTML = date.getFullYear();

let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;

products.forEach(product => {
    let splitName = product.name.toLowerCase().split(' ');
    for (var i = 0; i < splitName.length; i++) {
        splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1);
    }
    product.name = splitName.join(' ');
    displayProduct(product);
});

function displayProduct(product) {
    const productName = document.createElement('option');
    productName.textContent = product.name;
    productName.value = product.id;
    
}


let reviewCounter = localStorage.getItem('reviewCounter') || 0;
document.querySelector('form').addEventListener('submit', () => {
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter);
});