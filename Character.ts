
import { Weapon, Club, Sword, BowAndArrow } from "./Weapon";
import { Defense, Shield, Armor, Tunic } from "./Defense";

export abstract class Character {
    constructor(
        private weapon: Weapon,
        private defense: Defense,
        private gold: number = 0
    ){}

attack(target: Character): void {
    console.log(`${this.constructor.name} attacks!`);
    console.log(this.weapon.useWeapon());
    target.defend(this);
    // return this.weapon.useWeapon();
}

defend(attacker: Character): void {
    console.log(`${this.constructor.name} defends!`);
    console.log(this.defense.useDefense());
    // return this.defense.useDefense();
}

collectGold(amount: number): void {
    if (amount > 0) {
        this.gold += amount;
        console.log(`${this.constructor.name} collected ${amount} gold! total gold: ${this.gold}`);
    } else {
        console.error('Gold must be positive');
    }
}

getGold(): number {
    return this.gold;
}

setWeapon(weapon: Weapon): void {
    this.weapon = weapon;
}

setDefense(defense: Defense): void {
    this.defense = defense;
}
}


export class Ogre extends Character {
    constructor() {
        super(new Club(), new Shield());
    }
}

export class Peon extends Character {
    constructor() {
        super(new Club(), new Shield());
    }
}

export class Knight extends Character {
    constructor() {
        super(new Sword(), new Armor());
    }
}

export class Archer extends Character {
    constructor() {
        super(new BowAndArrow(), new Tunic());
    }
}


