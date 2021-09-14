// const arrayKoders = [
//     "Fanny Alvarez",
//     "Elias Herrera",
//     "Kraken Perez Salinas",
//     "Clau Rodriguez"
// ]

//   function addKoder() {
//     let koder = prompt("Agrega el nombre del koder")
//     arrayKoders.push(koder)
//   }

//   function printKoders(array) {
//     for(let i = 0; i < array.length; i++) {
//       console.log(`koder ${i + 1}: ${array[i]}`)
//     }
//   }

//   function koderWithInitials() {
//       let arrayKodersWithInitials = []
//       for(let i = 0; i < arrayKoders.length; i++) {
//         //   console.log(arrayKoders[i])
//           let arrayWords =  arrayKoders[i].split(" ")
//           let initials = getInitials(arrayWords)
//         //   console.log(initials)
//           let nameComplete = `${arrayKoders[i]} ${initials}`
//           arrayKodersWithInitials.push(nameComplete)
//       }
//       printKoders(arrayKodersWithInitials)
//   }

//   function getInitials(wordsArray) {
//     let initials = ""
//     for(let i = 0; i < wordsArray.length; i++) {
//       initials += wordsArray[i].charAt(0).toUpperCase() + ". "
//     }
//     // "F. A."
//     return initials
//   }


//Dado un string de palabras, devolver la palabra más larga.

let stringfirst = prompt("ingresa una palabra ")
let stringsecond = prompt ( "ingresa una palabra ")

if (stringfirst > stringsecond){
    console.log(`La palabra ${stringfirst} es mas larga`)
}
else {
    console.log(`La palabra ${stringsecond} es mas larga`)
}

//Crear un programa que permita detectar si una frase finaliza con punto.

