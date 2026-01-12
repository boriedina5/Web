//Töltsük le a rickandmortyapi... Ep-ról az össz. epizódott
//xhr segítségével tároljuk tömbben
//Rajzoljuk ki az epizódokat egy html table tagbe
//dinamikusan készítsünk checkboxokat, default on
//css

//átnézni, mert hiányos

const checkBoxContainer = document.getElementById("checkbox-container");
const targetTable =  document.getElementById("target-table");
let isRefsOK = false;
let displayEpisodes = []
let season = [];//jav
let allEpisodes = [];
function getSeasonString(episodeCode){
    let e = episodeCode.slice(
        episodeCode.indexOf("S")+1,
        episodeCode.indexOf("E")
    );
    return e.at(0) ? e:e.slice(1);
}

function checkboxCallback(){
    //console.log(checkBoxContainer.children.map(child) => {return child.checked}));
    /*for(let i = 1; i <= 10; i++){
        console.log(i);//1-10ig log
    }*/
    let displayedSeasons = [];
    let checkboxs = document.getElementsByClassName("season-checkbox")
    for(const c of checkBoxContainer.children){
        displayedSeasons.push(c.value);
    }
    displayEpisodes = allEpisodes.filter(e => {
        return displayedSeasons.includes(e.episode.slice(2,3))
    })
    renderTable();
}

function renderCheckBoxContainer(){
    if(isRefsOK){
        checkBoxContainer.innerHTML = ""
        allEpisodes.forEach((e) => {
            //S01E01 //1. évad 1 rész
            let episode=e.episode.slice( 
                e.episode.indexOf("S"), 
                e.episode.indexOf("E")+1);
            let season = episode.at(0)/////
            //let seasons = e.episode.slice(2,3)
            if(!seasons.includes(season)){
                seasons.push(season)
            }
        })
        seasons.forEach((s)=>{checkBoxContainer.innerHTML +=`
            <div>
            <label for= "season-checkbox-${s}">Season ${s}</label>
            <input 
            class = "season-checkbox"
            id="season-checkbox-${s}"
            type="checkbox" 
            value="${s}" 
            onclick="checkboxCallback()" checked/>
            </div>
            `})
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
        displayEpisodes.forEach((e) => {
            targetTable.innerHTML += `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.episode}</td>
                    <td>${e.name}</td>
                    <td>${e.air_date}</td>
                </tr>
            `
        });

    }
}
function getEpisodeData(url){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            const resObj = JSON.parse(xhr.responseText);//Mire jó?
            allEpisodes.push(...resObj.results) //.results - egy kulcs, aminek az értke az epizódik | ...-sprade operátor
            if(resObj.info.next){
                getEpisodeData(resObj.info.next);
            }
            else{
                allEpisodes.push(
                    {id: 100, 
                     episode: 

                    }
                )
                displayEpisodes = [...allEpisodes]; //displayEpisodes = allEpisodes másolatával; shallow copy
                renderCheckBoxContainer();
                renderTable();
            }
        }
    }
    xhr.open("GET", url)
    xhr.send();
}

function init(){
    if(checkBoxContainer && targetTable){
        isRefsOK = true
        getEpisodeData("https://rickandmortyapi.com/api/episode");
    }
    else{
        console.error("Invalid reference")
        document.body.innerHTML += "Something went wrong."
    }
    
}
init();