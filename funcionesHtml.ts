namespace Vehiculos
{
    var listaVehiculos: Array<Vehiculo> = new Array <Vehiculo>();
    var mascotaSeleccionada : boolean = false;
    var globalTr : any;
    var contenedorAgregar:any;
    var prom :number=0;

    window.onload = function ()
    {
        document.getElementById("alta")?.addEventListener("click",AbrirRecuadro);
        document.getElementById("btnGuardar")?.addEventListener("click",Vehiculos.Guardar);
        //document.getElementById("btnModificar")?.addEventListener("click",Animales.Modificar);
        document.getElementById("btnCerrarAbajo")?.addEventListener("click",CerrarRecuadro);
        document.getElementById("cerrar")?.addEventListener("click",CerrarRecuadro);
        document.getElementById("filtro")?.addEventListener("click",Vehiculos.Filtrar);
        
    }
    export function AbrirRecuadro()
        {
            var recuadro:any = document.getElementById("contenedorAgregar");
            contenedorAgregar=recuadro;
            recuadro.hidden=false;
        }

    export function CerrarRecuadro()
    {
        var recuadro:any = document.getElementById("contenedorAgregar");
            contenedorAgregar=recuadro;
            recuadro.hidden=true;
    }
    
    export function Guardar()
    {

        var marca:string = (<HTMLInputElement>document.getElementById("marca")).value;
        var modelo = (<HTMLInputElement>document.getElementById("modelo")).value;
        var precio =(<HTMLInputElement>document.getElementById("precio")).value;
        var tipoVehiculo = (<HTMLSelectElement>document.getElementById("tipo")).value;
        var cantidadPuertas = (<HTMLSelectElement>document.getElementById("puertas")).value;
        var cuatro = (<HTMLSelectElement>document.getElementById("cuatro")).value;

        var pro = new Promise((resolve, reject) => {
            var tipo = (<HTMLSelectElement>document.getElementById("tipo")).value;
            if (tipo == "Auto")
            {
                //(<HTMLSelectElement>document.getElementById("puertas")).hidden=false;
                var p = parseInt(precio);
                var cantidad = parseInt(cantidadPuertas);
                if (p.toString() != "NaN" && cantidad.toString()!="NaN")
                {
                resolve(new Auto(CalcularId(),marca, modelo,p,cantidad))
                }
                else
                {
                    reject("Error")
                }
            }
            else if (tipo == "Camioneta")
            {
                //(<HTMLSelectElement>document.getElementById("cuatro")).hidden=false;
                var p = parseInt(precio);
                resolve (new Camioneta(CalcularId(),marca, modelo,p,cuatro))
            }
            else 
            {
                reject("Error")
            }
        });

        pro.then((vehiculo) => {
            listaVehiculos.push(<Vehiculo>vehiculo);
            var tablaVehiculos = (<HTMLTableElement>document.getElementById("tabla")); 
            ConstruirFila(tablaVehiculos, (<Vehiculo>vehiculo).getId(), marca, modelo,precio);
                }).catch((error)=>
        {
            alert("No eligio tipo" + error)
        })
    }

    export function Eliminar(tr:any){
        var borrar = tr.target.parentNode.parentNode;
        var borrado  = borrar.childNodes[0].innerHTML
        var listaId = listaVehiculos.filter(Vehiculo => Vehiculo.getId()== borrado);
        if(listaId.length>0)
        {
            listaVehiculos.splice(borrado,1);
            tr.target.parentNode.parentNode.remove();
        }
    }

    function CalcularId()
    {
        var id : number = 1;
        if(listaVehiculos.length != 0)
        {
            var lastRegisterIndex : number = listaVehiculos.length-1;
            var lastRegister : Vehiculo = listaVehiculos[lastRegisterIndex];
            id = lastRegister.getId() + 1;
        }
        return id;
    }


    export function ConstruirFila(tabla:HTMLTableElement, id:number, marca:string, modelo:string,precio:string):void
    {

        var tr = document.createElement("tr");

        var td3 = document.createElement("td");
        td3.appendChild(document.createTextNode((id.toString())));
        tr.appendChild(td3);
        //td3.hidden=true;

        var td = document.createElement("td");
        td.appendChild(document.createTextNode(marca));
        tr.appendChild(td);

        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(modelo));
        tr.appendChild(td2);

        var td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(precio));
        tr.appendChild(td4);

        var tdAccion = document.createElement("td");
        var button = document.createElement("button");
        button.textContent = "Eliminar";
        button.addEventListener('click',Vehiculos.Eliminar);
        tdAccion.appendChild(button);
        tr.appendChild(tdAccion);
        
        tr.addEventListener("dblclick", fillData);
        tabla.appendChild(tr); 
    } 

    export function fillData(tr:any)
    {
        var trForFilling = tr.target.parentNode;
        globalTr=trForFilling;
        mascotaSeleccionada=true, 
        (<HTMLInputElement>document.getElementById("nombre")).value=trForFilling.childNodes[0].innerHTML;
        (<HTMLInputElement>document.getElementById("atributo")).value=trForFilling.childNodes[1].innerHTML;
        (<HTMLInputElement>document.getElementById("tipo")).value=trForFilling.childNodes[2].innerHTML;
    }

    export function Filtrar()
    {
        var promedio : number=0;
        var total=0;
        var select = (<HTMLInputElement>document.getElementById("tipoFiltro")).value;
        if (select == "Camioneta")
        {
            var listaCamionetas:Array<Vehiculo> = listaVehiculos.filter(function(item){
                if (item instanceof Camioneta)
                {
                    return item;
                }
            } );
            promedio = listaCamionetas.reduce(function(total,item){
                console.log(item.getPrecio());
                return total+=item.getPrecio();
            },0);
            promedio= promedio/listaCamionetas.length;
        }else if (select == "Auto")
        {
            var listaAutos:Array<Vehiculo> = listaVehiculos.filter(function(item){
                if (item instanceof Auto)
                {
                    return item;
                }
        
            });
            promedio = listaAutos.reduce(function(total,item){
                console.log(item.getPrecio());
                return total+=item.getPrecio();
            },0);
            promedio= promedio/listaAutos.length;
        }

        (<HTMLInputElement>document.getElementById("precioFiltro")).value =promedio.toString();
    }

    export function MostrarColumnas()
    {
        var id = document.getElementById("idCheck").checked;
    }
}