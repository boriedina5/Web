let pszeudorandom = Math.floor(Math.random() * (100 - 1) + 1); //32
//console.log(pszeudorandom)
let numberInput = 0;
let clickCount = 0;
let messageBox = document.getElementById("message");

function guessedNumber(){
    //messageBox.innerHTML = " ";
    numberInput = parseInt(document.getElementById("numberInput").value); //value - mindig string
    if(clickCount < 10){
        if(pszeudorandom < numberInput){
            messageBox.innerHTML += `
                <p>A gondolt szám kisebb</p>
                <p>Próbálozások száma ${clickCount+1}</p>
            `;
        }
        else if (pszeudorandom > numberInput) {
            messageBox.innerHTML += `
                <p>A gondolt szám nagyobb</p>
                <p>Próbálozások száma ${clickCount+1}</p>
            `;
        }
        else if(pszeudorandom == numberInput){
            alert("You figured it out");
        }
    } 
    else{
        alert("You couldn't figure it out :(");
    }
    clickCount += 1;  
}
function restartGame() {
  pszeudorandom = Math.floor(Math.random() * 100) + 1;
  clickCount = 0;
  document.getElementById("numberInput").value = "";
  document.getElementById("message").innerHTML += `
    <p>Új játék kezdődött!</p>
    <p>Próbálkozások száma: 0</p>
  `;
}

//Piros szín??


