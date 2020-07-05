const phrase=prompt('Intruduzca una frase de un poema o una canción').trim()
const long=phrase.length
const rangei=parseInt(prompt(`introduzca un numero entre 0 y ${long} para que sea el rango inicial`))
const rangef=parseInt(prompt(`introduzca un numero entre 0 y ${long} para que sea el rango final`))

const subPhrase=phrase.substring(rangei,rangef)

console.log(subPhrase)