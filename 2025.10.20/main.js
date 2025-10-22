const newGameInputs = {
    gameName: document.getElementById("new-game-name"),
    franchiseName: document.getElementById("new-game-franchise"),
    releaseYear: document.getElementById("new-game-releaseyear")
}
const franchiseContainer = document.getElementById("franchise-container");

let franchises = [];
let games = [];
let isValidRefs = false;

function isValidGame(newGame){
    let currYear = new Date().getFullYear();
    return (!(games.some((g) => {
                return  g.gameName === newGame.gameName && 
                        g.releaseYear === newGame.releaseYear
                    }))) &&
            newGame.gameName.length >= 3 &&
            newGame.franchiseName.length >= 3 &&
            parseInt(newGame.releaseYear) >= 1970 &&
            parseInt(newGame.releaseYear) <= currYear
}

function renderGames(){
    franchiseContainer.innerHTML = "";
    franchises.forEach((f) => {
        const fDiv = document.createElement("div");
        fDiv.classList.add("franchise-div");
        fDiv.innerHTML += `<h1>${f} (${games.filter((g) => g.franchiseName === f).length})</h1>`
        const gameCardParent = document.createElement("div");
        gameCardParent.classList.add("game-card-parent");
        games.map((g) => {
            if(g.franchiseName === f){
                return `
                    <div class="game-card">
                        <a target="_blank" href="https://www.google.com/search?q=${g.gameName}+${g.releaseYear}">
                            <h1>${g.gameName}</h1>
                            <p>${g.releaseYear}</p>
                        </a>
                    </div>
                    
                `;
            }
            else{return ""}
        }).forEach(s => gameCardParent.innerHTML += s)
        fDiv.appendChild(gameCardParent)
        franchiseContainer.appendChild(fDiv);
    });
}

function saveGame(){
    if(isValidRefs){
        const newGame = {
            gameName: newGameInputs.gameName.value,
            franchiseName: newGameInputs.franchiseName.value,
            releaseYear: newGameInputs.releaseYear.value
        }
        if(isValidGame(newGame)){
            games.push(newGame);
            if(!franchises.includes(newGame.franchiseName)){
                franchises.push(newGame.franchiseName);
            }
            renderGames();
        }
        else{
            console.error("Játék adatai rosszak, vagy már létező játék")
            alert("Játék adatai rosszak, vagy már létező játék");
        }
    }
}

function init(){
    if(newGameInputs.gameName && newGameInputs.franchiseName && newGameInputs.releaseYear && franchiseContainer){
        console.log("all references found")
        isValidRefs = true;
    }
    else{
        console.error("incorrect references")
    }
}
init();
