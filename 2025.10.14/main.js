let arrayIngredients = [];
let imgUrl = document.getElementById("receipePic")
//let receipe = document.getElementsByClassName("Receipes"); - TMLCollection-t ad vissza, nem egyetlen elemet. A HTMLCollection olyan, mint egy lista (tömbszerű objektum)
let receipe = document.getElementById("Receipes")

function SpliteElemetToArray(){
    arrayIngredients = stringIngredients.split(";");
   /*while(stringIngredients.length){
        arrayIngredients.push(stringIngredients.splite(";"));
   } - felesleges*/
    arrayIngredients = stringIngredients.split(";");
}
function createElements(){
    SpliteElemetToArray()
    //recept div
    let receipeDiv = document.createElement("div")
    receipeDiv.classList.add("receipeDiv")
    receipe.appendChild(receipeDiv);
    //cím
    let h2 = document.createElement("h2")
    h2.classList.add("receipeH2");
    h2.textContent = receipeName.value;
    receipeDiv.appendChild(h2)
    //kép
    let img = document.createElement("img")
    img.classList.add("receipeImg")
    img.src = imgUrl.value;
    receipeDiv.appendChild(img)
    //hozzávalók li
    let li = document.createElement("li")
    li.classList.add("receipeIl")
    receipeDiv.appendChild(li)
    createIngredientsOl(li)
}

function createIngredientsOl(li){
    for(let i = 0; i < arrayIngredients.length; i++){
        let ol = document.createElement("ol")
        ol.innerText = `${arrayIngredients[i]}`
        li.appendChild(ol)
    }
}

function addReceipe(){
    createElements();
}