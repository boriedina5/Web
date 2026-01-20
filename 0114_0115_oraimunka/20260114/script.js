//1. Készítsünk weboldalt játékok keresésére.
//2. Készítsünk egy text input és gombból álló div-et. Gombnyomásra olvassuk be a szöveget.
//3. A keresett szövegre indítsunk XHR lekérdezést és mentsük el a választ. (main scrope beli változóba)
//4. Jelenítsünk meg az objektum tömböt egy div kártyákon(external,thumb, cheapest).
//5. Adjunk CSS-t az oldalhoz.

//+6. Modal 


const titleInput = document.getElementById("title-input");
const gameContainer = document.getElementById("game-container");
const gameModal = document.getElementById("game-modal");
let refsOk = false;
const gamesEndpoint = "https://www.cheapshark.com/api/1.0/games";
const storesEndpoint = "https://www.cheapshark.com/api/1.0/stores";
let games = [];
let stores = [];
let currentGame = {};

function toggleModal(){
    if(gameModal.classList.contains("visible")){
        gameModal.classList.remove("visible");
        gameModal.classList.add("invisible");
    }
    else{
        gameModal.classList.remove("invisible");
        gameModal.classList.add("visible");
    }
}

function convertDate(unixEpoch){
    const d = new Date(unixEpoch*1000);
    console.log(d)
    return `${d.getFullYear()}.${d.getMonth()}.${d.getDay()}`;
}

function getStoreName(id){
    let store = stores.find(s => s.storeID === id);
    return store ? store.storeName : id;
}

function printCurrentGame(){
    console.log(currentGame);
    if(refsOk){
        let s = "";
        s = `
                <div>
                    <button onclick="toggleModal()">X</button>
                </div>
                <div>
                    <h1>${currentGame.info.title}</h1>
                    <h3>Cheapest: ${currentGame.cheapestPriceEver.price} (${convertDate(currentGame.cheapestPriceEver.date)})</h3>
                    <table class="current-game-table">
                        <thead>
                            <th>Store ID</th>
                            <th>Price</th>
                            <th>Retail price</th>
                            <th>Saving</th>
                        </thead>
                        <tbody>
                            ${currentGame.deals.map(d => {
                                return `<tr>
                                    <td>${getStoreName(d.storeID)}</td>
                                    <td>${d.price}</td>
                                    <td>${d.retailPrice}</td>
                                    <td>${parseFloat(d.savings).toFixed(2)}%</td>
                                </tr>`
                            })}
                        </tbody>
                    </table>
                </div>
            `
        gameModal.innerHTML = s;
        toggleModal();
    }
}

function setCurrentGame(gameID){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            currentGame = JSON.parse(xhr.responseText);
            printCurrentGame();
        }
        else if(xhr.readyState === 4 && xhr.status !== 200){
            console.error("Unsuccessfull request")
        }
    }
    xhr.open("GET", `${gamesEndpoint}?id=${gameID}`);
    xhr.send();
}

function printGames() {
    if (refsOk) {
        gameContainer.innerHTML = "";
        games.forEach(g => {
            gameContainer.innerHTML += `
                <div class="game-card" onclick="setCurrentGame('${g.gameID}')">
                    <h2>${g.external}</h2>
                    <p>$ ${g.cheapest}</p>
                    <img src="${g.thumb}" />
                </div>
            `
        })
    }
}

function getGameData(title) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            games = JSON.parse(xhr.responseText);
            printGames();
        }
        else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.error("Unsuccessfull request");
        }

    }
    xhr.open("GET", `${gamesEndpoint}?title=${title}`);
    xhr.send();
}

function titleSearch() {
    if (refsOk) {
        const title = titleInput.value.toLowerCase().trim();
        getGameData(title);
    }
}

function getStoresData(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            stores = JSON.parse(xhr.responseText);
        }
        else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.error("Unsuccessfull request");
        }

    }
    xhr.open("GET", storesEndpoint);
    xhr.send();
}

function init() {
    if (titleInput && gameContainer && gameModal) {
        refsOk = true;
        getStoresData();
    }
    else {
        alert("Invalid references. Please refresh the page");
        console.error("Invalid references");
    }
}
init();