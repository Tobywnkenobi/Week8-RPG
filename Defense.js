"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tunic = exports.Armor = exports.Shield = void 0;
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.useDefense = function () {
        return 'Your shield is raised in defense *thud*';
    };
    return Shield;
}());
exports.Shield = Shield;
var Armor = /** @class */ (function () {
    function Armor() {
    }
    Armor.prototype.useDefense = function () {
        return 'Your armor helped shield damage *clank*';
    };
    return Armor;
}());
exports.Armor = Armor;
var Tunic = /** @class */ (function () {
    function Tunic() {
    }
    Tunic.prototype.useDefense = function () {
        return 'The tunic is helping all it can *not much*';
    };
    return Tunic;
}());
exports.Tunic = Tunic;
