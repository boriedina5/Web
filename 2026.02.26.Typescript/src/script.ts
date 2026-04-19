type RoleType = "Warrior" | "Archer" | "Mage";
type WeaponType = "Sword" | "Bow" | "Staff";

interface IWeapon {
    damage: number;
    weaponType: WeaponType;
}

class Fighter {
    health: number;
    role: RoleType;
    weapon: IWeapon;

    constructor(health: number, role: RoleType, weapon: IWeapon) {
        if (!Fighter.isWeaponCompatible(role, weapon.weaponType)) {
            throw new Error(`${role} cannot use ${weapon.weaponType}`);
        }

        this.health = health;
        this.role = role;
        this.weapon = weapon;
    }

    static isWeaponCompatible(role: RoleType, weaponType: WeaponType): boolean {
        const compatibility: Record<RoleType, WeaponType> = {
            Warrior: "Sword",
            Archer: "Bow",
            Mage: "Staff"
        };

        return compatibility[role] === weaponType;
    }

    dealDamage(): number {
        if (this.health <= 0) return 0;
        return this.weapon.damage;
    }

    getDamage(amount: number): void {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    isAlive(): boolean {
        return this.health > 0;
    }
}

class Arena {
    fighters: Fighter[] = [];

    constructor(fighters: Fighter[]) {
        this.fighters = fighters;
    }

    private getRandomFighter(): Fighter {
        const index = Math.floor(Math.random() * this.fighters.length);
        return this.fighters[index]!;
    }

    fight(): void {
        if (this.fighters.length < 2) return;

        let fighter1 = this.getRandomFighter();
        let fighter2 = this.getRandomFighter();

        while (fighter1 === fighter2) {
            fighter2 = this.getRandomFighter();
        }

        console.log("Fight starts!");

        while (fighter1.isAlive() && fighter2.isAlive()) {
            fighter2.getDamage(fighter1.dealDamage());

            if (fighter2.isAlive()) {
                fighter1.getDamage(fighter2.dealDamage());
            }
        }

        const loser = fighter1.isAlive() ? fighter2 : fighter1;
        console.log("Loser eliminated");

        this.fighters = this.fighters.filter(f => f !== loser);
    }

    tournament(): Fighter | null {
        while (this.fighters.length > 1) {
            this.fight();
        }

        return this.fighters.length === 1 ? this.fighters[0]! : null;
    }
}

//Teszt
const sword: IWeapon = { damage: 15, weaponType: "Sword" };
const bow: IWeapon = { damage: 12, weaponType: "Bow" };
const staff: IWeapon = { damage: 18, weaponType: "Staff" };

const fighter1 = new Fighter(100, "Warrior", sword);
const fighter2 = new Fighter(80, "Archer", bow);
const fighter3 = new Fighter(70, "Mage", staff);

const arena = new Arena([fighter1, fighter2, fighter3]);

const winner = arena.tournament();
console.log("Winner:", winner);