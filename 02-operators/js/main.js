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