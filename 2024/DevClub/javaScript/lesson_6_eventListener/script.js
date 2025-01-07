// Events Listener

const input  = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")


// criado a funcao para o evento change
function valueChange(EventChange){
    console.log("EVENT->changed-select")
}

// when my select in html changed, he warns
// quando o evento acontecer ele chama a funcao em seguida
select.addEventListener("change", valueChange) 
console.log(" Select changed")