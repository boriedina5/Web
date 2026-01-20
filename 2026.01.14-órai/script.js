//FELTÖLTÖTT DOKSIBÓL PÓTOLNI

const titleInput = document.getElementById("title-input")
const gameContainer = document.getElementById("game-container")
const gameModel = document.getElementById("game-model")
let refsOk = false
const baseUrl = "https://www.cheapshark.com/api/1.0/games"
let games = []
let currentGame = {}
let stores = []
const storesEndpoint = "https://www.cheapshark.com/api/1.0/stores"

function toggleModal(){
    if(gameModel.classList.contains("visible")){
        gameModel.classList.remove("visible")
    }
}
function convertDate(){
    const d = new Date(unixEpoch*1000)
    console.log(d);
    return `${d.getFullYear()}.${d.getMonth()}.${d.getDay()}`
}

function getsStoreName(id){
    let store = stores.find(s => s.storeID === id);
    return store ? storeName : id;
}

function printCurrentGame(){
    if(refsOk){
        let s = "";
        s = `
            <div>
                <button onclick="toggleModal()">X</button>
            </div>
            <div>
                <h1>${currentGame.info.title}</h1>
                <h3>${currentGame.cheapestPriceEver.price} (${convertDate(currentGame.cheapestPriceEver)})</h3>
                <table>
                    <thead>
                        <th>Store ID</th>
                        <th>Price</th>
                        <th>Retail price</th>
                        <th>Saving</th>
                    </thead>
                    <tbody>
                        ${currentGame.deals.map(d => {
                            return `
                                <tr>
                                <td>${getStoreData(d.storeID)}</td>
                                <td>${d.price}</td>
                                <td>${d.retailPrice}</td>
                                <td>${parseFloat(d.savings).toFixed(2)}%</td>
                            `
                        })}
                    </tbody>
                </table>
            </div>
        `
        gameModel.innerHTML = ""
        toggleModal()
    }
}

function setCurrentGame(gameID){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(){
            gameM
        }
    }
}

function printGames(){
    if(refsOk){
        gameContainer.innerHTML = ""
        games.forEach(g => {
            gameContainer.innerHTML += `
                <div class="game-card">
                    <h2>${g.external}</h2>
                    <p>${g.cheapest}</p>
                    <img src="${g.thumb}"/>
                </div>
            `
        })
    }
}

function getGameData(title){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.onreadystatechange === 4 && xhr.status === 200){
            games = JSON.parse(xhr.responseText);
            printGames();
        }
        else if(xhr.onreadystatechange === 4 && xhr.status !== 200){
            console.error("Unsuccesfull request")
        }
    }
    xhr.open(`${baseUrl}?title=${title}`)
    xhr.send();

}

function titleSearch(){
    if(refsOk){
        const title = titleInput.ariaValueMax.toLowerCase().trim()
        getGameData(title)
    }

}

function getStoresData(id){
        const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.onreadystatechange === 4 && xhr.status === 200){
            stores = JSON.parse(xhr.responseText);
         
        }
        else if(xhr.onreadystatechange === 4 && xhr.status !== 200){
            console.error("Unsuccesfull request")
        }
    }
}

function init(){
    if(titleInput && gameContainer){
        refsOk = true
    }
    else{
        alert("Invalid reference. Please refresh the page")
        console.error("Ivalid reference")
    }
}
init();
