//ha be akarok olvasni adatot kell referencia
const newInput = document.getElementById("newInput")
const targetDiv = document.getElementById("targetDiv")

let stringArray = [];

function changeCase(string){
    //TODO
}
function refreshDiv(){
    //TODO
}

function newString(){//CONTROLLER az MVC modell szerint, mert gombot kezel
    if(newInput && newInput.value.length >= 5 && targetDiv){
        stringArray.push(newInput.value.toLowerCase())//MODEL
        refreshDiv()//VIEW
    }
}
function sortStrings(){
    //TODO
}