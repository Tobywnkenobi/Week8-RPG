"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var Defense_1 = require("./Defense");
var Weapon_1 = require("./Weapon");
var ogre1 = new Character_1.Ogre();
// //console.log(ogre.attack());
// //console.log(ogre.defend());
var peon1 = new Character_1.Peon();
// // console.log(peon.attack());
var knight1 = new Character_1.Knight();
// //console.log(knight.defend());
var archer1 = new Character_1.Archer();
//console.log(archer.attack());
archer1.collectGold(100);
console.log(archer1.getGold());
ogre1.attack(knight1);
knight1.attack(ogre1);
ogre1.collectGold(100);
var ogre2 = new Character_1.Ogre(new Weapon_1.Club(), new Defense_1.Shield());
var knight2 = new Character_1.Knight(new Weapon_1.Sword(), new Defense_1.Armor());
