"use strict";
var Vehiculos;
(function (Vehiculos) {
    class Auto extends Vehiculos.Vehiculo {
        constructor(id, marca, modelo, precio, cantidadPuertas) {
            super(id, marca, modelo, precio); //llamo al constructor de la clase padre
            this.cantidadPuertas = cantidadPuertas; //inicializo atributos propios
        }
        getPuertas() {
            return this.cantidadPuertas;
        }
        setPuertas(cantidadPuertas) {
            this.cantidadPuertas = cantidadPuertas;
        }
    }
    Vehiculos.Auto = Auto;
})(Vehiculos || (Vehiculos = {}));
