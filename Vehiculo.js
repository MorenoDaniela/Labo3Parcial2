"use strict";
var Vehiculos;
(function (Vehiculos) {
    class Vehiculo {
        constructor(id, marca, modelo, precio) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
        getMarca() {
            return this.marca;
        }
        setMarca(nombre) {
            this.marca = nombre;
        }
        getPrecio() {
            return this.precio;
        }
        getId() {
            return this.id;
        }
        setId(id) {
            this.id = id;
        }
    }
    Vehiculos.Vehiculo = Vehiculo;
})(Vehiculos || (Vehiculos = {}));
