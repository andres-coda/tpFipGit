"use strict";
exports.__esModule = true;
exports.ListaAnimales = void 0;
var ListaAnimales = /** @class */ (function () {
    function ListaAnimales() {
        this.animales = [];
    }
    ListaAnimales.prototype.buscar = function (pAnimal) {
        var aux;
        aux = false;
        for (var i = 0; i <= this.animales.length; i++) {
            if (this.animales[i] === pAnimal) {
                aux = true;
            }
        }
        return aux;
    };
    /* buscar(pAnimal:Animal):boolean{
        
        return this.animales.includes(pAnimal);
    } */
    ListaAnimales.prototype.agregarAnimal = function (pAnimal) {
        this.animales.push(pAnimal);
    };
    ListaAnimales.prototype.removerAnimal = function (pAnimal) {
        this.animales = this.animales.filter(function (e) { return e != pAnimal; });
    };
    return ListaAnimales;
}());
exports.ListaAnimales = ListaAnimales;
