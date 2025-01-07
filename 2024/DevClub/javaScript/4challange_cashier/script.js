// supermakert cashier
// 30% descont itens avobe 30$


const products = [10, 244, 99, 2, 20, 33, 250]
const desct30 = 30
let somaTotal = 0 

function calcDesct( item, procentDesct){
    const desconto = item * (procentDesct / 100) // 30% desconto
    return desconto
}

console.log('resultado 73.2 teste desconto: ',calcDesct(244,30))

products.forEach( element => {

    if(element >= 30){
        const desconto = calcDesct(element, 30)
        somaTotal = somaTotal + (element - desconto)
    }else{
        //somaTotal = somaTotal + element
        somaTotal += element
    }

});


console.log(`Valor total com desconto em items >= 30,00 R$ ${somaTotal.toFixed(2)}`)
