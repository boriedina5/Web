const cities = [
    {name: "Budapest", lat: 47.4984, long: 19.0404},
    {name: "Paris", lat: 48.8534, long: 2.3488},
    {name: "Stockholm", lat: 59.3294, long: 18.0687},
]
const baseUrl = "https://api.open-meteo.com/v1/forecast"
const temps = [];

const buttonContainer = document.getElementById("button-container")
const tempTable = document.getElementById("temp-table")
let refsOk = false;

async function getData(){
    //Nem szép, de még elfogadható megoldás
    /*await fetch(`${baseUrl}?latitude=${cities.at(0).lat}&longitude=${cities.at(0).long}&daily=temperature_2m_max`).
            then(data => data.json()).
            then(data => temps.push({...data, name: cities.at(0).name}))
    await fetch(`${baseUrl}?latitude=${cities.at(1).lat}&longitude=${cities.at(1).long}&daily=temperature_2m_max`).
            then(data => data.json()).
            then(data => temps.push({...data, name: cities.at(1).name}))
    await fetch(`${baseUrl}?latitude=${cities.at(2).lat}&longitude=${cities.at(2).long}&daily=temperature_2m_max`).
            then(data => data.json()).
            then(data => temps.push({...data, name: cities.at(2).name}))*/
    //Szebb megoldás
   let count = 0;
    while(count < cities.length){
        await fetch(`${baseUrl}?latitude=${cities.at(count).lat}&longitude=${cities.at(count).long}&daily=temperature_2m_max`).
            then(data => data.json()).
            then(data => temps.push({...data, name: cities.at(count).name}))
        count++;
    }
    console.log(temps)
     /*
    //Legjobb megoldás
    let x = await Promise.all(
        cities.map(async (c) => {
            const res = await fetch(
                `${baseUrl}?latitude=${c.lat}&longitude=${c.long}&daily=temperature_2m_max`
            );
            const data = await res.json();
            return { ...data, name: c.name };
        })
    );
    temps.push(...x)*/
    
}
function printButtons(){
    if(refsOk){
        temps.forEach(c => {
            buttonContainer.innerHTML += `
            <button onclick="printTemp('${c.name}')">${c.name}</button>
            `
        })
        
    }
}
function printTemp(cityName){
    if(refsOk){
        console.log(temps)
        let city = temps.find(c => c.name === cityName);
        if(city){
            tempTable.innerHTML = `
            <thead>
                <th>
                    ${city.name}
                </th>
            </thead>
            <tbody>
                <tr><td>${city.daily.temperature_2m_max.at(1)}</td></tr>
                <tr><td>${city.daily.temperature_2m_max.at(2)}</td></tr>
                <tr><td>${city.daily.temperature_2m_max.at(3)}</td></tr>
            </tbody>
        `
        }
        
    }
}

async function init(){
    if(buttonContainer && tempTable){
        refsOk = true;
        await getData();
        printButtons();
        printTemp(temps.at(0).name);
    }
    else{
        console.error("Invalid references")
    }
}
init();