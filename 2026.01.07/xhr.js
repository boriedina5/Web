//Bevezetés
/*let a = 4;
/*function fnc1(x){
    console.log(x);
}
fnc1(x)*/
/*const fn2 = (a) => {console.log(a)}
fn2(a)*/
let allCharacters = [];
function getData(url){//url - https://rick...
    const xhr = new XMLHttpRequest()//példányosítás
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4 && xhr.status === 200){//ha kész állapotban van = befejeződött a folyamat ÉS az xhr a 200-at kapta-e (ha esetleg rossz lenne a GET linkje)
            //console.log(xhr.responseText)
            let resObj = JSON.parse(xhr.responseText);
            console.log(resObj);
            
            allCharacters.push(...resObj.results) // 20 db obj hozzáadjuk | ... nem a tömbre, hanem a több elemeire hívatkozik
            if(resObj.info.next){ //ha az oldal megkapta a választ, mindig megnézi van-e következő oldal
                getData(resObj.info.next)//következő oldal url címe
            }
            else{
                console.log(allCharacters)
            }
        }
    }
    xhr.open("GET", url);//állapot: 1-ba teszi a ready statate-t -> callback fv meghívódik (xhr.onreadystatechange = () =>{..})
    xhr.send() //meghívás
}

function init(){
    getData("https://rickandmortyapi.com/api/character")
    
}
init();


