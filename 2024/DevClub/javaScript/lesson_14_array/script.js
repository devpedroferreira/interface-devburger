/*
 ARRAY
   1 push        : Adiciona mais um item ao array
   2 lenght      : mostra o tamanaho do array
   3 sort        : organiza o array
   4 delete      : deleta o item de uma posição do array
   5 every       : testa/passa todos os elementos do array em uma condição - totos tem que passa na condition
   6 some        : se um passar na condition, return true
   7 fill        : preenche posição do array como desejarmos
   8 find        : busca no array
   9 findIndex   : retora o item + o index
  10 concat      : concatena arrays, junta arrays
  11 join        : junta os elementos do array, separados por um separador, formando uma string
  12 pop         : remove o ultimo item do array
  13 shift       : remove o primeiro item do array
  14 slice       : retorna um pedaço/fatia do array 
  15 splice      : remove, adiciona, substitui elementos do arrays

 */

// 1 push
const numbers = [3,1,2]
numbers.push(4) // add no final do array
numbers.push(5)
numbers.push('Pedro')
console.log(numbers)

// 2 length
const LenG = numbers.length
console.log('O tamanho do array: ',LenG)

// 3 sort 
numbers.sort()
console.log(numbers,' sort aplied')

// 4 delete
delete numbers[5]
console.log(numbers, 'delete aplied')

// 5 every - retor true if all pass in condition
const users = [
    {name: 'Pedro',credit:900},
    {name: 'Ana',credit:200},
    {name: 'Bruna',credit:500},
    {name: 'Carol',credit:600},
    {name: 'Daniela',credit:700},
]
const creditTest = users.every(user => user.credit > 100 )
console.log(' resposta every: ',creditTest)

// 6 some: se um passar na condition, return true
const testSome = users.some(user => user.credit > 100)
console.log('resposta some: ',testSome)

// 7 fill
// 1 oque vai ser colocado no array
// 2 a posicao inicial
// 3 posicao final
numbers.fill('Pedro-Front-End') // preencheu todas as posicoes com esse valor
console.log(numbers)

numbers.fill('testA', 4,5) // valor, inicio, fim
console.log(numbers)

// 8 find
const findUser = users.find( user => user.name === 'Pedro')
console.log('Retornou a linha/item: ',findUser)

// 9 findIndex
const indexFind = users.findIndex (user => user.name === 'Bruna')
console.log('retorno findINDEX: ', indexFind)

// 10 concat - concatena arrays
const array1 = [1,2,3]
const array2 = [4,5,6]

const array3 = array1.concat(array2)
console.log('resposta concact: ',array3)

// 11 join - junta os elementos do array, separados por um separador, formando uma string
const natureElements = ['fire','water','earth','air-forces']
const natureString = natureElements.join(' <-> ') // entre aspas o separador
console.log('resposta join: ', natureString) 

// 12 pop - get the last element / remove o ultimo item do array
const poped = natureElements.pop() // get the last element
console.log('reposta poped: ',poped)
console.log('testando array natureElements: ',natureElements) // removeu o ultimo elemento

// 13 shift - remove o pimeiro item do array
const shifted = natureElements.shift()
console.log('reposta shifted : ',shifted)

// 14 slice - retorna um pedaço/fatia do array
const students = ['Pedro','Ana','Bruna','Carol','Daniela','Eduarda','Fernanda']
const sliceTest = students.slice(1,3) // inicio,fim, pega o 1 e 2, no 3 para
console.log('Alunos: ',students)
console.log('resposta slice: ',sliceTest)

// 15 splice - remove, adiciona, substitui elementos do arrays - altera o array original
students.splice(3,3, "NOVO VALOR") // 1 posição, 2 quantos vai remover, 3 o que vai adicioonar
console.log('resposta splice: ',students) // removeu três no meio, deixou a ultima
