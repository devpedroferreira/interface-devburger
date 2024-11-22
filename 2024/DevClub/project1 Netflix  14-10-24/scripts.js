/*Funcoes so sao executadas quando sao chamadas 

1-Vou criar um botão
quando o botão for clicado, ele chama a funcao.
2-A funcao vai ligar o som

document = quando eu quero pegar algo no html
querySelector (Selecionar ou pegar um item do html)
addEventListener - para ficar de olho no botao e me avisar

*/


/**variavel */
let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".ClassVideo")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

/*para ficar de olho no botao e me avisar*/
botaoSom.addEventListener("click", ligaSom)

/*funcao */
function ligaSom(){
    video.muted = false
}

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}