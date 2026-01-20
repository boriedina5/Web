let targetTable = document.getElementById("target-table")
let forecastEndpoint = "https://api.open-meteo.com/v1/forecast"
let isRefOK = false;
let cites = [
    {name: "Budapest", latitude: 47.4979, longitude: 19.0402},
    {name: "Debrecen", latitude: 47.5333, longitude: 21.6333},
    {name: "Szeged", latitude: 46.253, longitude: 20.1482}
]
let forecasts = {}; //API válaszok mentése

async function getData() {
    await fetch(`${forecastEndpoint}?latitude=...&longitude=...&daily=temperature_2m_max&timezone=auto`)
}  

function renderCity(){
    targetTable.innerHTML = `
        <thead>
            <th>Időpont</th>
            <th>Maximum hőmérséklet</th>
        </thead>
        
    `;

}

