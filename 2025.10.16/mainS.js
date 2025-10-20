let cardDiv = document.getElementById("cardDiv");

let heroName = document.getElementById("heroName")
let heroStrength = document.getElementById("heroStrength")
let heroCharisma = document.getElementById("heroCharisma")
let heroWill = document.getElementById("heroWill")
let heroDexterity = document.getElementById("heroDexterity")
let statAmount = heroStrength.value + heroCharisma.value + heroWill.value + heroDexterity.value

function showHeros() {
    if (heroName && heroStrength && heroCharisma && heroWill && heroDexterity) {
        if (statAmount > 10) {
            alert("Max 10 points")
        }
        else {
            createCard(heroName, heroStrength, heroCharisma, heroWill, heroDexterity)
        }
    }
    else {
        alert("Nem jók az adatok")
    }
}
function createCard(heroName, heroStrength, heroCharisma, heroWill, heroDexterity) {
    let div = document.createElement("div")
    div.classList.add("card")
    cardDiv.appendChild(div)

    let img = document.createElement("img")
    if (heroName == "Archer") {
        img.src = "img/archer.png"
    }
    else if (heroName == "Bard") {
        img.src = "img/bard.png"
    }
    else if (heroName == "Fighter") {
        img.src = "img/fighter.png"
    }
    else if (heroName == "Wizzard") {
        img.src = "img/wizzard.png"
    }
    div.appendChild(img)

    let container = document.createElement("div")
    container.classList.add("container")
    div.appendChild(container)

    let h4 = document.createElement("h4")
    h4.classList.add("h4")
    container.appendChild(h4)
    h4.innerText = heroName

    let heroStrengthP = document.createElement("p")
    heroStrengthP.classList.add("p")
    container.appendChild(heroStrengthP)
    heroStrengthP.innerText = `
            Hero Strength: ${heroStrength}
        `

    let heroCharismaP = document.createElement("p")
    heroCharismaP.classList.add("p")
    container.appendChild(heroCharismaP)
    heroCharismaP.innerText = `
            Hero Charisma: ${heroCharisma}
        `

    let heroWillP = document.createElement("p")
    heroWillP.classList.add("p")
    container.appendChild(heroWillP)
    heroWillP.innerText = `
            Hero will: ${heroWill}
        `
    let heroDexterityP = document.createElement("p")
    heroDexterityP.classList.add("p")
    container.appendChild(heroDexterityP)
    heroDexterityP.innerText = `
            Hero Dexternity: ${heroDexterity}
        `

}