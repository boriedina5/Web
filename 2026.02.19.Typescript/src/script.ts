type GitCategory = "Sweets" | "Utility" | "Game" | "Toy";

interface IGift {
    name: string;
    price: number;
    category: GitCategory;
}

class Gift implements IGift{
    name: string;
    price: number;
    category: GitCategory;

    constructor(name: string, price: number, category: GitCategory){
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

interface IPerson{
    name: string;
    balance: number;
    inventory: Gift[]
    likes: GitCategory[]
}

class Person implements IPerson{
    name: string;
    balance: number;
    inventory: Gift[] = []
    likes: GitCategory[] = []

    constructor(name: string, balance: number){
        this.name = name
        this.balance = balance
    }

    buy(gift: Gift): void{
    //Hozzáadja az inventorihoz
    this.inventory.push(gift);
    //Levonja az árát
    this.balance -= gift.price;
    }
    remove(gift: Gift): Gift | undefined{
    //
    const index = this.inventory.indexOf(gift);
    if(index !== -1){
        return this.inventory.splice(index, 1)[0];
    }
        return undefined
    }
}

class People{
    people: Person[] = [];

    addPerson(person: Person): void {
        const findPerson = this.people.find(p => p.name == person.name);
        if(!findPerson){
            this.people.push(person)
        }
        else{
            console.log("Van már ilyen")
        }
    }
    getPerson(person: Person): Person | undefined{
        return this.people.find(p => p.name == person.name);
    }

    gift(addGiftPerson: Person, getGiftPerson: Person, gift: Gift): void{
        const findAddGiftPerson = this.people.find(p => p.name == addGiftPerson.name);
        const findgetGiftPerson = this.people.find(p => p.name == getGiftPerson.name);
        const findGift = addGiftPerson.inventory.find(g => g.name == gift.name);
        if(findAddGiftPerson && findgetGiftPerson && findGift){
            //ajándékot adótól elveszi az ajándékot
            addGiftPerson.remove(gift)
            //kapónak odaadja
            getGiftPerson.inventory.push(gift);
        }
    }

}
/*
//Ellenőrzés-----------------------------------------------------
//Ajándékok
const csoki = new Gift("Milka", 500, "Sweets");
const game = new Gift("Life is Starnage 2", 20000, "Game");
const toy = new Gift("Csattogós lepke", 1000, "Toy");
const utility = new Gift("Auchan saját márkás mosogatószer", 1200, "Utility");

//Szeméyek
const p1 = new Person("Robi", 100000)
const p2 = new Person("Roli", 100000)


//Ellenőrzése a kódnak
//buy
p1.buy(csoki)
p1.buy(game)
p1.buy(toy)
p1.buy(utility)
//remove
p1.remove(csoki)

//gyűjtő osztály
const registry = new People
//addperson
registry.addPerson(p1);
registry.addPerson(p2);
//getperson
registry.getPerson(p2);
//gift
registry.gift(p1, p2, toy)


console.log("--- Rendszer ellenőrzése ---");

// 1. Nézzük meg az összes embert a listában
console.log("Emberek a registry-ben:", registry.people);

// 2. Próbáljuk meg lekérni p1-et név alapján
const keresettSzemely = registry.getPerson(p1);
console.log("Megtalált személy:", keresettSzemely);

// 3. Ha van egyenlege, írassuk ki azt is
if (keresettSzemely) {
    console.log(`${keresettSzemely.name} egyenlege: ${keresettSzemely.balance} Ft`);
}
*/