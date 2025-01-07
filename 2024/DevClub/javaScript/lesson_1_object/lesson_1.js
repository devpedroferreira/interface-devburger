console.log("Oque eu quiser GG")
/* Tipos de dados: 
   1 string = texto
   2 numeros = 
   3 bolean = 01010101 true ou falsse
   4 object = mapeamento propriedade do objeto
   propriedade cor = preto
   propreiedade pese = 300g
   propriedade altura = 20cm

   5 null/undefined = ausencia de informacao
   undefined = erro no code
   null = setado pelo dev


   var = ate 2015 alguns problemas, tipo 2 variavel com mesmo nome.
   const = var do tipo constante, valor imutavel/inauteravel.
   let   = declarar e usar no mesmo bloc tipo um if, se for 
   imprimir la na frente a mesmo que usou no if la atras,
   ele nao vai achar, so funciona onde foi declarada. 
   
   */

    const text1 = "texto com aspas duplas"
    const text2 = 'texto com aspas simples'
    const text3 = `texto com crase aceita ENTRE 
                    qbra linha` /* chamada de template literals ou template string*/
console.log(text1)
console.log(text2)
console.log(text3)

const myAge = 30
const myString = `TExto com variavel ${myAge}, mais texto
pulo linha..`

/* 4 object propriet */
/* com o 'LET' consigo alterar o valor do numero por exemplo
o. O const nao deixa alterar valorque foi criado anteyou
you */
const pedro = {
    name: "Pedro",
    age: 30,
    address: {
        street:'Rua dos bobos',
        number: 0,
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil',
    }
}

/*alterando valor do const kkkk */
pedro.address.number = 22

/* print 1 object */
console.log(pedro.age)

console.log(pedro.address.city)
console.log(pedro)

/* array = matriz/vetor */

const users = [
    {name:'Pedro', age:30},
    {name: 'Aline', age: 17},
]
/*alterando informacao no array*/
users[1].name = "Laryssa"
console.log(users)

/*acessando item especifico */
console.log("idade posicao 0 ZERO",users[0].age)