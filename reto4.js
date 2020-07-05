
const animal = (prompt('¿Cual es tu animal favorito?')).trim().toLowerCase().includes('tortuga')

if (animal===true) {
    console.log('También me gustan las tortugas')
} else {
    console.log('Ese animal es genial, pero prefiero las tortugas')
}