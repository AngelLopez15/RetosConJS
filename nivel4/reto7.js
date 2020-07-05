const election = parseInt(prompt(`vamos a calculas el área y perimetro de altuma de estas figuras:
1-triangulo
2-cuadrado
3-pentagono`)) 

const perimetro=(number,side)=>{
    return number*side
}
const heightT=(side)=>{
    return Math.sqrt((3*side)/2)
}

const areaT=(base,height)=>{
    return (base*height)/2
}

const areaC=(side)=>{
    return Math.pow(side,2)
}

const areaP=(side)=>{
    const l= Math.pow(side,2)
    return 1.72*l
}

switch (election) {
    case 1:
        const side=3
        const sidelong=parseInt(prompt('ingrese el valor del un lado'))
        const prmT= perimetro(sidelong, side)
        const height=heightT(sidelong)
        const areaTr= areaT(sidelong,height)
        console.log(`El perimetro del triangulo es ${prmT}`)
        console.log(`El area del triangulo es ${areaTr}`)
        break;
    case 2:
        const sideC=4
        const sidelongC=parseInt(prompt('ingrese el valor del un lado'))
        const prmC=perimetro(sidelongC,sideC)
        const areaCu=areaC(sidelongC)
        console.log(`El perimetro del cuadrado es ${prmC}`)
        console.log(`El area del cuadrado es ${areaCu}`)
        break;
    case 3:
        const sideP=5
        const sidelongP=parseInt(prompt('ingrese el valor del un lado'))
        const prmP=perimetro(sidelongP,sideP)
        const areaPe=areaP(sidelongP)
        console.log(`El perimetro del pentagono es ${prmP}`)
        console.log(`El area del pentagono es ${areaPe}`)
        break;
    default:
        console.log('Opcion no valida')
        break;
}