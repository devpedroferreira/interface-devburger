/*
    FILTER
    -Cria um novo array, apartir de um array percorrido.(array original)
    -Cria um novo array apenas com elementos filtrados.
    -Aceita apesna 3 parametros
        -item do array
        -index
        -arraycompleto

        return true : item atual passa para o novo array
        return falsa: item atual NAO passa pelo array.

*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter( number => number > 100)
console.log(newList)
/*
const newList = list.filter( number => {
    if (number > 100) return true
    else return false
})
console.log(newList)
*/

