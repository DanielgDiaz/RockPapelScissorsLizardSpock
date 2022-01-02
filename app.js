const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LIZARD = "lizard";
const SPOCK ="spock"; 

const DRAW = 'draw';
const WIN = 'win';
const LOSE = 'lose';

let isPlaying = false;

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const lizardkBtn = document.getElementById('lizard')
const spockBtn = document.getElementById('spock')
const resultText = document.getElementById('start-text')
const userImg = document.getElementById('user-img')
const computerImg = document.getElementById('computer-img')

rockBtn.addEventListener('click', ()=>{
    play(ROCK);
});
paperBtn.addEventListener('click', ()=>{
    play(PAPER);
});
scissorsBtn.addEventListener('click', ()=>{
    play(SCISSORS);
});
lizardkBtn.addEventListener('click', ()=>{
    play(LIZARD);
});
spockBtn.addEventListener('click', ()=>{
    play(SPOCK);
});

function play(userOption){
    if(isPlaying) return;
    isPlaying = true;

    userImg.src = "assets/"+userOption+".svg"
    resultText.innerHTML = "Choosing!";

    const interval = setInterval(function(){
        const computerOption = calcComputerOption();
        computerImg.src = "assets/"+computerOption+".svg";
    }, 200);

    setTimeout(function(){

        clearInterval(interval);

        const computerOption = calcComputerOption();
        const result = calcResult(userOption, computerOption);

        computerImg.src = "assets/"+computerOption+".svg";
        
    switch(result){
        case DRAW:
            resultText.innerHTML =" You draw!";
            break;
        case WIN:
            resultText.innerHTML = " You win!";
            break;
        case LOSE:
            resultText.innerHTML =" You lose!";
            break;
    }
    isPlaying = false;
    }, 2000);
}


function calcComputerOption(){
    const number = Math.floor(Math.random() * 5);
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER
        case 2:
            return SCISSORS;
        case 3:
            return LIZARD;
        case 4:
            return SPOCK;
    }

}

function calcResult(userOption, computerOption){
    if( userOption === computerOption){
        return DRAW
    }
    else if (userOption === ROCK){
        if(computerOption === PAPER) return LOSE;
        if(computerOption === SCISSORS) return WIN;
        if(computerOption === LIZARD) return WIN;
        if(computerOption === SPOCK) return LOSE;
    }

    else if (userOption === PAPER){
        if(computerOption === ROCK) return WIN;
        if(computerOption === SCISSORS) return LOSE;
        if(computerOption === LIZARD) return LOSE;
        if(computerOption === SPOCK) return WIN;
    }

    else if (userOption === SCISSORS){
        if(computerOption === PAPER) return WIN;
        if(computerOption === ROCK) return LOSE;
        if(computerOption === LIZARD) return WIN;
        if(computerOption === SPOCK) return LOSE;
    }

    else if (userOption === LIZARD){
        if(computerOption === PAPER) return WIN;
        if(computerOption === SCISSORS) return LOSE;
        if(computerOption === ROCK) return LOSE;
        if(computerOption === SPOCK) return WIN;
    }

    else if (userOption === SPOCK){
        if(computerOption === PAPER) return LOSE;
        if(computerOption === SCISSORS) return WIN;
        if(computerOption === LIZARD) return LOSE;
        if(computerOption === ROCK) return WIN;
    }
}