//Dado un string de palabras, devolver la palabra más larga.
/*

let stringfrase = prompt("introduce un string de dos palabras")

let stringcomparacion = stringfrase.split(" ")

if (stringcomparacion[0].length>stringcomparacion[1].length){
    return( `${stringcomparacion[0]}`)
}
if (stringcomparacion[0].length<stringcomparacion[1].length){
    return ( `${stringcomparacion[1]}`)
}
else {
    return("las palabras son de la misma longitud")
}

//Crear un programa que permita detectar si una frase finaliza con punto.

let frasecompleta = "Ponte chingon o vas a valer burger." 

let sintaxis = frasecompleta.match(/[.]/gi) 

console.log('la frase tiene un punto ', sintaxis,sintaxis.length)

//Crear un programa que permita al usuario retornar 
//el numero de coincidencias de una palabra en una frase
// que el mismo usuario introduzca


let FraseCoincidencias= prompt("ingresa una frase con palabras repetidas ");
var coincidenciasfrase = FraseCoincidencias.match(/["Hola"]/gi).length;
console.log(coincidenciasfrase)

//Crear un programa que permita al usuario extraer una subcadena de una cadena dada.


//Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.

function compareStrings(string1, string2) {
    let lengthString1 = string1.length
    let lengthString2 = string2.length
    if(lengthString1 > lengthString2) {
        return `La palabra ${string1}es mas larga`
    }else if(lengthString2 > lengthString1) {
        return `La palabra ${string2}es mas larga`
    }else {
        return "Ambos son iguales"
    }
}

// ejecutar la funcion
console.log(compareStrings("TAMALES", "OAXAQUEÑOS"))



//declaracion
const comparaStrings =() =>{
let palabra1 = prompt ("palabra1")
let palabra2 = prompt ("palabra2")
const resultado = (palabra1===palabra2) ? "Son Iguales" : "No Son Iguales"
return resultado
}

// invocacion 
 let comparacion = compareStrings()
 console.log(comparacion)



 //
 const getSubstring = (indexStart,indexEnd) => {

 }
//Crear un programa que permita a una cadena de texto muestra el caracter '-' ebtre cada caracter de la cadena.

let separador = () => {
    let frase = prompt("ingrese frase deseada")
 let splitter = frase.replaceAll(" ","-")
 let result = splitter.slice(1.-1)
 return result
}

console.log(separador())
*/
//Sabiendo que una cadena de texto contiene parentesis. Crear un programa qye me devuelva la cadena que se encuetra entre los parentesis.
/*
const AnalisisString = (texto)=>{
    let index= texto.indexOf(`(`)
    let last = texto.lastIndexOf(`)`)
    return index != -1 ? texto.substring(index ,last+1): "no hay palabras en los parentesis";
}
let text = prompt("ingresa texto");
let print = AnalisisString(text)
console.log(print)
*/
/*
if (index != -1){ 
    texto.substring(index,last+1)
   }
   else{
     "no existen las palabras entre parentesis"
   }
*/
/*
const piramide = (NumeroDeColumnas)=>{
    let numberofrows = NumeroDeColumnas ;
    let salida = "";
    for (var i = 1 ; i <=numberofrows; i++){
        for (var y =1 ; y <= i;y++ ){
            salida += i + " "; 
        }
        console.log(salida);
        salida ="";
    }
console.log( "pal otro lado ")
for (let i = numberofrows; i >=1 ; i--){
    for ( y = i; y>=1;y--){
        salida+= i + " ";
    }
    console.log(salida);
    salida="";
}
}
piramide(9)
 */

let dataArray = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]
/*
arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
    ...,
    {...}
]
*/


const arrayMentor = [];
console.log("**********EJERCICIO*************")
const ejercicio1 = (dataArray) => {
    for(let i=0;i<dataArray.length;i++){
        let nameComplete = dataArray[i];
        name = nameComplete[0];
        LastName = nameComplete[1];
        const arrayMentor1 = {
            name,LastName
        }
        arrayMentor.push(arrayMentor1);
    }
    console.log(arrayMentor);
}
console.log(ejercicio1(dataArray));