const cities = [
    {name: "Budapest", lat: 47.4984, long: 19.0404},
    {name: "Paris", lat: 48.8534, long: 2.3488},
    {name: "Stockholm", lat: 59.3294, long: 18.0687},
]
const buttonContainer = document.getElementById("button-container")
const targetTable = document.getElementById("taget-table")
let refsOK = false
let baseUrl = "https://api.open-meteo.com/v1/forecast";
let temps = [];

async function getData(){
    let count = 0;
    while(count < cities.length){
        await fetch
    }
    
    
    
    
    let x = await cities.map(async c =>{
        let response = await fetch(`${baseUrl}?latitude=${c.lat}&longitude=${c.long}&daily=temperature_2m_max`);
        response = await response.json//Todo városnév
        return response
      
    })
    temps.push(...x);
    
}
function printButtons(){
    if(refsOK){
        temps.forEach(c => {
            buttonContainer.innerHTML += `
            
            `
        })
    }
}

function printTemp(){
    if(refsOK){
        let city = temps.find(c => c.name === cityName)
        tempTable.innerHTML +=`
            <thead>
                <th>
                    ${city.name}
                </th>
            </thead>
            <tbody>
                <tr><td>${city.daily.temperature_2m_max.at(1)}</td></tr>
                
            </tbody>
        `
    }
}

async function init(){
    if(buttonContainer && targetTable){
        refsOK = true
        await getData();
        printButtons();
        printTemp(temps.at[0].name)
    }
    else{
        console.error("Invalid reference")
    }
}
init();