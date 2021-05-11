const btnOpen = document.querySelector('.rules-btn')
const btnClose = document.getElementById('close-rules')
const modalOriginal = document.querySelector('.rules-container')
const btnBonusGame = document.querySelector('.x5')
const btnOriginalGame = document.querySelector('.x3')
const logo =document.getElementById('logo')
const rulesImg = document.getElementById('rules-img')
const scoreCardEl = document.querySelector('.score-card')

btnOpen.addEventListener('click', () => {
    modalOriginal.classList.add('open')
})
btnClose.addEventListener('click', () => {
    modalOriginal.classList.remove('open')
})

const paperBtn = document.getElementById('paper')
const rockBtn = document.getElementById('rock')
const scissorsBtn = document.getElementById('scissors')

const paperBnsBtn = document.getElementById('paperB')
const rockBnsBtn = document.getElementById('rockB')
const scissorsBnsBtn = document.getElementById('scissorsB')
const lizardBnsBtn = document.getElementById('lizardB')
const spockBnsBtn = document.getElementById('spockB')

const containerBonus = document.querySelector('.bonus')
const containerOriginal = document.querySelector('.original')
const containerStageOne = document.querySelector('.stage-1')
const placeholders = document.querySelectorAll('.placeholder')
const restart = document.getElementById('restart-game')
const scoreEl = document.getElementById('score')
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

btnBonusGame.addEventListener('click', () =>{
    bonusGame = true
    gameSetUp()
})
btnOriginalGame.addEventListener('click', () =>{
    bonusGame = false
    gameSetUp()
})


function gameSetUp() {
    if (bonusGame == false) {
        options = ['rock', 'paper', 'scissors']
        rulesImg.src = './images/image-rules.svg'
        btnOriginalGame.classList.add('hidden')
        btnBonusGame.classList.remove('hidden')
        containerOriginal.classList.remove('hidden')
        containerBonus.classList.remove('open')
        setTimeout(() => {
            logo.src = './images/logo.svg'
            btnOriginalGame.style.display = 'none'
            btnBonusGame.style.display = 'block'
        }, 2500);
    } else {
        options = ['rock', 'paper', 'scissors','lizard', 'spock']
        btnBonusGame.classList.add('hidden')
        btnOriginalGame.classList.remove('hidden')
        containerOriginal.classList.add('hidden')
        containerBonus.classList.add('open')
        setTimeout(() => {
            logo.src = './images/logo-bonus.svg'
            btnBonusGame.style.display = 'none'
            btnOriginalGame.style.display = 'block'
        }, 2500);
        rulesImg.src = './images/image-rules-bonus.svg'
    }
}
scoreCardEl.addEventListener('click', resetScore)

paperBtn.addEventListener('click', () => {stepOne(paperBtn)})
rockBtn.addEventListener('click', () => {stepOne(rockBtn)})
scissorsBtn.addEventListener('click', () => {stepOne(scissorsBtn)})

paperBnsBtn.addEventListener('click', () => {stepOne(paperBnsBtn)})
rockBnsBtn.addEventListener('click', () => {stepOne(rockBnsBtn)})
scissorsBnsBtn.addEventListener('click', () => {stepOne(scissorsBnsBtn)})
lizardBnsBtn.addEventListener('click', () => {stepOne(lizardBnsBtn)})
spockBnsBtn.addEventListener('click', () => {stepOne(spockBnsBtn)})
    
gameSetUp()

function stepOne(elem) {
    if (bonusGame == false) {
        let items = document.querySelectorAll('.original .item-init')
        let i = 0.2
        items.forEach(item => {
            item.style.animationDelay = i + 's';
            item.classList.add('clicked')
            i = i+0.3;
        })
    } else {
        let items = document.querySelectorAll('.bonus .item-init')
        let i = 0.1
        items.forEach(item => {
            item.style.animationDelay = i + 's';
            item.classList.add('clicked')
            i = i+0.1;
        })
    }
    
    if (bonusGame == false) {
        containerOriginal.classList.add('hidden')
        containerStageOne.classList.add('open')
        btnBonusGame.classList.add('hidden')
        gameLogic(elem)
    } else {
        containerBonus.classList.remove('open')
        containerStageOne.classList.add('open')
        btnOriginalGame.classList.add('hidden')
        gameLogic(elem)
    }
    
}

function gameLogic(el) {
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
    let playerEl = document.querySelector('.pl-left')
    let compEl = document.querySelector('.pl-right')
    const playerChoice = document.createElement('div')
    const playerInner = document.createElement('div')
    const compInner = document.createElement('div')
    const compChoice = document.createElement('div')

    playerInner.classList.add('item-inner')
    compInner.classList.add('item-inner')
    compChoice.classList.add('item', 'item-choice', opt2)
    playerChoice.classList.add('item', 'item-choice', opt1)
    compChoice.appendChild(compInner)
    playerChoice.appendChild(playerInner)

    setTimeout(() => {
        containerStageOne.classList.add('step-1')
        containerStageOne.appendChild(playerChoice)
    }, 3500);
    setTimeout(() => {
        containerStageOne.appendChild(compChoice)
    }, 4000);
    if (winner == 'player') {
        setTimeout(() => {
            playerEl.classList.add('open')
        }, 5500);
        
    } else if (winner == 'comp'){
        setTimeout(() => {
            compEl.classList.add('open')
        }, 5500);
    }
    setTimeout(() => {
        stepThree(winner)
    }, 6000);
}
function stepThree(won) {
    let outcome = document.querySelector('.outcome')
    let outcomeText = document.getElementById('outcome-title')
    if (won == 'player') {
        scoreCardEl.classList.add('updated')
        score++
        scoreEl.innerText = score
        containerStageOne.classList.add('final')
        outcome.classList.add('open')
        outcomeText.innerText = 'You win'
    } else if (won == 'comp') {
        scoreCardEl.classList.add('updated')
        score--
        scoreEl.innerText = score
        containerStageOne.classList.add('final')
        outcome.classList.add('open')
        outcomeText.innerText = 'You lose'
    } else if(won == 'draw'){
        containerStageOne.classList.add('final')
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
    containerStageOne.classList.remove('final','step-1')

    let itemsChoice = document.querySelectorAll('.item-choice')
    itemsChoice.forEach(item => {
        setTimeout(() => {
            item.style.animation = 'itemsFade 0.9s 0.2s'
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
        }, 1000);
        })

    let itemsInit = document.querySelectorAll('.item-init')
    itemsInit.forEach(item => {
        item.classList.remove('clicked')
    })

    if (bonusGame == false) {
        setTimeout(() => {
            containerStageOne.classList.remove('open')
            containerOriginal.classList.remove('hidden')
            btnBonusGame.classList.remove('hidden')
        }, 1000);
    } else {
        setTimeout(() => {
            containerStageOne.classList.remove('open')
            containerBonus.classList.add('open')
            btnOriginalGame.classList.remove('hidden')
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
