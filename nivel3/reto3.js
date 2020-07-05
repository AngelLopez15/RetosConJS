const name=prompt('Cual es tu nombre?').trim()
const lastName=prompt('Cual es tu apellido?').trim()
const country=prompt('Cual es tu país?').trim()

// let upper=name.charAt(0).toUpperCase()
// console.log(upper)
// let subS=name.substring(1)
// console.log(subS)
// let name2=`${upper}${subS}`
// let array2=capitalize(array[0])

const capitalize = (str) => {
    const upper = str.charAt(0).toUpperCase()
    const subS=str.substring(1)
    return `${upper}${subS}`
}

const newString = (array) => {
    let newArray=array.map(el=>{
        return capitalize(el)
    })
    return newName=newArray.join(' ')
}



const name2=newString(name.split(' '))
const lastName2=newString(lastName.split(' '))
const country2=newString(country.split(' '))


// let array2=capitalize(array[0])

// console.log(newName)

// const nameCtlz=capitalize(name)
// const lastCtlz=capitalize(lastName)
// const countryCtlz=capitalize(country)

// console.log(`Mi nombre es ${nameCtlz} ${lastCtlz} y soy de ${countryCtlz} `)

console.log(`Mi nombre es ${name2} ${lastName2} y soy de ${country2}`)