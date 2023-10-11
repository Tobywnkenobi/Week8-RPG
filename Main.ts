import { Ogre, Peon, Knight, Archer } from './Character';
import { Shield, Armor, Tunic } from './Defense';
import { Club, Sword, BowAndArrow } from './Weapon'

const ogre1 = new Ogre();
// //console.log(ogre.attack());
// //console.log(ogre.defend());

const peon1 = new Peon();
// // console.log(peon.attack());

const knight1 = new Knight();
// //console.log(knight.defend());

const archer1 = new Archer();
//console.log(archer.attack());

archer1.collectGold(100);
console.log(archer1.getGold());

ogre1.attack(knight1);
knight1.attack(ogre1);
ogre1.collectGold(100);

const ogre2 = new Ogre(new Club(), new Shield());
const knight2 = new Knight(new Sword(), new Armor());
