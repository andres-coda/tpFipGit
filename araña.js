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
exports.__esModule = true;
exports.Arana = void 0;
var animal_1 = require("./animal");
var Arana = /** @class */ (function (_super) {
    __extends(Arana, _super);
    function Arana(pPatas) {
        return _super.call(this, pPatas) || this;
    }
    Arana.prototype.comer = function () {
        console.log("comiendo");
    };
    Arana.prototype.caminar = function (pPatas) {
        console.log("la ara\u00F1a esta caminando con sus ".concat(pPatas, " patas"));
    };
    return Arana;
}(animal_1.Animal));
exports.Arana = Arana;
