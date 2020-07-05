const question = prompt('¿Está lloviendo?').trim().toLowerCase()

switch (question) {
    case 'si':
        const question2 = prompt('¿Está haciendo mucho viento ?').trim().toLowerCase()
        if (question2==='si') {
            console.log('Hace mucho viento para salir con una sombrilla')
        } else {
            console.log('Entoces debes llevar una sombrilla')
        }
        break;
    case 'no':
        console.log('Quetengas un bonito día')
        break
    default:
        console.log('Opción no valida')
        break;
}
