
// map result for change value with innerHTML
const result = document.querySelector('.result')

// 5 part 
const humanScore = document.querySelector('#human-score')
const alexaScore = document.querySelector('#alexa-score')

let humanScoreCount = 0
let alexaScoreCount = 0

//type of sintaxe
// humanScoreNumer  = Camel case
// GAME_OPT         = Snake case

// ENUM
const game_opt = {
    rock:       'rock',
    paper:      'paper',
    scissors:   'scissors'
}


// 1 part - choice user =  arrow function click button for human
const playHuman = (humanChoice) =>{
    //console.log(humanChoice)
    //console.log('machine return:', playMachine())
    playTheGame(humanChoice, playMachine()) // get human and machine for part3 return
}

// 2 part - choice machine
const playMachine = () =>{
    const choices = [game_opt.rock, game_opt.paper, game_opt.scissors]
    const randomNumber = Math.floor(Math.random() * 3) // math.random resposta de 0.1 a 0.9 por isso * 3
    return choices[randomNumber]
}

// 3 part - play the game
const playTheGame = (human, machine) =>{
    console.log('Humano: ', human, '  /   Alexa IA: ', machine) // show match
    // part 4
    if(human === machine){
        result.innerHTML = " Deu EMPATE !"
   
    }else if((human === game_opt.paper && machine === game_opt.rock) || 
             (human === game_opt.rock && machine === game_opt.scissors)  ||   
             (human === game_opt.scissors && machine === game_opt.paper) 
            ){
        humanScoreCount++
        humanScore.innerHTML = humanScoreCount
        result.innerHTML = " Você GANHOU !"
                
    }else{
        alexaScoreCount++
        alexaScore.innerHTML = alexaScoreCount
        result.innerHTML = " Alexa IA GANHOU !"
    }
}