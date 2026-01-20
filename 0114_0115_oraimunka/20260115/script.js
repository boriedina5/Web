const apikey = "KEY"//TODO insert key






/* 
//0. Töltsük be az 5009 "star" filmet egy tömbbe.
const starMovies = [];
async function getAllStarRecords(){
    let res = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=star`).
        then(data => data.json());
    starMovies.push(...res.Search);
    let maxPage = Math.ceil(res.totalResults/10);
    for(let i = 2; i <= maxPage;i++){
        res = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=star&page=${i}`).
        then(data => data.json());
        starMovies.push(...res.Search);
    }
    console.log(starMovies.length);
} */

//1. Készítsünk weboldalt filmek és sorozatok keresésére.
//2. Olvassuk be egy text inputban lévő szöveget és indítsunk fetch lekérdezést a címre. (s paraméter)
//3. Jelenítsük meg az első 10 találatot(table-be: Poster, Title, Type, Year) és dinamikusan oldalszám gombokat.
//4. Implementáljunk lapozás(pagination) funkcionalitást.
// << < textinput > >>
//5. CSS

const titleInput = document.getElementById("title-input");
const targetTable = document.getElementById("target-table");
const paginationDiv = document.getElementById("pagination-div");
const baseUrl = "http://www.omdbapi.com/";
let page = 1;
let maxPage = 1;
let refsOK = false;
let searchString = "";
let records = [];
function printTable(){
    if(refsOK){
        targetTable.innerHTML = "";
        records.forEach(r => {
            targetTable.innerHTML += `
                <tr>
                    <td><img src=${r.Poster} /></td>
                    <td>${r.Title}</td>
                    <td>${r.Year}</td>
                    <td>${r.Type.at(0).toUpperCase()+r.Type.slice(1)}</td>
                </tr>
            `
        })
    }
}

function setPage(newPage){//1->1, 2->2, 100->100 
    if(newPage <= maxPage && newPage >= 1){
        page = newPage;
        getRecords();
    }
}
function setSpecificPage(){
    let inputNumber = document.getElementById("page-input").value;
    if(inputNumber){
        setPage(parseInt(inputNumber));
    }
}

function printPagination(){ //TODO
    if(refsOK){
        paginationDiv.innerHTML = `
        <div>
            <button onclick="setPage(1)"> << </button>
            <button onclick="setPage(${page - 1})"> < </button>
        </div>
        <div>
            <input id="page-input" type="number" placeholder="${page}/${maxPage}" />
            <button onclick="setSpecificPage()">Go</button>
        </div>
        <div>
            <button onclick="setPage(${page + 1})"> > </button>
            <button onclick="setPage(${maxPage})"> >> </button>
        </div>
        ` 
    }
}

async function getRecords(){
    let res = await fetch(`${baseUrl}?apikey=${apikey}&s=${searchString}&page=${page}`).
        then(data => data.json());
    records = res.Search;
    maxPage = Math.ceil(res.totalResults/10);
    //console.log(res);
    printTable();
    printPagination();
}

function searchTitle(){//Control
    if(refsOK){
        page = 1;
        searchString = titleInput.value.toLowerCase().trim();
        getRecords();
    }
}

function init(){
    if(titleInput && targetTable && paginationDiv){
        refsOK = true;
    }
    else{
        alert("Invalid references");
        console.error("Invalid references");
    }
    //getAllStarRecords();
}
init();