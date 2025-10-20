let newHeroRef = {
    name: document.getElementById("heroName"),
    streght: document.getElementById("heroStrength"),
    charisma: document.getElementById("heroCharisma"),
    will: document.getElementById("heroWill"),
    dexertinity: document.getElementById("heroDexterity")
}
let cardDiv = document.getElementById("cardDiv");
let heroes = []

function isValid(hero){
    return (hero.streght+hero.will+hero.charisma+hero.dexertinity) === 10 
    && hero.role &&
    !hero.some((h) => {h.name === hero.name})
}
function renderHero(){
    if()
}
function getHero(hero){
    if(hero.streght > hero.will && hero.streght > hero.charisma && heroes.streght > heroes.dexertinity ){
        return "fighter";
    }
    else if(heroes.dexertinity > heroes.will && heroes.dexertinity > heroes.charisma && heroes.dexertinity > heroes.streght ){
        return "archer";
    }
    else if(heroes.will > heroes.dexertinity && heroes.will > heroes.charisma && heroes.will > heroes.streght ){
        return "wizzard";
    }
    else if(){
        return "bard";
    }
    else{
        return "";
    }
}

function saveHeros() {
    if (newHeroRef.name &&
        newHeroRef.streght &&
        newHeroRef.charisma &&
        newHeroRef.will &&
        newHeroRef.dexertinity
    ) {//egy objektum mindig truthy, tehát csak a newHeroRef vizsgáltával sose kerülünk az else ágba
        let newhero = {
            name: newHeroRef.name.value,
            streght: newHeroRef.streght.value,
            charisma: newHeroRef.charisma.value,
            will: newHeroRef.will.value,
            dexertinity: newHeroRef.dexertinity.value
        }
        //
        if(isValid(newhero)){
            heroes.push(newhero)
            renderHero()
        }
    }
    else{
        alert("Invalid references")
    }

}