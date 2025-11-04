let colorsArray = [
    { "name": "Red", "hex": "#FF0000", "likes": 1523, "dislikes": 214 },
    { "name": "Green", "hex": "#00FF00", "likes": 1876, "dislikes": 132 },
    { "name": "Blue", "hex": "#0000FF", "likes": 2341, "dislikes": 98 },
    { "name": "Yellow", "hex": "#FFFF00", "likes": 1734, "dislikes": 190 },
    { "name": "Cyan", "hex": "#00FFFF", "likes": 1267, "dislikes": 154 },
    { "name": "Magenta", "hex": "#FF00FF", "likes": 1189, "dislikes": 210 },
    { "name": "White", "hex": "#FFFFFF", "likes": 2518, "dislikes": 127 },
    { "name": "Gray", "hex": "#808080", "likes": 1105, "dislikes": 245 },
    { "name": "Orange", "hex": "#FFA500", "likes": 1592, "dislikes": 166 },
    { "name": "Purple", "hex": "#800080", "likes": 1437, "dislikes": 189 },
    { "name": "Pink", "hex": "#FFC0CB", "likes": 2085, "dislikes": 172 },
    { "name": "Brown", "hex": "#A52A2A", "likes": 967, "dislikes": 278 },
    { "name": "Lime", "hex": "#00FF00", "likes": 1740, "dislikes": 140 },
    { "name": "Navy", "hex": "#000080", "likes": 1554, "dislikes": 124 },
    { "name": "Teal", "hex": "#008080", "likes": 1218, "dislikes": 198 },
    { "name": "Olive", "hex": "#808000", "likes": 1032, "dislikes": 250 },
    { "name": "Maroon", "hex": "#800000", "likes": 984, "dislikes": 237 },
    { "name": "Gold", "hex": "#FFD700", "likes": 1907, "dislikes": 165 },
    { "name": "Silver", "hex": "#C0C0C0", "likes": 1605, "dislikes": 143 }
]
let colorDiv = document.getElementById("colors");


function createColorPalet() {
    colorsArray.forEach(element => {
        let container = document.createElement("div")
        container.setAttribute('id', element.name);
        colorDiv.appendChild(container)

        let datas = document.createElement("div")
        datas.classList.add("datas")
        container.appendChild(datas)

        let h4 = document.createElement("h4")
        h4.classList.add("h4")
        h4.innerHTML = `${element.name}`
        datas.appendChild(h4)

        let hex = document.createElement("p")
        hex.classList.add("hex")
        hex.innerHTML = `${element.hex}`
        datas.appendChild(hex)

        //Like Button
        let like = document.createElement("button")
        like.setAttribute('id', "buttonLike");
        like.textContent = "Like"
        like.addEventListener("click", () => {
            if (disLike.textContent === "Disliked") {
                // ha előtte dislike-olt
                disLike.textContent = "Dislike";
                like.textContent = "Liked";
                element.likes++;
                numberOfLikes.innerHTML = element.likes;
                likeVsDislike.innerHTML = `${parseFloat(element.likes / element.dislikes).toFixed(2)}`
            } else if (like.textContent === "Liked") {
                // ha újra rákattint, visszavonja
                like.textContent = "Like";
                element.likes--;
                numberOfLikes.innerHTML = element.likes;
                likeVsDislike.innerHTML = `${parseFloat(element.likes / element.dislikes).toFixed(2)}`
            } else {
                // sima like
                like.textContent = "Liked";
                element.likes++;
                numberOfLikes.innerHTML = element.likes;
                likeVsDislike.innerHTML = `${parseFloat(element.likes / element.dislikes).toFixed(2)}`
            }
        });
        datas.appendChild(like)

        //Like numbers
        let numberOfLikes = document.createElement("p")
        numberOfLikes.classList.add("numberOfLikesP")
        numberOfLikes.innerHTML = `${element.likes}`
        datas.appendChild(numberOfLikes)

        //Dislike Button
        let disLike = document.createElement("button")
        disLike.setAttribute('id', "buttonDislike");
        disLike.textContent = "Dislike"

        disLike.addEventListener("click", () => {
            if (like.textContent === "Liked") {
                like.textContent = "Like";
                disLike.textContent = "Disliked";
                element.likes--; // ha előtte like-olt, csökkenjen
                numberOfLikes.innerHTML = element.likes;
                element.dislikes++;
                numberOfDislikes.innerHTML = element.dislikes;
                likeVsDislike.innerHTML = `${parseFloat(element.likes / element.dislikes).toFixed(2)}`
            } else if (disLike.textContent === "Disliked") {
                // ha újra rákattint, visszavonja
                disLike.textContent = "Dislike";
                element.dislikes--;
                numberOfDislikes.innerHTML = element.dislikes;
                likeVsDislike.innerHTML = `${parseFloat(element.likes / element.dislikes).toFixed(2)}`
            } else {
                disLike.textContent = "Disliked";
                element.dislikes++;
                numberOfDislikes.innerHTML = element.dislikes;
                likeVsDislike.innerHTML = `${parseFloat(element.likes / element.dislikes).toFixed(2)}`
            }
        });
        datas.appendChild(disLike)

        //Like numbers
        let numberOfDislikes = document.createElement("p")
        numberOfDislikes.classList.add("numberOfdislikesP")
        numberOfDislikes.innerHTML = `${element.dislikes}`
        datas.appendChild(numberOfDislikes)

        //like dislike arány cím
        let h6 = document.createElement("h6")
        h6.classList.add("h6")
        h6.innerHTML = "Like-dislike arány"
        datas.appendChild(h6)

        //like dislike arány
        let likeVsDislike = document.createElement("p")
        likeVsDislike.classList.add("likeVsDislike")
        likeVsDislike.innerHTML = `${parseFloat(element.likes / element.dislikes).toFixed(2)}`
        datas.appendChild(likeVsDislike)

    });

}
createColorPalet()