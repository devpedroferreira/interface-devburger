// for ([inicializacao]; [condição]; [expressao final]){
//      seu codigo
// }
/*
for (let i = 0; i < 15; i++){
    console.log(i)
}
*/
// ex
/* apagar aqui
users = [
    'marina',
    'joao',
    'marcos',
    'aline',
    'gustavo',
    'lima',
    'tiao',
    'pedro',
]

// users.length = length tamanho do array, quantidade de nomes = tamanho
for (let i = 0; i < users.length ; i++){
    console.log(users[i])// print names array
}
*/ //apagar aqui

/* apaga aqui
// lesson_11_for_of
// vasculha item por item de uma string letra por letra ou de um array, posicao a posicao
//para sozinho quando termina de vasculhar.
const myName = 'Pedro'
const users2 = ['Ana','Bruna','carol','Daniela']

for(const letter of myName){
    console.log(letter)
}

for(const name of users2){
    console.log(name)
}

// lesson_12_for_in
// para interar OBJECT key por key, item por item.
const usuario = {name:'Pedro', age:'33', street:'Rua dos abea'}

for(const key in usuario){
    console.log(key)
}
*/ // apaga aqui

//lesson 12 foreach - intera array
// forEach(item, index, array)
const usuarios = [
    {name:'Pedro', age:'20', contact:'99 91245-9940'},
    {name:'Rodolfo', age:'19', contact:'99 91245-1242'},
    {name:'Paulo', age:'18', contact:'99 91245-5643'},
    {name:'Aline', age:'17', contact:'99 91245-9144'},
]

// essa => é uma function
usuarios.forEach (item => {
   // console.log(item) // vascula linha a linha quando terminar continua o codigo
    console.log(`Nome: ${item.name}, idade: ${item.age}, contato: ${item.contact}`)
})
