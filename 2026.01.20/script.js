//-------------------Változók-------------------
//Ref
let tagInput = document.getElementById("cat-pic-tag")
let textInput = document.getElementById("cat-pic-tring")

let catCardDiv = document.getElementById("cat-cards")

let inputPicNumber = document.getElementById("numberOfPic")

let baseURL = "https://cataas.com/cat"

let cats = [];
//-----------fv------------
function getCatsData(){
    const xhr = new XMLHttpRequest;
    xhr.open("GET", `${baseURL}/${tagInput.value}/says/${textInput.value}`);
    xhr.responseType = "blob" //kép esetén fontos

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let imgURL = URL.createObjectURL(xhr.response);//speckó stringet generál, amit böngésző értelmezni tud
                cats.push(imgURL)
                ShowCats()
            }
            else{
                alert("Hiba")
            }
        }
        
    }
    xhr.send()
}

function ShowCats(){
    catCardDiv.innerHTML = ""
    cats.forEach((element, index) => {
    catCardDiv.innerHTML += `
        <div id="card">
            <h3>#${index+1}<h3>
            <img src="${element}" id="img" />
        </div>

    ` 
    })

}

function deletePic(){ //nem kell meghívni onclick esemény
    let serialNumber = parseInt(inputPicNumber.value)
    let picIndex = serialNumber - 1
    cats.splice(picIndex, 1)
    ShowCats()
}

