"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowAndArrow = exports.Sword = exports.Club = void 0;
var Club = /** @class */ (function () {
    function Club() {
    }
    Club.prototype.useWeapon = function () {
        return 'Attack with club *Thud*';
    };
    return Club;
}());
exports.Club = Club;
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.useWeapon = function () {
        return 'Attack with sword *slice*';
    };
    return Sword;
}());
exports.Sword = Sword;
var BowAndArrow = /** @class */ (function () {
    function BowAndArrow() {
    }
    BowAndArrow.prototype.useWeapon = function () {
        return 'Let in rain arrows *swoosh*';
    };
    return BowAndArrow;
}());
exports.BowAndArrow = BowAndArrow;
