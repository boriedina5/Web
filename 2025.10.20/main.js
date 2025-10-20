let cards = document.getElementById("cards")
let characterDatas = {
    name: document.getElementById("inputName").value,
    media: document.getElementById("inputMedia").value,
    pic: document.getElementById("inputPic").value,
    rate: document.getElementById("inputRate").value,
    opinion: document.getElementById("inputOpinion").value,
    data: document.getElementById("inputData").value,
}
let mediaDictionary = {
    "Star Wars": 1,
    "The last airbender": 2,
}

function isItExistInDictionary() {
    let isItExist = false
    mediaDictionary.forEach((actualElement) => {
        if (actualElement.key == mediaDictionary.key) {
            mediaDictionary.value++
            isItExist = true
        }
        else {
            let key = characterDatas.media;
            obj[key] = 1;
            isItExist = false
        }
    });
}

function creatElements() {


    //Small div
    let characterDiv = document.createElement("div")
    characterDiv.classList.add("cardCharacter")
    cardDiv.appendChild(characterDiv)
    //img
    let img = document.createElement("img")
    img.classList.add("characterPic")
    img.src = pic
    characterDiv.appendChild(img)
    //Data div
    let dataDiv = document.createElement("div")
    characterDiv.appendChild(dataDiv)
    //h2
    let h2 = document.createElement("h2")
    h2.innerHTML = mediaDictionary.name
    dataDiv.appendChild(h2)
    //h4
    let h4 = document.createElement("h4")
    h4.innerHTML = mediaDictionary.media
    dataDiv.appendChild(h4)
    //p -rate
    let pRate = document.createElement("p")
    pRate.innerHTML = mediaDictionary.rate
    dataDiv.appendChild(pRate)
    //p - opinion
    let pOpinion = document.createElement("p")
    pOpinion.innerHTML = mediaDictionary.opinion
    dataDiv.appendChild(pOpinion)
    //p - data
    let pData = document.createElement("p")
    pData.innerHTML = mediaDictionary.data
    dataDiv.appendChild(pData)

    isItExistInDictionary
    if (isItExist === false) {
        //Id for big div
        let idString = characterDatas.media.replaceAll(' ', '');
        //Big div
        let cardDiv = document.createElement("div")
        cardDiv.classList.add("MediaCard")
        elem.setAttribute('id', idString)
        cardDiv.appendChild(characterDiv)
        //Add big div
        cards.appendChild(cardDiv)
    }
    else {
        let existingCardDiv = document.getElementById(mediaDictionary.media.replaceAll(' ', ''))
        existingCardDiv.appendChild(characterDiv)
    }
}
