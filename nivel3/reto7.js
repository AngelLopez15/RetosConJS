const phrase=prompt('Ingrese una palabra').trim().toLowerCase()

const letter=phrase.charAt(0)

if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    console.log(`${phrase}way`)
} else {
    const newPhrase= phrase.substring(1)
    console.log(`${newPhrase}${letter}ay`)
}



