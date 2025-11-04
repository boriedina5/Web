console.log("Hello World");
const usernameInput = document.getElementById("usernameInput");
const targetDiv = document.getElementById("targetDiv");

function printUsername(){
    if(usernameInput && targetDiv){
        //console.log(usernameInput.value)//console-ba kiírja
        //targetDiv.innerHTML += `<p>${usernameInput.value}</p>`//rövidebb
        const newPar = document.createElement("p")//Hosszabb
        newPar.innerText = usernameInput.value;
        targetDiv.appendChild(newPar)
    }
}


