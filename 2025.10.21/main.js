let cards = document.getElementById("cards")



function creatElements() {
    let albumDatas = {
    albumName: document.getElementById("albumName").value,
    singer: document.getElementById("singer").value,
    pic: document.getElementById("albumtPic").value,
    date: document.getElementById("albumDate").value,
}
    //Big div
    let albumDiv = document.createElement("div")
    albumDiv.classList.add("albumDiv")
    cards.appendChild(albumDiv)
    //img
    let img = document.createElement("img")
    img.classList.add("albumPic")
    img.src = albumDatas.pic
    albumDiv.appendChild(img)
    //Data div
    let dataDiv = document.createElement("div")
    dataDiv.setAttribute("id", "dataDiv")
    albumDiv.appendChild(dataDiv)
    
    //h4
    let h4 = document.createElement("h4")
    h4.innerHTML = albumDatas.albumName
    dataDiv.appendChild(h4)
    //p -singer
    let pSinger = document.createElement("p")
    pSinger.innerHTML = `Singer/singers: ${albumDatas.singer}`
    dataDiv.appendChild(pSinger)
    //p - date
    let pDate = document.createElement("p")
    pDate.innerHTML = `Date: ${albumDatas.date}`
    dataDiv.appendChild(pDate)

    //Gombok
    let like = document.createElement("button")
    like.setAttribute('id', "buttonLike");
    like.textContent = "Like"
    like.addEventListener("click", 
        () => {
            if(disLike.textContent == "Disliked"){
                disLike.textContent = "Dislike"
                like.textContent = "Liked"         
            }
            else{
                like.textContent = "Liked"   
            }
            
        }
        );
    dataDiv.appendChild(like)

    let disLike = document.createElement("button")
    disLike.setAttribute('id', "buttonDislike");
    disLike.textContent = "Dislike"
    disLike.addEventListener("click", 
        () => {
            if(like.textContent == "Liked"){
                like.textContent = "Like"
                disLike.textContent = "Disliked"       
            }
            else{
                disLike.textContent = "Disliked"  
            }
            
        }
        );
    dataDiv.appendChild(disLike)

}
