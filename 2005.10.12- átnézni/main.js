//9 gomb 1-től 9-ig. Gombnyomásra adja hozzá a tömbhöz a megfelelő számot
//és jelenítse meg a tömböt. (TIPP: Egy függvénnyel oldjátok meg)
//Ha a felhasználó megpróbál úgy számot adni a tömbhöz, hogy meghaladná a
//20-as hosszt, egy alertben értesítse, hogy nem lehetséges és ne hajtsa
//végre az akciót.
let array = [];
let deleted = [];


function addNumbers() {
    let actualNumber = document.getElementById(addNumbers).value
    if(Count() < 20){
        array.push(actualNumber)
    }
    else{
        alert("You can't add new element")
    }
   
    
}

//Legyen 2 gomb: Egyik a tömb elejéről töröl elemet, a másik a végéről.
//Legyen egy tömb ürítése gomb.
function deleteFromFront() {
    deleted.push(array.indexOf(0))
    array.splice(array.indexOf(0), 1);

}

function deleteFromEnd() {
    deleted.push(indexOf(array.length - 1))
    array.pop();
}

//Legyen egy tömb ürítése gomb.
function empty() {
    array.splice(array.indexOf(0), array.length);
}
//Jelenjenek meg aktuális adatok a tömbről: 
// Elemek száma,
// törölt elemek száma, 
// legutolsó törölt elem, 
// átlag, 
// módusz, 
// medián.

function Count() {
    let countOfArray = 0;
    for (let numb of array) {
        countOfArray += numb;
    }
    return countOfArray
}

function Mode() {
    let counts = {};

    for (let num of numbers) {
        if (counts[num] === undefined) {
            // Ha még nincs ilyen kulcs, kezdd 1-gyel
            counts[num] = 1;
        } else {
            // Ha már van, növeld eggyel
            counts[num] = counts[num] + 1;
        }
    }

    let mode = null;
    let maxCount = 0;

    for (let num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num;
        }
    }
    return mode
}
function Median(){
    let sorted = array.sort((a, b) => a - b);
    if(sorted.length % 2 == 0){
        let even = (sorted.length/2 - 1) + sorted.length/2
        return even/2
    }
    else{
        return sorted[Math.floor(len / 2)];
    }
}

function actualDatas() {
    let results = document.getElementById("results")
    results.innerHTML += `
        <p>Number of elements: ${array.length}<p/>
        <p>Number of deleted elements : ${deleted.length}<p/>
        <p>Last deleted element: ${deleted.indexOf(deleted.length - 1)}<p/>
        <p>Avarage: ${Count() / array.length} <p/>
        <p>Módusz: ${Mode()}<p/>
        <p>Módusz: ${Median()}<p/>
    `
}






