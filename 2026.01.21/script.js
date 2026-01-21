// Refs
let minInput = document.getElementById("minimum-residents-number");
let maxInput = document.getElementById("maximum-residents-number");

let cardContainrer = document.getElementById("card-container");

let isRefOk = false;

let locationArray = [

]
let filterNumb = {

}
// Fv

async function getLocationsData(url) {
    let resObj = await fetch(url).
        then(data => data.json());
    locationArray.push(...resObj.results);
    while (resObj.info.next) {
        resObj = await fetch(resObj.info.next).
            then(data => data.json());
        locationArray.push(...resObj.results);
    }
}

function showLocations() {
    cardContainrer.innerHTML = ""
    locationArray.forEach(row => {
        let residentsCount = row.residents.length;
        cardContainrer.innerHTML += `
            <div id="card-div">
                <h3>#${row.id}<h3>
                <h4>${row.name}</h4>
                <p>${row.dimension}</p>
                <p>${residentsCount}</p>
                <p></p>
            <div>
        `
    })
}

function filter() {
    let filteredArray = [];
    filterNumb = {
        min: parseInt(minInput.value),
        max: parseInt(maxInput.value)
    };
    
    if(filterNumb.max - filterNumb.min > 0){
        filteredArray = locationArray.filter(row => {return row.residents.length >= filterNumb.min && row.residents.length <= filterNumb.max })
        
        cardContainrer.innerHTML = ""
        filteredArray.forEach(row => {
        let residentsCount = row.residents.length;
        cardContainrer.innerHTML += `
            <div id="card-div">
                <h3>#${row.id}<h3>
                <h4>${row.name}</h4>
                <p>${row.dimension}</p>
                <p>${residentsCount}</p>
                <p></p>
            <div>
        `
    })
    }
    else{
        alert("Nincs szűrési feltétel")
    }
}


async function init() {
    if (minInput && maxInput && cardContainrer) {
        isRefOk = true;
        await getLocationsData("https://rickandmortyapi.com/api/location");
        showLocations();
    }
}
init();

