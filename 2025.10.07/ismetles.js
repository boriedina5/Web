//var - global scope: minden fájl eléri és a weboldalon is eléri a felhasználó
// var és let közötti különbség:
    //var: dekrarálást írom felül
    //let: definiálást írom felül
// Node.js - node fájlnév.js

//String beépített függvények
let s = "abcabcabc"
console.log(s.at(1));//Adott index alapján visszaadja a string részletet
console.log(s.concat(""));//Megjeleniti a stringem végén a megadott részletet, de nem adja hozzá
console.log(s.toUpperCase());//Minden nagy betű, ha van már benne nagy akkor is
console.log(s.toLowerCase());//Minden kis betű, ha van már benne kicsi akkor is
console.log(s.endsWith());//Akkor tér vissza igazzal, ha tartalmazza a megadott stringet a végén
console.log(s.charCodeAt());//Adott index alapján kiírja mi a karakter kódja az string részletnek
console.log(s.includes());//Megadok neki egy stringek és true vagy falsessal tér vissza, az alapján benne van-e az adott string vagy sem
console.log(s.indexOf(""));//Adott karakter indexét adja vissza, ha nincs benne a megadott char -1-gyel tér vissza
console.log(s.length);//!Nem függvény, hanem string osztály! Visszaadja a string hosszát
console.log(s.split(""));//Adott string vagy karakter alapján vágja fel -> csinál belőle egy tömböt | abcabcabc -> ['ab', 'ab', '']
console.log(s.repeat(szám));//Adott szám alapján ismétli a kiiratásnál
console.log(s.replace("a", "A"));//Kicseréli az először megadott karaktert a második megadott karakterre
console.log(s.slice(1, 4));//Megadott számok alapján jeleníti meg a stringet | abcabc -> bca (4. indexet már nem tartalmazza, [1, 4[)
console.log(s.slice(4));//4.től végig írja
console.log(s.trim());//üres space-ek az elejéről és végéről
console.log(s.toString());//stringgé alakítja

//Int beépített függvények
console.log(parseInt("5"));//intté alakítja
console.log(parseFloat("5.2"));//floattá alakítja
console.log(Math.ceil());//
console.log(Math.floar());//
console.log(Math.round());//

//Array beépített függvények
let arr = [100, 200, 300, 400, 500]
console.log(arr.reverse());//Megfordítja a atringet
console.log(arr.join());//Tömböt stringként adja vissza, de nem változtatja meg a tömböt, mint típus
console.log(arr.slice(2));//Kiválasztott elemet visszaadja egy új tömbben
console.log(arr.includes());//Tartalmazza-e a tömb
console.log(arr.push());//Elemet ad hozzá
console.log(arr.pop());//utolsó elemet törli és visszatér
arr.splice(arr.indexOf(300), 1);//törli az adott elemet
    //^ paraméterek: melyik indextől, hány elemet

arr.forEach() //minden egyes elemre meghívódik a fv
arr.forEach((value, index) => {console.log(index+1, ":", value)})

const arr2 = arr.filter((n) => {return n > 300}) //filter - logikai vizsgálat alapján pakol bele, eredeti tömböt nem módosítja
console.log(arr.some((n) => {return n > 300})) //logai feltételt vizsgál, boolean értéket add vissza
//Példa
const peopleArr = [
    {username: "Pista", age: 20},
    {username: "Ilona", age:40},
    {username: "János", age:15}

]
console.log(peopleArr.some((p) => {return p.age == 40 || p.username === "Pista"}))

console.log(arr.map((n) => {return n*2}))//callback fv, ami egy feltétel alapján új tömböt csinál
//console.log(arr.reduce((prev, curr) => prev - curr, 0))//Mit csináljon a jelenlegi elemmel és az előző elemmel és van egy kiindulási érték




//Operátorok
function isNumber(x){
    if(typeof x === "number"){ //typeof operátorban stringként tárolódik a változó típusa
        return true
    }
    return false
}

//null - érték hiánya, például egy Pista tömbben Pistának null lesz a lánykori neve

if(0){
    console.log("truthy ág")
}
else{
    console.log("falsy ág")
    //számok közül: 0
    //stringek közül: üres string
}



