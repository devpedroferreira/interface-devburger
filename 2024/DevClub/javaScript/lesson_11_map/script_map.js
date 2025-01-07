/*
MAP => array map
- Crai um novo array , apartir do array percorrido(original)
- Cria um novo array com a mesma quantidade de itens do original
- Aceita 3 paremetros: item, index, arrayOriginal
*/

/* inicio 
const number = [1,2,3,4,5,6,7]

const double = number.map((item, index, arrayOriginal) => {
    //console.log('item:'+ item)
    console.log('index:'+ index +'   /   item:'+ item )
    //console.log(arrayOriginal)

    const newArray = item / 3

    return newArray
})

//console.log(double)

const recebe = double.map((item2,index,AarrayOriginal) => {
    console.log('RECEBE:')
    console.log(item2)
})

*/ //fim

// 2 aula 

const list = [
    {name: 'Pedro', vip: true },
    {name: 'Ana', vip: true },
    {name: 'Carol', vip: true },
    {name: 'Bruna', vip: true },
    {name: 'Fabrina', vip: false },
    {name: 'Luana', vip: true },
    {name: 'Maria', vip: false },
]

const newList = list.map(menber => {
    
    // mais resumido
    
    // return {
    // name: menber.name,            
    // braceletColor: menber.vip ? 'black' : 'green' // se ternario
    
    // }
    // console.log(newList)

    // let braceletColor // se normal muita linha 
    // if(braceletColor === true){
        //braceletColor = 'black'
    //}else {
        //braceletColor = 'green'
    //} 

        //const newMenber = {
            //name: menber.name,
            //braceletColor: braceletColor
        //}
        //return newMenber

    const newMenber = {
        name: menber.name,            
        braceletColor: menber.vip ? 'black' : 'green' // se ternario
        //
    }

    return newMenber // para entrar no novo array newList , put return
})
console.log(newList)

// challange 
const students = [
    {user:'Pedro', testGrade: 10 },
    {user:'Joao', testGrade: 5 },
    {user:'Ana', testGrade: 4 },
    {user:'Maria', testGrade: 6 },
    {user:'Bruna', testGrade: 7 },
    {user:'Carol', testGrade: 5 },
]

const lesson = students.map( user =>{
    return{
        name: user.user,
        grade: user.testGrade > 5 ? 'Aprovador' : 'Reprovado, tente novamente.',
        
    }
})
console.log(lesson)