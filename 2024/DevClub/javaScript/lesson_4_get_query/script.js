/*

search in html = document

sitaxe do getElement = document.getElementById("main-input")

1- getElementById        = get one element ID
2- getElementByClassName = get all elements from the same class
3- getElementByTagName   = get all elements from the same tag
4- getElementByName      = get all elements from the same name

5- querySelector         = query frist element of type searched
6- querySelectorAll      = query all elements of type searched

*/

/* 1- getElementById        = get one element ID */
const get = document.getElementById("main-input")
console.log(get)

/* 2- getElementByClassName = get all elements from the same class */
const byClass = document.getElementsByClassName(".parag")
console.log(byClass)

/* 3- getElementByTagName   = get all elements from the same tag 
tag p for paragraph
*/
const byTagName = document.getElementsByTagName("p")
console.log(byTagName)

/* 4- getElementByName      = get all elements from the same name 
most used in formulary */
const byName = document.getElementsByName("forms")
console.log(byName)


/* 5- querySelector         = query alwa, frist element of type searched 
below exemple tag a for frist link */
// querySelector = so tras 1 elemento e o PRIMEIRO.
// sitaxe const consult = document.querySelector("a") 
// usar . para classe
// usar #para ID
// tags nao usar nada 

// querySelector pega so o primeiro paragrafo
const consult = document.querySelector("p")
console.log(consult)

/* for query/search class */
const ClassConsult = document.querySelector(".parag")
console.log(ClassConsult)

/* for query/search ID */
const IdConsult = document.querySelector("#inputAge")
console.log(IdConsult)

/* for query tag.class */
// pegando o button em baixo com a mesma tag parag
// especifico, nao pegou o primeiro
const ButtonF = document.querySelector("button.parag")
console.log(ButtonF)

/* 6- querySelectorAll      = query all elements of type searched */
const qSearch = document.querySelectorAll("input")
console.log(qSearch)

