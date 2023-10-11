import { Ogre, Peon, Knight, Archer } from './Character';

const ogre = new Ogre();
console.log(ogre.attack());
console.log(ogre.defend());

const peon = new Peon();
console.log(peon.attack());

const knight = new Knight();
console.log(knight.defend());

const archer = new Archer();
console.log(archer.attack());

archer.collectGold(100);
console.log(archer.getGold());