"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = exports.Knight = exports.Peon = exports.Ogre = exports.Character = void 0;
var Weapon_1 = require("./Weapon");
var Defense_1 = require("./Defense");
var Character = /** @class */ (function () {
    function Character(weapon, defense, gold) {
        if (gold === void 0) { gold = 0; }
        this.weapon = weapon;
        this.defense = defense;
        this.gold = gold;
    }
    Character.prototype.attack = function () {
        return this.weapon.useWeapon();
    };
    Character.prototype.defend = function () {
        return this.defense.useDefense();
    };
    Character.prototype.collectGold = function (amount) {
        this.gold += amount;
    };
    Character.prototype.collectGold = function (amount) {
        this.gold += amount;
    };
    Character.prototype.getGold = function () {
        return this.gold;
    };
    Character.prototype.setWeapon = function (weapon) {
        this.weapon = weapon;
    };
    Character.prototype.setDefense = function (defense) {
        this.defense = defense;
    };
    return Character;
}());
exports.Character = Character;
var Ogre = /** @class */ (function (_super) {
    __extends(Ogre, _super);
    function Ogre() {
        return _super.call(this, new Weapon_1.Club(), new Defense_1.Shield()) || this;
    }
    return Ogre;
}(Character));
exports.Ogre = Ogre;
var Peon = /** @class */ (function (_super) {
    __extends(Peon, _super);
    function Peon() {
        return _super.call(this, new Weapon_1.Club(), new Defense_1.Shield()) || this;
    }
    return Peon;
}(Character));
exports.Peon = Peon;
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super.call(this, new Weapon_1.Sword(), new Defense_1.Armor()) || this;
    }
    return Knight;
}(Character));
exports.Knight = Knight;
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super.call(this, new Weapon_1.BowAndArrow(), new Defense_1.Tunic()) || this;
    }
    return Archer;
}(Character));
exports.Archer = Archer;
