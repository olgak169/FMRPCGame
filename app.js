
const btnRules = document.querySelector('.btn-rules')
const btnBonus = document.querySelector('.btn-five')
const btnOriginal = document.querySelector('.btn-three')
const logo = document.querySelector('.logo')
const rules = document.querySelector('.rules-container')
const rulesImg = document.getElementById('rules-img')
const btnCloseModal = document.getElementById('close-modal')
const scoreCardEl = document.querySelector('.score-card')
const scoreEl = document.getElementById('score')
const restart = document.getElementById('restart-game')
const placeholders = document.querySelectorAll('.placeholder')
const circleLeft = document.getElementById('circle-left')
const circleRight = document.getElementById('circle-right')

const contOriginal = document.querySelector('.original')
const contBonus = document.querySelector('.bonus')
const contFinal  = document.querySelector('.final')


const paperBtn = document.getElementById('paperA')
const rockBtn = document.getElementById('rockA')
const scissorsBtn = document.getElementById('scissorsA')

const paperBnsBtn = document.getElementById('paperB')
const rockBnsBtn = document.getElementById('rockB')
const scissorsBnsBtn = document.getElementById('scissorsB')
const lizardBnsBtn = document.getElementById('lizardB')
const spockBnsBtn = document.getElementById('spockB')

let score = localStorage.getItem('score')
if (score != null) {
    score = score
    scoreEl.innerText = score
} else {
    score = 0
    scoreEl.innerText = 0
}
let options  = []
let bonusGame = false;

btnBonus.addEventListener('click', () => {
    bonusGame = true
    gameSetUp()
})
btnOriginal.addEventListener('click', () => {
    bonusGame = false
    gameSetUp()
})
btnRules.addEventListener('click', () => {
    rules.classList.add('open')
})
btnCloseModal.addEventListener('click', () => {
    rules.classList.remove('open')
})
scoreCardEl.addEventListener('click', resetScore)

paperBtn.addEventListener('click', () => {stepOne(paperBtn)})
rockBtn.addEventListener('click', () => {stepOne(rockBtn)})
scissorsBtn.addEventListener('click', () => {stepOne(scissorsBtn)})

paperBnsBtn.addEventListener('click', () => {stepOne(paperBnsBtn)})
rockBnsBtn.addEventListener('click', () => {stepOne(rockBnsBtn)})
scissorsBnsBtn.addEventListener('click', () => {stepOne(scissorsBnsBtn)})
lizardBnsBtn.addEventListener('click', () => {stepOne(lizardBnsBtn)})
spockBnsBtn.addEventListener('click', () => {stepOne(spockBnsBtn)})

function gameSetUp() {
    if (bonusGame == false) {
        options = ['rock', 'paper', 'scissors']
        rulesImg.src = './images/image-rules.svg'
        btnBonus.classList.remove('hidden')
        btnOriginal.classList.add('hidden')
        contBonus.classList.add('hidden')
        contOriginal.classList.remove('hidden')
        logo.classList.remove('bonus-game')
    } else {
        options = ['rock', 'paper', 'scissors','lizard', 'spock']
        rulesImg.src = './images/image-rules-bonus.svg'
        btnOriginal.classList.remove('hidden')
        btnBonus.classList.add('hidden')
        contBonus.classList.remove('hidden')
        contOriginal.classList.add('hidden')
        logo.classList.add('bonus-game')
    }
}
function stepOne(elem) {
    if (bonusGame == false) {
        let items = document.querySelectorAll('.item-original')
        items.forEach(item => {
            item.classList.add('clicked')
        })
    } else {
        let items = document.querySelectorAll('.item-bonus')
        items.forEach(item => {
            item.classList.add('clicked')
        })
    }
    
    if (bonusGame == false) {
        contOriginal.classList.add('hidden')
        contFinal.classList.remove('hidden')
        btnBonus.classList.add('hidden')
        gameOrginal(elem)
    } else {
        contBonus.classList.add('hidden')
        contFinal.classList.remove('hidden')
        btnOriginal.classList.add('hidden')
        gameOrginal(elem)
    }
}

