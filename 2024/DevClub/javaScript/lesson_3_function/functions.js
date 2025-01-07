/*trecho de code que so é executado qunado é CHAMADO */

/*
const variavel = "texto"
console.log(variavel)

/*criando function */
/*
function nomeNaTela(){
 console.log("NOME FUNCTION")   
}
*/

/*chamando function */
//nomeNaTela()


// lesson_13_advanced
// run less retunr
function soma(value, value1){
        value + value1
}
// less retunr
const resultado = soma( 20, 30)
console.log('soma:',resultado)

// with return
function sub(v1,v2){
    return v1 - v2
}
const res = sub(10, 5)
console.log('resultado sub: ',res)

// lesson 14 function arrow
// ex 1
function nameM (myname){
    return (`Seu nome é: ${myname}`)
}
console.log(nameM('Pedro'))

//ex 2
const name2 = (mynameIS) => `Your name is: ${mynameIS}`
console.log(name2('Maria 2')

)
const name3 = (AmynameIS) =>{
return `Your name is: ${AmynameIS}`
} 
console.log(name3('Carlos'))

// function anonymous - not have name
array.forEach(element => {
    
});

// tbm funfa
array.forEach(function() {
    
});