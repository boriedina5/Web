let targetDiv = document.getElementById("target-div");
let searchDiv = document.getElementById("search-div");
let searchInput = document.getElementById("search");
let allLocation = []
let isRefsOK = false;

function getData(url){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            let resultsObj = JSON.parse(xhr.responseText);
            allLocation.push(...resultsObj.results)
            if(resultsObj.info.next){
                getData(resultsObj.info.next)
            }
            else{
                renderCard()  //ha nincs kövi oldal renderelje le a kártyákat 
            }
        }
    }
    xhr.open("GET", url);
    xhr.send();
}

function renderCard(){
    if(isRefsOK){
        allLocation.forEach((row) => {
        let countOfResidents = row.residents.length; 
            targetDiv.innerHTML += `
                <div id="card">
                    <h3 id="card-h3">${row.name}</h3>
                    <p id="card-p">Típusa: ${row.type}</p>
                    <p id="card-p">Dimenzió: ${row.dimension}</p>
                    <p id="card-p">Lakosok száma: ${countOfResidents}</p>
                </div>
            `
        });
    }
}

function search(){
    let searchedPlanetName = searchInput.value.toLowerCase();

    // ha üres a keresőmező → minden jelenjen meg
    if (searchedPlanetName === "") {
        targetDiv.innerHTML = "";
        renderCard();
        return;
    }
    //kiürítem a target divet
    targetDiv.innerHTML = "";

    //Visszaadja azokat a location-öket az allLocation tömbből,
    //amelyek nevében benne van a keresett szöveg (kisbetű-nagybetűtől függetlenül).
    let filteredLocations = allLocation.filter(row =>
        row.name.toLowerCase().includes(searchedPlanetName)
    );
    //filteredLocations egy tömb -> ha üres, nincs találat
    if (filteredLocations.length === 0) {
        targetDiv.innerHTML = `
            <div id="card">
                <h3 id="card-h3">Sajnos nincs ilyen bolygó</h3>
            </div>
        `;
        return;
    }
    //végig megy a tömbön és kiírja, azt ami kell
    filteredLocations.forEach(row => {
        let countOfResidents = row.residents.length;
        targetDiv.innerHTML += `
            <div id="card">
                <h3 id="card-h3">${row.name}</h3>
                <p id="card-p">Típusa: ${row.type}</p>
                <p id="card-p">Dimenzió: ${row.dimension}</p>
                <p id="card-p">Lakosok száma: ${countOfResidents}</p>
            </div>
        `;
    });
}


function init(){
    if(targetDiv){
        isRefsOK = true
        getData("https://rickandmortyapi.com/api/location")
        //searchInput → az elem (hol figyeljük az eseményt)
        // "input" → milyen eseményre figyeljünk (gépelés)
        // search → mit csináljon az esemény bekövetkezésekor (a függvény) - itt a fv neve kell csak, () nélkül
        searchInput.addEventListener("input", search);
        
    }
    else{
       console.error("Invalid reference")
       document.body.innerHTML += "Something went wrong" 
    }
}
init()