const old=parseInt(prompt('¿Cúal es tu edad?'))

if (old>=30) {
    console.log('Nunca es tarde para aprender ¿Qué curso tomaremos?')
} else if (old>=18 && old<=29) {
    console.log('Es un momento excelente para impulsar tu carrera.')
}else{
    console.log('¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.')
}