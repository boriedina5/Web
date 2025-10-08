//Írjunk egy fv-t, mai kap egy paramétert
//Ha nem akpott console.error + null v.é
//Ha kapott térjen vissz  típus stringgel

function getType(x){
    if(x === undefined){
        return null
    }
    return typeof x;
}
console.log(getType())//valamilyen érték