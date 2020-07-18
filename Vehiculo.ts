namespace Vehiculos
{
    export class Vehiculo
    {
        private marca : string;
        private id : number;
        private modelo: string;
        private precio:number;

        constructor(id:number,marca:string,modelo:string,precio:number)
        {
            this.id=id;
            this.marca=marca;
            this.modelo=modelo;
            this.precio=precio;
        }

        public getMarca():string
        {
            return this.marca;
        }

        public setMarca(nombre:string):void
        {
            this.marca=nombre;
        }

        public getPrecio():number
        {
            return this.precio;
        }


        public getId():number
        {
            return this.id;
        }

        public setId(id:number):void
        {
            this.id=id;
        }
    }
}