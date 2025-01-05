/* get somente o texto do paragrafo*/
// querySelector usar . # 
// tras so o priemiro 
const get = document.querySelector("#main-input")
console.log(get)

//alterando placeholder
get.placeholder = " write here "

// mostrar so o conteudo do placeholder
console.log(get.placeholder)



// elements change
/* ambos trazem o texto do primeiro paragrafo */
const getV = document.querySelector(".paragraph")

//ok 
//console.log(getV.textContent)// mostra so o texto no html
//getV.textContent = " Novo texto, no mas LOREM"//altera o 1 paragrafo, alerando o texto que acabou de capturar

console.log(getV.innerText) // so o texto no css

console.log(getV.innerHTML) // get all, return html code line
// altera o texto no html
getV.innerHTML= "NEw text <b>BOLD</b> no LOREM NO lorem"

// CSS changes //
const getB = document.querySelector("#fbutton")
// tem que ter o style dps o que vai alterar
getB.style.backgroundColor = "#244363"


// EVENTS // 
const inputV = document.querySelector("#main-input")

// print o valor digitado no input acima
function keyPress(){
   console.log(inputV.value)
}

function clickedButton(){
    alert(" - >  EM VIADO ")
}

