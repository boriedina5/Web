//console.log("Hello") //weboldaon is megjelenik és teminálba is lehet futatni
let allCharacters = []
const targetDiv = document.getElementById("rickAndMorty");
const nameInput = document.getElementById("name-input")
function search(){
    if(nameInput){
        let displayedCharacters = allCharacters.filter(c => {
            return c.name.toLowerCase().includes(nameInput.value.toLowerCase())
        })
        printCharacters(displayedCharacters)
    }
}

async function getData(url){
    let resObj = await fetch(url)
    .then ((data) => data.json())
    allCharacters.push(...resObj.results)
    while(resObj.info.next){
        resObj = await fetch(resObj.info.next)
            .then(data => data.json());
        allCharacters.push(...resObj.results)
    }   
}
function printCharacters(_characters){
    targetDiv.innerHTML = "";
    allCharacters.forEach(c => {
        targetDiv.innerHTML += 
        
        `
        <div>
        <h2>${c.name}</h2>
        <h4>${c.species}</h4>
        <p>${c.status}</p>
        <img src=${c.image}>
        </div>
        
        `
    })
}
async function init(){
    await getData("https://rickandmortyapi.com/api/character") //await-nek tudni kell, hogy az fv async 
    //console.log(allCharacters)
    if(targetDiv){
        printCharacters(allCharacters);
    }
}   
init()