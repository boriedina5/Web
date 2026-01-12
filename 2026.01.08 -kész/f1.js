//RESTful -> többek között: 
//pl. egy character endpoint : 
//  -   GET(visszatér az összes karakterrel)
//  -   POST(a bodyban lévő karaktert hozzáadjuk az adatbázishoz)
//  -   DELETE(átadok a bodyban egy character id-t, megkeresi és törli az obj.)

//FELADAT 1:
//a, Töltsük le a rickandmortyapi.com/api/episode EP-ról az összes epizódot
//XHR segítségével és tároljuk egy tömbben.
//b, Rajzoljuk az epizódokat egy html table tag-ben(id, name, air_date, episode).
//c, Dinamikusan készítsünk checkbox-okat (default: ON). Írjunk logikát
//arra, ha valamike ki/be pipálom akkor csak a bepipáltakat jelenítse meg
//d, CSS

const checkboxContainer = document.getElementById("checkbox-container");
const targetTable = document.getElementById("target-table");
let allEpisodes = [];
let displayedEpisodes = [];
let isRefsOK = false;
function getSeasonString(episodeCode){
    let e = episodeCode.slice(
                episodeCode.indexOf("S")+1,
                episodeCode.indexOf("E")
    );
    return e.at(0) === "0" ? e.slice(1) : e;
}

function checkboxCallback(){
    // console.log(checkboxContainer.children.map(
    //     (child) => {return child.checked}
    // ));
    //for(let i = 1; i <= 10; i++){console.log(i)};//1-től 10ig log
    //[1,2,3,4,5,6,7,8,9,10].forEach(n => console.log(n))//biztonságosabb
    let displayedSeasons = [];
    let checkboxes = document.getElementsByClassName("season-checkbox");
    for(const c of checkboxes){
        if(c.checked){
            displayedSeasons.push(c.value);
        }
    }
    console.log(displayedSeasons);
    
    displayedEpisodes = allEpisodes.filter(e => {
        return displayedSeasons.includes(getSeasonString(e.episode))
    });
    renderTable();
}

function renderCheckboxContainer(){
    if(isRefsOK){
        checkboxContainer.innerHTML = "";
        let seasons = [];
        allEpisodes.forEach(e => {
            //S01E01 //1. évad 1. rész
            let season = getSeasonString(e.episode);
            if(!seasons.includes(season)){
                seasons.push(season)
            }
        })
        seasons.forEach((s) => {
            checkboxContainer.innerHTML += `
            <div>
                <label for="season-checkbox-${s}">
                    Season ${s}: 
                </label>
                <input 
                    class="season-checkbox"
                    id="season-checkbox-${s}"
                    type="checkbox"
                    value="${s}"
                    onclick="checkboxCallback()"
                    checked 
                />
            </div>
            `
        })
        
    }
}

function renderTable(){
    if(isRefsOK){
        targetTable.innerHTML = `
            <thead>
                <th>ID</th>
                <th>Episode code</th>
                <th>Name</th>
                <th>Original air date</th>
            </thead>
        `
        displayedEpisodes.forEach((e) => {
            targetTable.innerHTML += `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.episode}</td>
                    <td>${e.name}</td>
                    <td>${e.air_date}</td>
                </tr>
            `
        })
    }
    //TODO
}

function getEpisodeData(url){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            const resObj = JSON.parse(xhr.responseText);
            allEpisodes.push(...resObj.results);
            if(resObj.info.next){
                getEpisodeData(resObj.info.next);
            }
            else{
                //TODO remove
                allEpisodes.push({
                    id: 100,
                    episode: "S10E01",
                    name: "Test episode",
                    air_date: "x"

                })
                displayedEpisodes = [...allEpisodes];
                renderCheckboxContainer();
                renderTable();
            }
        }
    }
    
    xhr.open("GET", url);
    xhr.send();
}

function init(){
    if(checkboxContainer && targetTable){
        isRefsOK = true;
        getEpisodeData("https://rickandmortyapi.com/api/episode");
    }
    else{
        console.error("Invalid references");
        document.body.innerHTML += "Something went wrong. Please refresh."
    }
}
init();