// fetch("https://api.open-meteo.com/v1/forecast?latitude=47.4984&longitude=19.0404&hourly=snowfall").then(data => data.json()).then(data => console.log(data.hourly.snowfall.at(37)))


//1. Késztsünk weboldalt havazások megtekintésére.
//2. Olvassuk lat és long számokat, valamint a település nevét.
//  Tároljuk egy objektum tömbben
//3. Kérjük le adott kordinátán fetch segítségével a heti havazási adatot.
//4. Rajzoljunk ki minden várost egy html table-ben, csak a név+időpont+havazás mértéke(ahol nem 0);
//5. CSS

const forecastEndpoint = "https://api.open-meteo.com/v1/forecast"
let cities = [];
let snowfalls = [];
let isRefsOK = false;

const inputRefs = {
    cityName: document.getElementById("cityname-input"),
    latitude: document.getElementById("latitude-input"),
    longitude: document.getElementById("longitude-input")
}
const tableContainer = document.getElementById("table-container");

async function getCityData(city){
    await fetch(`${forecastEndpoint}?latitude=${city.latitude}&longitude=${city.longitude}&hourly=snowfall`).
        then(data => data.json()).
        then(resObj => {
            cities.push(city)
            snowfalls.push(resObj)
        });
        /* await fetch(`${forecastEndpoint}?${
            new URLSearchParams({
                latitude: city.latitude,
                longitude: city.longitude,
                hourly: "snowfall"
            })}`).
        then(data => data.json()).
        then(resObj => snowfalls.push(resObj)); */
}

function renderTable(cityName, snowData){
    const newTable = document.createElement("table");
    newTable.innerHTML += `
        <thead>
            <th>${cityName}</th>
            <th>Időpont</th>
            <th>Hóesés (cm)</th>
        </thead>
    `
    snowData.hourly.snowfall.forEach((sn,i) => {
        if(sn > 0){
            newTable.innerHTML+= `
                <tr>
                    <td></td>
                    <td>${new Date(snowData.hourly.time.at(i)).toDateString().slice(4)}</td>
                    <td>${sn}</td>
                </tr>
            `
        }
    })
    tableContainer.appendChild(newTable);
}

function renderCities(){
    tableContainer.innerHTML = "";
    cities.forEach((c, i) => {
        renderTable(c.cityName, snowfalls.at(i))
    })
    
}

async function search(){
    if(isRefsOK){
        const city = {
            cityName: inputRefs.cityName.value,
            latitude: inputRefs.latitude.value,
            longitude: inputRefs.longitude.value
        }
        if(city.cityName.length >= 3 && !cities.some(c => c.cityName === city.cityName)){
            await getCityData(city);
            renderCities();
        }
    }
}

function init(){
    if(inputRefs.cityName && inputRefs.latitude && inputRefs.longitude && tableContainer){
        isRefsOK = true;
    }
    else{
        console.error("Invalid references");
    }
}
init();