namespace Vehiculos
{
    export class Camioneta extends Vehiculo
    {
        private cuatroxcuatro:string;

        constructor(id:number,marca:string,modelo:string,precio:number,cuatroxcuatro:string)
        {
            super(id,marca,modelo,precio);//llamo al constructor de la clase padre
            this.cuatroxcuatro=cuatroxcuatro;//inicializo atributos propios
        }

        public getCuatro():string
        {
            return this.cuatroxcuatro;
        }

        public setCuatro(cuatro:string):void
        {
            this.cuatroxcuatro=cuatro;
        }
    }
}