function gameOrginal(el) {
    let choice = el.dataset.value
    let randomChoice = Math.floor(Math.random() * options.length)
    let compChoice = options[randomChoice]

    switch (choice) {
        case 'paper':
            if (compChoice == 'paper') {
                stepTwo('paper','paper','draw')
            } else if ( compChoice == 'rock') {
                stepTwo('paper','rock', 'player')
            } else if(compChoice == 'scissors'){
                stepTwo('paper','scissors','comp')
            } else if(compChoice == 'lizard') {
                stepTwo('paper','lizard','comp')
            } else if(compChoice == 'spock') {
                stepTwo('paper','spock','player')
            }
            break;
        case 'rock':
            if (compChoice == 'rock') {
                stepTwo('rock','rock','draw')
            } else if ( compChoice == 'paper') {
                stepTwo('rock','paper', 'comp')
            } else if(compChoice == 'scissors'){
                stepTwo('rock','scissors','player')
            } else if(compChoice == 'lizard'){
                stepTwo('rock','lizard','player')
            } else if(compChoice == 'spock'){
                stepTwo('rock','spock','comp')
            }
            break;
        case 'scissors':
            if (compChoice == 'scissors') {
                stepTwo('scissors','scissors','draw')
            } else if ( compChoice == 'paper') {
                stepTwo('scissors','paper','player')
            } else if(compChoice == 'rock'){
                stepTwo('scissors','rock', 'comp')
            } else if(compChoice == 'lizard'){
                stepTwo('scissors','lizard','player')
            } else if(compChoice == 'spock'){
                stepTwo('scissors','spock','comp')
            }
            break;
        case 'lizard':
            if (compChoice == 'lizard') {
                stepTwo('lizard','lizard','draw')
            } else if ( compChoice == 'paper') {
                stepTwo('lizard','paper','comp')
            } else if(compChoice == 'rock'){
                stepTwo('lizard','rock', 'player')
            } else if(compChoice == 'scissors'){
                stepTwo('lizard','scissors','comp')
            } else if(compChoice == 'spock'){
                stepTwo('lizard','spock','player')
            }
            break;
        case 'spock':
            if (compChoice == 'spock') {
                stepTwo('spock','spock','draw')
            } else if ( compChoice == 'paper') {
                stepTwo('spock','paper','comp')
            } else if(compChoice == 'rock'){
                stepTwo('spock','rock', 'player')
            } else if(compChoice == 'scissors'){
                stepTwo('spock','scissors','player')
            } else if(compChoice == 'lizard'){
                stepTwo('spock','lizard','comp')
            }
            break;
    
        default: 
            console.log('default');
            break;
    }
}

function stepTwo(opt1,opt2,winner) {
    
    const playerChoice = document.createElement('div')
    const playerInner = document.createElement('div')
    const compInner = document.createElement('div')
    const compChoice = document.createElement('div')

    playerInner.classList.add('item-inner')
    compInner.classList.add('item-inner')
    compChoice.classList.add('item', 'item-choice','item-comp', opt2)
    playerChoice.classList.add('item', 'item-choice','item-player', opt1)
    compChoice.appendChild(compInner)
    playerChoice.appendChild(playerInner)

    setTimeout(() => {
        contFinal.classList.add('step-1')
        contFinal.appendChild(playerChoice)
    }, 800);
    setTimeout(() => {
        contFinal.appendChild(compChoice)
    }, 3000);
    if (winner == 'player') {
        setTimeout(() => {
            circleLeft.classList.add('open')
        }, 4500);
        
    } else if (winner == 'comp'){
        setTimeout(() => {
            circleRight.classList.add('open')
        }, 4500);
        
    }
    setTimeout(() => {
        contFinal.classList.add('step-2')
        stepThree(winner)
    }, 4500);
}

function stepThree(won) {
    let outcome = document.querySelector('.outcome')
    let outcomeText = document.getElementById('outcome-title')
    if (won == 'player') {
        scoreCardEl.classList.add('updated')
        score++
        scoreEl.innerText = score
        outcome.classList.add('open')
        outcomeText.innerText = 'You win'
    } else if (won == 'comp') {
        scoreCardEl.classList.add('updated')
        score--
        scoreEl.innerText = score
        outcome.classList.add('open')
        outcomeText.innerText = 'You lose'
    } else if(won == 'draw'){
        outcome.classList.add('open')
        outcomeText.innerText = 'Draw'
    }
    restart.addEventListener('click', stepFour)
    updateLocalStorage()
}
function stepFour() {
    scoreCardEl.classList.remove('updated')
    let outcome = document.querySelector('.outcome')
    outcome.classList.remove('open')
    contFinal.classList.remove('step-1','step-2')

    let itemsChoice = document.querySelectorAll('.item-choice')
    itemsChoice.forEach(item => {
        setTimeout(() => {
            item.style.animation = 'itemFade 0.9s 0.2s'
        },200);
        setTimeout(() => {
            item.remove()
        }, 800);
        })
    
    placeholders.forEach(placeholder  => {
        placeholder.classList.remove('open')
        placeholder.classList.add('fade')
        setTimeout(() => {
            placeholder.classList.remove('fade')
        }, 2000);
        })

    let items = document.querySelectorAll('.item')
    items.forEach(item => {
        item.classList.remove('clicked')
    })
    circleRight.classList.remove('open')
    circleLeft.classList.remove('open')

    if (bonusGame == false) {
        setTimeout(() => {
            contFinal.classList.add('hidden')
            contOriginal.classList.remove('hidden')
            btnBonus.classList.remove('hidden')
        }, 1000);
    } else {
        setTimeout(() => {
            contFinal.classList.add('hidden')
            contBonus.classList.remove('hidden')
            btnOriginal.classList.remove('hidden')
        }, 1000);
    }
}
function updateLocalStorage() {
    localStorage.setItem('score', score)
}
function resetScore() {
    score = 0
    scoreEl.innerText = score
    localStorage.setItem('score', score)
}
gameSetUp()