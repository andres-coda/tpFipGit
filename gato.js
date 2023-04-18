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
exports.Gato = void 0;
var animal_1 = require("./animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(pPatas, pNombre) {
        var _this = _super.call(this, pPatas) || this;
        _this.nombre = pNombre;
        return _this;
    }
    Gato.prototype.comer = function () {
        console.log("comiendo");
    };
    Gato.prototype.jugar = function (pNombre) {
        console.log("".concat(pNombre, " esta jugando"));
    };
    //   public walk(pPatas:number){
    //       console.log(`el gato camina con sus ${pPatas} patas`);
    //       
    //   }
    Gato.prototype.caminar = function (pPatas) {
        console.log("el gato camina con sus ".concat(pPatas, " patas"));
    };
    Gato.prototype.getNombre = function () {
        return this.nombre;
    };
    Gato.prototype.setNombre = function (pName) {
        this.nombre = pName;
    };
    return Gato;
}(animal_1.Animal));
exports.Gato = Gato;
