

const salario = 5000

if (salario < 3000){
    console.log("JUNIOR")
}else{
    console.log(" >= 5mil SENIOR ")    
}

const salario2 = 2500
// operador ternario mesmo que o if so que rezumido.
salario2 < 3000 ? console.log(" JUNIOR") : console.log("SENIOR")

// para deixar so o if usar &&
salario2 <= 3000 && console.log("SeniorrrrrrrrRRR")

// com senao se 
salario <= 3000 ? console.log("JUNIOR") : salario > 3100 && < 10000 ? console.log("Senao se ele eé SENIOR") : console.log(" > q 10k DIretor.") 
