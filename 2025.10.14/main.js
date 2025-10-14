let arrayIngredients = [];
let receipe = document.getElementsByClassName("Receipes");
//append
function createElements(){
    //recept div
    let receipeDiv = document.createElement("div")
    receipeDiv.classList.add("receipeDiv")
    receipe.appendChild(receipeDiv)
    //cím
    let h2 = document.createElement("h2")
    h2.classList.add("receipeH2");
    receipeDiv.appendChild("h2")
    //kép
    let img = document.creatElement("img")
    img.classList.add("receipeImg")
    receipeDiv.appendChild("img")
    //hozzávalók li
    let li = document.createElement("li")
    li.classList.add("receipeIl")
    receipeDiv.appendChild("li")
}

function SpliteElemetToArray(){
    let stringIngredients = document.getElementById("receipeIngredients");
   while(stringIngredients.length){
        arrayIngredients.push(stringIngredients.splite(";"));
   }
}

function createIngredientsOl(){
    for(let i = 0; i < arrayIngredients.length; i++){
        let ol = document.createElement("ol")
        ol.innerText = `${arrayIngredients[i]}`
        li.appendChild(ol)
    }
}

function addReceipe(){
    createElements();
    SpliteElemetToArray()
    createIngredientsOl()
}