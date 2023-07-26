//Clase 1 - Inntroducción
console.log("Hola Mundo! Este es mi primer comando TypeScript");


//Declaración de Varaiables

var nombre:string = "Rodrigo";
var nombre = 'Rodrigo Mora';
let mail ="test@testmail.com"

console.log("Hola "+nombre);
console.log("Hola "+nombre);
console.log("Hola "+nombre+"?");

console.log(`Hola qué tal las vacaciones, ${nombre}?`); //variable local
console.log(`El e-mail es ${nombre} y mi email es ${mail} `);

const PI:number=3.1416;


// Importante es usar fuerte tipado
// var mivariable: number  
// var mivariable: string
// var mivariable: any    , mucho cuidado con any ya que puede cambiar de tipo (como en Javascript)
// var mivariable: boolean

var error:boolean = false;

console.log (`Hay error:${error}`);

//Instanciación Multiple


let a:string,b:boolean,c:number; //instancia de 3 variables sin valor inicial

a="Roro";
b=true;
c=18.1;

//Types: number,string, boolean,void,null y undefined



//Tipos de datos complejos
let listaTareas:string[]  =["Tarea1","Tarea2"];
console.log(listaTareas);
console.log(listaTareas[0]);
console.log(listaTareas[1]);

//Combinando tipos distintos 

let valores: (string | number | boolean)[]= [false,"Hola",true,56];

//Enumerados
enum Estados {"Completado"="C","Incompleto"="I","Pendiente"="P"}

let estadoTarea:Estados= Estados.Completado;

console.log(Estados.Completado)


// Interfaces

interface Tarea{

    nombre:string,
    estado:Estados,
    urgencia:number
}

//Podemos crear variables que sigan la interface Tarea

let tarea1: Tarea={
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia:10
}

console.log(tarea1.nombre);

//Types de TypeScript
type Producto = {
    precio:number,
    nombre:string
}


let coche:Producto={
    nombre:"Audi",
    precio:4500
}
//Operador ternario 
console.log(coche.nombre=="Audi"?true:false);


if(coche.precio==4500){
    console.log("Es verdad "+true)
}else{
    console.log("Es falso "+false);
}


//Switch Case

switch(coche.nombre){
case "Audi":
    console.log("Audi "+true);
        break;
case "Ferrari":
    console.log("Ferrari "+false);
    break;

    default:
        break;    
}

//Bucles

let listaTareasNueva: Tarea[]=[

    {
nombre: "Tarea 1",
estado: Estados.Completado,
urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15,
    },        
    {
    nombre: "Tarea 1",
    estado: Estados.Completado,
    urgencia: 15
    }
]

//ForEach
listaTareasNueva.forEach(
    (tarea:Tarea, index: number)=>{

console.log(`${index}-${tarea.nombre}`);


    }
);