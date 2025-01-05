/* if   = se
   else = senao
 compara / controla fluxo

   operadores:
   > = maior
   < = menor
   == = igual 
*/

const notaAluno = 8
const notaCorte = 5

if(notaAluno > notaCorte){
    console.log(`"Parabens, você passou de ano! sua nota ", ${notaAluno}`)
} else{
    console.log("Você esta de recuperação!")
}
