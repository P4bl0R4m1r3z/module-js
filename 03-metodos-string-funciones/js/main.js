/*
Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false
*/

// Si el string es menor a 7 caracteres es falso , de lo contrario es verdadero 

function compareStringLength(string1){
   
    let DistanciaString1 =string1.length
    

    if(DistanciaString1 >= 6) {
        return true
    }
    else  {
        return false
    }
}

console.log(compareStringLength("anaconda"))
console.log(compareStringLength("belzeebub"))
console.log(compareStringLength("koder"))
console.log(compareStringLength("cerveza"))

/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6


*/
let num = prompt("Ingresa un numero: ")
num = Number(num)
let result = ""

for(let i=0; i<=10; i++){
    result = i * num
    console.log(`${num} x ${i} = ${result}`)
}
// pedir variable al usuario 
//pasar de string a number 
// resultado de variable multiplicar y entregar en consola 



/*
Ejercicio 3:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/
let strCien = prompt("Ingresa un numero entre 10 y 100")
let strCienNum = Number(strCien)

for (let index = 1;index<= strCienNum; index++ ){
    if (index %2 === 0 ) {
       console.log(`${index}`)
    }
}
/*
Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10

*/
/*
/*
Ejercicio 5:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

let asterisco = "*"
let asteriscolenght = asterisco.length

/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/

/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders
*/


/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados
*/
