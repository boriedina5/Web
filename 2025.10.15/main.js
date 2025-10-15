//ha be akarok olvasni adatot kell referencia (referencia = dekralálod és deifiniálod a DOM elemeket)
const newInput = document.getElementById("newInput")
const targetDiv = document.getElementById("targetDiv")

let stringArray = [];

function changeCase(string){//Miért is kell??
    stringArray = stringArray.map((curr) =>{
        if(string === curr){
            if(curr.toLowerCase() === curr){//curr már lowercase
                return curr.toUpperCase
            }
            else{
                return curr.toLowerCase
            }

        }
        else{
            return curr; //nem módosítok
        }
    })
    refreshDiv();
}
function refreshDiv(){
    if(targetDiv){
        targetDiv.innerHTML = "";
        stringArray.forEach((s) => {
            targetDiv.innerHTML += `
            <p onlclik="changeCase(${s})">${s}</p>
            `
        })
    }
    else{
        console.error("Invalid reference")
    }
}

function isValidString(string){
    return !stringArray.some((curr) => {return curr.toLowerCase() === string.toLowerCase()})//??
    /*let b = !stringArray.some((curr) => {return curr.toLowerCase() === string.toLowerCase()}) 

    if(!b){
        alert("Már létezik")
    }
    return b   -- Jobb felhasználó élmény*/ 
}

function newString(){//CONTROLLER az MVC modell szerint, mert gombot kezel
    if(newInput && newInput.value.length >= 5 && isValidString(newInput.value)){
        stringArray.push(newInput.value.toLowerCase())//MODEL
        console.log(stringArray)
        refreshDiv()//VIEW
    }
    else{
        console.error("Invalid parameters")
    }
}
function sortStrings(){
    stringArray.sort()//TODO ASCII karakterek
    refreshDiv()
}