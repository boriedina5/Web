//------------------Változók------------------------
//Refs
let inputCityName = document.getElementById('cityn-input');
let inputCityLan = document.getElementById('citylat-input');
let inputCityLon = document.getElementById('citylon-input');



let targetTable = document.getElementById('target-table');
let isRefOk = false

//Tömb
let cities = [
    {name: "Budapest", lat: 47.4984, long: 19.0404},
    {name: "Paris", lat: 48.8534, long: 2.3488},
    {name: "Stockholm", lat: 59.3294, long: 18.0687},
]
let sunshineDurration = []

//API
let baseURL = "https://api.open-meteo.com/v1/forecast"

//---------------------Fv------------------------

//Adatok leszedése a városokról


async function getCityData() {
    //fetch váltba vagy sem - ha később is kénne
    //addCityToArray() - miért ne: üres 
    let rowCount = 0;
    while(rowCount != cities.length){
        await fetch(`${baseURL}?latitude=${cities[rowCount].lat}&longitude=${cities[rowCount].long}&daily=sunshine_duration&timezone=auto`).
        then(dailySunshineDurrationData => dailySunshineDurrationData.json()).
        then(dailySunshineDurrationDataInWellFormat => sunshineDurration.push({...dailySunshineDurrationDataInWellFormat, name: cities.at(rowCount).name}))//hozzá ad egy két elemű obj-t -> 1. tömb, 2. név
        rowCount++;
    }
}

//Felhasználó adatainak hozzáadása a tömbhöz
//TODO: sz és h mentése mint float
async function addCityToArray(){
    
        cities.push({
                name: inputCityName.value,
                lat: parseFloat(inputCityLan.value),
                long: parseFloat(inputCityLon.value),
            })
    await getCityData()
    showDataInTable()
    
}

//Táblazátban való megjelenítés
//TODO - ürítsd le a tartalmat
function showDataInTable(){
    targetTable.innerHTML = ""
    
    
    targetTable.innerHTML = `
            <tr>
                <th>Város</th>
                <th>Dátum</th>
                <th>Napsütéses órák száma</th>
                <th>Növekedés (mp)</th>
            </tr>
            

    `
    // 72-78: 0. elem kiírása  ^
    
    let sunnyRowCount = 0
    while(sunnyRowCount != sunshineDurration.length){// tömb - város
        targetTable.innerHTML += `
        <tr>
                    
                    <td><b>${sunshineDurration.at(sunnyRowCount).name}</b></td>
                    <td>${sunshineDurration.at(sunnyRowCount).daily.time.at(0)}</td>
                    <td>${sunshineDurration.at(sunnyRowCount).daily.sunshine_duration.at(0)}</td>
                    <td> <i>Nincs hasonlítási alap</i> </td>
        </tr>
        `

        for (let i = 1; i < sunshineDurration.at(sunnyRowCount).daily.time.length; i++) {//1-es jó mert - különbség értéke kell | tömb adatai
            let durations = sunshineDurration.at(sunnyRowCount).daily.sunshine_duration; //msp
            let days = sunshineDurration.at(sunnyRowCount).daily.time //napok
            let diff = durations[i] - durations[i - 1];

        targetTable.innerHTML += `
            <tr>
            <td>${sunshineDurration[sunnyRowCount].name}</td>
            <td>${days[i]}</td>
            <td>${durations[i]}</td>
            <td>${diff.toFixed(2)} msp</td>
            </tr>
        `;  
    };
    sunnyRowCount++
}
}

//Inicializálás
async function init() {
    if(inputCityName && inputCityLan && inputCityLon && targetTable){
        isRefOk = true
        await getCityData(); //megvárja az összes adatot
       showDataInTable();
    }
}
init()