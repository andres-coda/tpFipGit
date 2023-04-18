"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(pPatas) {
        this.patas = pPatas;
    }
    Animal.prototype.getIntPatas = function () {
        return this.patas;
    };
    ;
    Animal.prototype.setIntPtas = function (pPatas) {
        this.patas = pPatas;
    };
    ;
    return Animal;
}());
exports.Animal = Animal;
