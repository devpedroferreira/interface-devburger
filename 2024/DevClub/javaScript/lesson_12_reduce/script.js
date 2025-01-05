// reduce

// return new value = array, object,string, number e etc..
// accept 4 parametrs
    // acumulador
    // valor atual
    // index 
    // array completo

/*
const list = [1,2,3,4,5,6,7]

const sum = list.reduce((acumulador, valorAtual) =>{
    return acumulador + valorAtual
}, 0) //  , 0 para o acumulador iniciar contagem no ZERO
console.log(sum)
*/
const cart = [
    {productName: 'Abobora', priceKg: 5, kg:1.4 }, 
    {productName: 'Abobora', priceKg: 3.7, kg:1.6 }, 
    {productName: 'Abobora', priceKg: 5.5, kg:4 }, 
    {productName: 'Abobora', priceKg: 1.9, kg:2.3 }, 
    {productName: 'Abobora', priceKg: 5.9, kg:1.7 }, 
    {productName: 'Abobora', priceKg: 10.8, kg:2 }, 
]
const sumCart = cart.reduce((acc,value) => {
    const sumTemp = value.priceKg * value.kg
    return acc + sumTemp
}, 0)

// to fixed 2 casas decimais 
console.log('Total: R$',sumCart.toFixed(2))