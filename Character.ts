
import { Weapon, Club, Sword, BowAndArrow } from "./Weapon";
import { Defense, Shield, Armor, Tunic } from "./Defense";

export abstract class Character {
    constructor(
        private weapon: Weapon,
        private defense: Defense,
        private gold: number = 0
    ){}

attack(): string {
    return this.weapon.useWeapon();
}

defend(): string {
    return this.defense.useDefense();
}

collectGold(amount: number): void {
    this.gold += amount;
}

collectGold(amount: number): void {
    this.gold += amount
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


