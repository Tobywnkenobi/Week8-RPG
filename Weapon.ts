export interface Weapon {
    useWeapon(): string;
}    
    export class Club implements Weapon {
        useWeapon(): string {
            return 'Attack with club *Thud*';
        }
    }
    
    export class Sword implements Weapon {
        useWeapon(): string {
            return 'Attack with sword *slice*';
        }
    }
    
    export class BowAndArrow implements Weapon {
        useWeapon(): string {
            return 'Let in rain arrows *swoosh*';
        }
    }
