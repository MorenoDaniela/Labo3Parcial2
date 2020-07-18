"use strict";
var Vehiculos;
(function (Vehiculos) {
    class Camioneta extends Vehiculos.Vehiculo {
        constructor(id, marca, modelo, precio, cuatroxcuatro) {
            super(id, marca, modelo, precio); //llamo al constructor de la clase padre
            this.cuatroxcuatro = cuatroxcuatro; //inicializo atributos propios
        }
        getCuatro() {
            return this.cuatroxcuatro;
        }
        setCuatro(cuatro) {
            this.cuatroxcuatro = cuatro;
        }
    }
    Vehiculos.Camioneta = Camioneta;
})(Vehiculos || (Vehiculos = {}));
