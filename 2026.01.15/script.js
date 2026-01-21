const apikey = "2c31b329";



/*fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=star`)
.then(data => data.json())
.then (data => console.log(data));*/

//0. töltsünk meg 5009 "star" filmet 

/*const startMovies = [];
async function getAllStarRecords(){
    const res = (await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=star`)).
                then(data => data.json()).
    startMovies.push(...res.Search);
    let maxPage = Math.ceil(res.totalResults/10);
    for(let i = 2; i <= maxPage; i++){
        res = (await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=star&page=${i}`)).
                then(data => data.json()).
        startMovies.push(...res.Search)//Search - asszinkron fnc - 
    }
    console.log(startMovies.length)
}
function init(){
    getAllStarRecords()
}
init()*/

//készítsünk filmet sorozatok lekérésére
//olvassunk be egy text inputban lvő szöveget és indítsunk fetch lekérdezést
//Jelenítsük meg az első 10 találatot, és dinamikusan oldalszám gombokat
//Implementáljunk lapozás (pagination) funkciónalitst
// <<  <   textinput   >  >>
//kattintásra jelenjen meg a rekord részletes adatai
//css

const baseUrl = "http://www.omdbapi.com/";

let refsOk = false
const titleInput = document.getElementById("title-input");
const targetTable = document.getElementById("taget-table");
const paginationDiv = document.getElementById("pagination-div");

let page = 1;
let maxPage = 1;

let searchString = "";
let records = []

function openWindow(){
    window.open(`movie.html/?title=${title}`, "_blank")
} 

function printTable(){
    if(refsOk){
    targetTable.innerHTML = ""
    records.forEach(r => {
        targetTable.innerHTML = `
            <tr>
                <td><img src=${r.Poster}/></td>
                <td>${r.Title}</td>
                <td>${r.Year}</td>
                <td>${r.Type.at(0).toUpperCase()}</td>

            </tr>
        `
    })
    }
};
function setPage(newPage){
    if(newPage <= maxPage && newPage >= 1){
        page = newPage
        getRecords()
    }
}
function setSpecificPage(){
    let inputNumber = document.getElementById("page-input")?.value
    if(inputNumber){
        setPage(parseInt(inputNumber))
    }
}


printPragination(){
    if(refsOk){
        paginationDiv.innerHTML = `
            <button onclick="setPage(${page})><<</button>
            <button onclick="setPage(${page-1})"><</button>
            <div>
                <input id="image-input" type="text">
                <button onclikck="setSpecificPage()">Go</button>
            </div>
            <button onclick="setPage(${page+1}>></button>
            <buttononclick="setPage(${maxPage}>>></button>
        `
    };
};

async function getRecords(){
    let results = (await fetch (`${baseUrl}?apikey=${apikey}&s=${searchString}`)).
    then(data => data.json());
    records.push(...results.Search)
    maxPage = Math.ceil(res.totalResults/10);
    printTable()
    printPragination()
}

function searchTitle(){
    if(refsOk){
        searchString = titleInput.ariaValueMax.toLowerCase().trim();
        getRecords(1)
    }
}

function init(){
    if(titleInput && targetTable && paginationDiv){
        refsOk = true
    }
    else{
        console.error("Invalid reference")
    }
}

