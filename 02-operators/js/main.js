alert("hola")
let primernumero = prompt( "Ingresa Numero ") 

let segundonumero = prompt ("ingresa el numero ")

primernumero = Number(primernumero)
segundonumero = Number(segundonumero)

let resultado = primernumero + segundonumero  
console.log(resultado)

console.log(primernumero > segundonumero)

let primerletra  = prompt( "Ingresa letra ") 
let segundaletra = prompt ("ingresa el letra ")

console.log(primerletra > segundaletra)


const G_TIERRA= 9.81;
const G_LUNA= 1.622;
const G_MARTE= 3.711;
const G_JUPITER= 24.79;
let nombre="";
let pesoActual=0;
let pesLuna=0;
let pesMarte=0;
let pesJupiter=0;
nombre= prompt("ingresa tu nombre");
pesoActual= Number(prompt("ingresa tu peso"));
//formula para obtner el peso en otro planeta
// pesoOtroplaneta= pesoTierra / gravedadTierra *gravedadOtroPlaneta
pesLuna= (pesoActual/G_TIERRA) * G_LUNA;
console.log( `El peso de ${nombre} en la luna es ${pesLuna} `);
pesMarte= (pesoActual/G_TIERRA) * G_MARTE;
console.log( `El peso de ${nombre} en Marte es ${pesMarte} `);
pesJupiter= (pesoActual/G_TIERRA )* G_JUPITER;
console.log( `El peso de ${nombre} en Jupiter es ${pesJupiter} `);


// Ejercicio uno Ingresa nombre y apellido en dos variables. transformar apellido a mayusculas y nombre a minusculas 
//Almacena nombre en una variable
//almacena apellido en una variable 
//transformr el nombre a minusculas y guardararlo en una variable 
//transformar apellido a minusculas y guardarlo en una variable
// concatenar nombre y apellido transformado y guardarlo en una variable 
//Devolver texto como resultado 

/*


let nombretransformado = nombreUsuario.toLowerCase()
let apellidotransformado = apellidoUsuario.toUpperCase()

let textjoined = ` ${nombretransformado} ${apellidotransformado}`
*/
let nombreUsuario = prompt ( " Ingresa tu nombre en ")

let apellidoUsuario = prompt ( " Ingresa tu apellido en ")


function nameformat(nombreUsuario,apellidoUsuario){
    let nombretransformado = nombreUsuario.toLowerCase()
    let apellidotransformado = apellidoUsuario.toUpperCase()
    
    let textjoined = ` ${nombretransformado} ${apellidotransformado}` 
    return textjoined
}

console.log(nameformat(nombreUsuario,apellidoUsuario))

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre


Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

let nameComplete = "Pablo" // 3

// [e, a, a]
// null

let vowels = nameComplete.match(/[aeiou]/gi) // arreglo de esas vocales

console.log('vocales: ', vowels,vowels.length)

// let numbers = nameComplete.match(/[0123456789]/gi)


/*
Ejercicio 4:
 "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario


Ejercicio 5:
    Output: "el string {string 1} es el más largo"
*/

/*
- primer string en una variable
-  segundo string en una variable
-  longitud del primer string en una variable
-  longitud del segundo string en una variable
- Comparar los string
- Si longitud del primer string es mayor que el segundo string
    - mandar el mensaje -> "El primer string es mas largo"
- de lo contrario Si El segundo es mayor al primer string
    - mandar el mensaje -> "El segundo string es mas largo"
- de lo contrario 
    - mandar el mensaje -> "Ambos string son iguales"
*/

// declaracion
function compareStrings(string1, string2) {
    let lengthString1 = string1.length
    let lengthString2 = string2.length
    if(lengthString1 > lengthString2) {
        return "El string1 es mayor"
    }else if(lengthString2 > lengthString1) {
        return "El string2 es mayor"
    }else {
        return "Ambos son iguales"
    }
}

// ejecutar la funcion
console.log(compareStrings("Some String", "This is a string more large"))




/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
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
*/

/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/


/*
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/


function operations(numero1, numero2, operation) {
    let resultado
    switch (operation) {
        case "suma": 
            resultado = `El resultado de la suma "${operation}" de los numeros es: ${numero1 + numero2}`
            break;
        case "resta":
            resultado = `El resultado de la resta "${operation}" de los numeros es: ${numero1 - numero2}`
            break;
        case "multiplicacion":
            resultado = `El resultado de la multiplicacion "${operation}" de los numeros es: ${numero1 * numero2}`
            break;
        case "division":
            resultado = `El resultado de la division "${operation}" de los numeros es: ${numero1 / numero2}`
            break;
        default:
            resultado = "No existe esta operacion"
            break;
    }
    return resultado
}

let operationChoiced = prompt("ingresa que operacion quieres realizar \n opcion1=suma \n opcion2=resta \n opcion3=multiplicacion  \n opcion4=division")
let number1 = parseInt(prompt("ingresa el valor de numero 1"))
let number2 = parseInt(prompt("ingresa el valor de numero 2")) //convertir de string a un entero

console.log(operations(number1, number2, operationChoiced))


/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/

// Crear una variable prompt para introducir un string 
//crear una variable que haga que la variable ingresada anteriormente se voltee hacia el lado contrario 
// entregar el resultado en consola 

let KodemiaString = "Kodemia"
function ReverseString (str){
  return str.split("").reverse().join("")
}
console.log(ReverseString(KodemiaString))


/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"
*/

/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/