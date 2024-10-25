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
const games = [
    {
        gameName: "Elden ring shadow of the erdtree",
        releaseDate: "21 June 2024",
        gameType: "souls game",
        imageUrl: "images/ER.jpg"
    },
    {
        gameName: "Ghost of tsushima dlc",
        releaseDate: "16 May 2024",
        imageUrl: "images/GOT.jpg"
    },
    {
        gameName: "God of war ragnarok:Valhalla",
        releaseDate: "23 December 2023",
        gameType: "souls game",
        imageUrl:
            "https://www.google.com/imgres?q=star%20wars%20outlaws&imgurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F351294ab-f778-45de-9f48-e244abc2cc87%2Fdgq2yi9-72b5e7e4-5bee-465e-a61a-aceda3b12e98.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MTI5NGFiLWY3NzgtNDVkZS05ZjQ4LWUyNDRhYmMyY2M4N1wvZGdxMnlpOS03MmI1ZTdlNC01YmVlLTQ2NWUtYTYxYS1hY2VkYTNiMTJlOTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fryI54ShjYRC8FhijaUXAXjv2LzyFH7vDL6pvsOxkEw&imgrefurl=https%3A%2F%2Fwww.deviantart.com%2Felscer%2Fart%2FStar-Wars-Outlaws-1011266865&docid=TlhVRkYhZWs5VM&tbnid=xsNhPnWPS76YzM&vet=12ahUKEwixmMev06mJAxVd0gIHHSYxDGUQM3oECG8QAA..i&w=1280&h=1920&hcb=2&ved=2ahUKEwixmMev06mJAxVd0gIHHSYxDGUQM3oECG8QAA"
    },
    {
        gameName: "Palworld",
        releaseDate: "08 March 2024",
        gameType: "souls game",
        imageUrl:"https://www.google.com/imgres?q=star%20wars%20outlaws&imgurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F351294ab-f778-45de-9f48-e244abc2cc87%2Fdgq2yi9-72b5e7e4-5bee-465e-a61a-aceda3b12e98.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MTI5NGFiLWY3NzgtNDVkZS05ZjQ4LWUyNDRhYmMyY2M4N1wvZGdxMnlpOS03MmI1ZTdlNC01YmVlLTQ2NWUtYTYxYS1hY2VkYTNiMTJlOTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fryI54ShjYRC8FhijaUXAXjv2LzyFH7vDL6pvsOxkEw&imgrefurl=https%3A%2F%2Fwww.deviantart.com%2Felscer%2Fart%2FStar-Wars-Outlaws-1011266865&docid=TlhVRkYhZWs5VM&tbnid=xsNhPnWPS76YzM&vet=12ahUKEwixmMev06mJAxVd0gIHHSYxDGUQM3oECG8QAA..i&w=1280&h=1920&hcb=2&ved=2ahUKEwixmMev06mJAxVd0gIHHSYxDGUQM3oECG8QAA"
    },
    {
        gameName: "Star wars outlaws",
        releaseDate: "30 April 2024",
        gameType: "souls game",
        imageUrl: "https://www.google.com/imgres?q=star%20wars%20outlaws&imgurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F351294ab-f778-45de-9f48-e244abc2cc87%2Fdgq2yi9-72b5e7e4-5bee-465e-a61a-aceda3b12e98.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MTI5NGFiLWY3NzgtNDVkZS05ZjQ4LWUyNDRhYmMyY2M4N1wvZGdxMnlpOS03MmI1ZTdlNC01YmVlLTQ2NWUtYTYxYS1hY2VkYTNiMTJlOTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fryI54ShjYRC8FhijaUXAXjv2LzyFH7vDL6pvsOxkEw&imgrefurl=https%3A%2F%2Fwww.deviantart.com%2Felscer%2Fart%2FStar-Wars-Outlaws-1011266865&docid=TlhVRkYhZWs5VM&tbnid=xsNhPnWPS76YzM&vet=12ahUKEwixmMev06mJAxVd0gIHHSYxDGUQM3oECG8QAA..i&w=1280&h=1920&hcb=2&ved=2ahUKEwixmMev06mJAxVd0gIHHSYxDGUQM3oECG8QAA"
    },
];

const gameCards = games.map(gameCardsTemplate);
document.querySelector("#games-list").innerHTML = gameCards.join("");
document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');
    const updateTypeSelect = document.getElementById('update-type');

    function renderGames(filteredGames) {
        gameGrid.innerHTML = '';

        if (filteredGames.length === 0) {
            gameGrid.innerHTML = '<p>No recipes found for the selected filters.</p>';
            return;
        }

        filteredGames.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');
            gameCard.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.gameName}" loading="lazy" />
                <h3>${game.gameName}</h3>
                <h4>${game.style.charAt(0).toUpperCase() + game.style.slice(1)}</h4>
                <p>${game.releaseDate}</p>
                <ul>
                    ${game.releaseDate.map(releaseDate => `<li>${releaseDate}</li>`).join('')}
                </ul>
            `;
            gameGrid.appendChild(gameCard);
        });
        
    }

    function filterGames() {
        const selectedGameType = updateTypeSelect ? updateTypeSelect.value : 'all';
        const selectedStyle = styleSelect ? styleSelect.value : 'all';

        const filteredGames = games.filter(game => {
            const matchesGameType = selectedGameType === 'all' || game.gameType === selectedGameType;
            const matchesStyle = selectedStyle === 'all' || game.style === selectedStyle;
            return matchesGameType && matchesStyle;
        });

        renderGames(filteredGames);
    }

    if (gameGrid) {
        renderGames(games);
    }

    if (updateTypeSelect && styleSelect) {
        updateTypeSelect.addEventListener('change', filterGames);
        styleSelect.addEventListener('change', filterGames);
    }
});